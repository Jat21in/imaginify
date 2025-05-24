/* eslint-disable camelcase */
import { clerkClient } from "@clerk/nextjs";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }

  const eventType = evt.type;
  const clerkId = evt.data.id;

  if (!clerkId || typeof clerkId !== "string") {
    return new Response("Invalid Clerk ID", { status: 400 });
  }

  // CREATE
  if (eventType === "user.created") {
    const { email_addresses, image_url, first_name, last_name, username } = evt.data;

    const email = email_addresses[0]?.email_address || "";
    const fallbackUsername = email.split("@")[0] || "user";

    const user = {
      clerkId,
      email,
      username: username || fallbackUsername,
      firstName: first_name || "",
      lastName: last_name || "",
      photo: image_url || "",
    };

    try {
      const newUser = await createUser(user);

      if (newUser) {
        await clerkClient.users.updateUserMetadata(clerkId, {
          publicMetadata: {
            userId: newUser._id,
          },
        });
      }

      return NextResponse.json({ message: "User created", user: newUser });
    } catch (error) {
      console.error("Create user error:", error);
      return new Response("Failed to create user", { status: 500 });
    }
  }

  // UPDATE
  if (eventType === "user.updated") {
    const { image_url, first_name, last_name, username } = evt.data;

    const user = {
      firstName: first_name || "",
      lastName: last_name || "",
      username: username || "",
      photo: image_url || "",
    };

    try {
      const updatedUser = await updateUser(clerkId, user);
      return NextResponse.json({ message: "User updated", user: updatedUser });
    } catch (error) {
      console.error("Update user error:", error);
      return new Response("Failed to update user", { status: 500 });
    }
  }

  // DELETE
  if (eventType === "user.deleted") {
    try {
      const deletedUser = await deleteUser(clerkId);
      return NextResponse.json({ message: "User deleted", user: deletedUser });
    } catch (error) {
      console.error("Delete user error:", error);
      return new Response("Failed to delete user", { status: 500 });
    }
  }

  console.log(`Webhook received: ID = ${clerkId}, Type = ${eventType}`);
  console.log("Body:", body);

  return new Response("OK", { status: 200 });
}
