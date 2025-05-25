
# 🧠 Imaginify - AI-Powered Image Transformation SaaS Platform

<p align="center">
  <img src="https://github.com/sujatagunale/EasyRead/assets/151519281/daf9e91b-6342-4e9a-9361-8dc2bd01ce64" alt="Project Banner" />
</p>

<div align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" />
  <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" />
  <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" />
</div>

---

## 📌 Overview

**Imaginify** is a full-fledged AI-powered image processing SaaS platform that enables users to perform sophisticated image transformations using cutting-edge AI techniques. It features secure user management, a credit-based image processing model, payment integration, and a responsive interface.

---

## ⚙️ Tech Stack

- **Next.js** – Frontend Framework
- **TypeScript** – Static Type Checking
- **TailwindCSS** – Utility-First CSS
- **MongoDB** – NoSQL Database
- **Stripe** – Payment Integration
- **Cloudinary** – Image Storage & Transformation
- **Clerk** – Authentication & Authorization

---

## 🚀 Features

- 🔐 Secure user authentication and session management  
- 🌄 AI-based image editing: Restore, Recolor, Background Removal, Fill & Object Removal  
- 🧠 Intelligent search for processed images  
- 💳 Credit-based system with payment via Stripe  
- 📦 Tiered pricing plans (Free, Pro, Premium)  
- 🖼️ Image gallery for uploaded and processed images  
- 📈 Profile dashboard with credit tracking and transformation history  
- 💡 Fully responsive and accessible design  
- 🔁 Extendable with reusable modular codebase

---

## 🧑‍💻 Getting Started

### Prerequisites

Ensure you have the following installed:

- Git
- Node.js
- npm

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/imaginify.git
cd imaginify

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit `http://localhost:3000` to view the application in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and configure the following keys:

```env
# Next.js
NEXT_PUBLIC_SERVER_URL=

# MongoDB
MONGODB_URL=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace each with actual credentials from your respective accounts.

---

## 🧪 Code Architecture & Snippets

This project follows a modular structure ensuring high code reusability and easy scalability.

Key Directories:
- `components/` – UI Components
- `lib/` – Utilities and Backend Logic
- `app/` – Page Routes
- `constants/` – Global Configs
- `styles/` – Tailwind and Global Styles

Example: `tailwind.config.ts` and `globals.css` are available in the repo to customize themes and responsiveness.

---

## 📦 Packages & Integrations

- Stripe API for seamless credit purchases  
- Cloudinary for advanced image upload, management & transformations  
- Clerk for user authentication and secure sessions  
- MongoDB via Mongoose ODM for persistent data storage  
- Shadcn & Headless UI for design consistency and accessibility

---

## 📈 Deployment

You can deploy this app using:

- **Vercel** (recommended)
- **Netlify**
- **Docker** (optional Dockerfile setup available)

---

## 🧩 Contribution

Contributions are welcome. Please fork the repository and raise a pull request with detailed information about your changes.

---

## 📃 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
