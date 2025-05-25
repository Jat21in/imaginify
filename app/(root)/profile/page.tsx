import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Collection } from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <div className="mb-10 px-4">
        <Header title="Profile" />
      </div>

      <section className="container mx-auto mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Credits Available */}
          <div className="rounded-xl border border-gray-200 p-6 shadow-md bg-white">
            <p className="p-14-medium md:p-16-medium text-gray-700">
              CREDITS AVAILABLE
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src="/assets/icons/coins.svg"
                alt="coins"
                width={50}
                height={50}
                className="size-9 md:size-12"
              />
              <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
            </div>
          </div>

          {/* Image Manipulation */}
          <div className="rounded-xl border border-gray-200 p-6 shadow-md bg-white">
            <p className="p-14-medium md:p-16-medium text-gray-700">
              IMAGE MANIPULATION DONE
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src="/assets/icons/photo.svg"
                alt="photos"
                width={50}
                height={50}
                className="size-9 md:size-12"
              />
              <h2 className="h2-bold text-dark-600">{images?.data.length}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="container mx-auto mt-10 px-4">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Profile;
