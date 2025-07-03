
<p align="center">
  <img src="/pitchnest-logo.jpg" width="200" />
</p>

<p align="center">
  <a href="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge&flat">
    <img src="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge&flat" alt="Build Status">
  </a>
</p>

<p align="center">
  <a href="https://reactjs.org">
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&flat&logo=react" alt="React">
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&flat&logo=next.js" alt="Next.js">
  </a>
</p>

<p align="center">
  <a href="https://t.me/pitchnest_od">
    <img src="https://img.shields.io/badge/-Telegram-blue?style=for-the-badge&flat&logo=telegram" alt="Telegram">
  </a>
</p>

# 🚀 PitchNest

A modern web platform built to bridge the gap between **startup founders** and **investors**. This application allows startup founders to showcase their startups, while investors can highlight their past investments and discover promising ventures to support. With built-in communication tools like video chat and profile navigation, building connections has never been easier.

---

## 🌟 Features

### 👥 User Roles

- **Startup Founders**

  - Register and create a profile
  - Add and manage startup information
  - Discover and connect with investors
  - Schedule or join video chats with potential investors

- **Investors**
  - Register and create an investor profile
  - Add previous investments and interests
  - Browse and search for startups
  - Initiate video meetings with founders

### 🔍 Core Functionalities

- 🔐 **Authentication & Authorization**
  - Role-based access for investors and founders
- 📈 **Startup Listing**
  - Detailed startup profiles including industry, funding stage, pitch, etc.
- 💼 **Investor Profiles**
  - Investment history, focus areas, and portfolio
- 🔎 **Search & Filter**
  - Search investors or startups by industry, location, funding needs, and more
- 📹 **Built-in Video Chat**
  - Seamless video communication between users
- 🧭 **Profile Navigation**
  - Browse through startup and investor profiles in a clean UI
- 💬 **Connection Requests**
  - Request to connect and collaborate

---

## 🧪 Tech Stack

- **Frontend**: Next.js, Tailwind CSS / ShadCN UI
- **Backend**: Node.js, Express.js (or API routes via Next.js)
- **Database**: MongoDB (with Mongoose)
- **Authentication**: NextAuth.js / JWT
- **Video Chat**: WebRTC / third-party API like Twilio or Agora
- **Cloud Storage**: Cloudinary (for profile images, documents)
- **Deployment**: Vercel (preferred for Next.js)

---

## 📁 Folder Structure

```bash
root/
├── src/
│   ├── app/             # Next.js routing and layout (App Router)
│   ├── components/      # Reusable UI components
│   │   └── ui/          # Atomic UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Helpers, API clients, utilities
│   └── ...
├── assets/              # Static assets (logo, etc.)
├── public/              # (if/when used for static files)
├── .env.local           # Environment variables
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── README.md
└── ...
```

## Clone the repository

```bash
git clone https://github.com/your-username/investor-startup-connect.git
cd investor-startup-connect
```

## Install dependencies

```bash
npm install
```

## Create environment file

```bash
cp .env.example .env.local
```

## Run the Development Server

```bash
npm run dev
```
