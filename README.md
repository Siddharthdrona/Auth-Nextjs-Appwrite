# 🔐 Next.js + Appwrite Authentication

A full-stack authentication application built with **Next.js**, **TypeScript**, and **Appwrite**.
This project provides secure user authentication with signup, login, logout, and session handling.

## 🚀 Features

* ✅ User Registration (Signup)
* ✅ User Login
* ✅ User Logout
* ✅ Persistent Authentication State
* ✅ Protected Routes
* ✅ Appwrite Authentication Integration
* ✅ TypeScript Support
* ✅ Next.js App Router
* ✅ React Context API for Authentication State
* ✅ Responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** Next.js
* **Language:** TypeScript
* **Backend Service:** Appwrite
* **Authentication:** Appwrite Account API
* **Styling:** Tailwind CSS
* **State Management:** React Context API

---

## 📂 Project Structure

```
src/
│
├── app/
│   ├── login/
│   ├── signup/
│   └── dashboard/
│
├── appwrite/
│   └── config.ts
│
├── context/
│   ├── authContext.ts
│   ├── authProvider.tsx
│   └── useAuth.ts
│
└── components/
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Siddharthdrona/Auth-Nextjs-Appwrite.git
```

### 2. Navigate into the project

```bash
cd Auth-Nextjs-Appwrite
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 🔑 Appwrite Configuration

## Step 1: Create Appwrite Project

Create a project on Appwrite and get your:

* Project ID
* Endpoint
* Database ID (if using database)
* Collection ID (if using database)

---

## Step 2: Add Web Platform

In Appwrite:

```
Project
   ↓
Platforms
   ↓
Add Web App
```

Add:

```
localhost
```

for development.

---

## Step 3: Environment Variables

Create a file:

```
.env.local
```

Add:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1

NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id

NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id

NEXT_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
```

Replace the values with your Appwrite credentials.

---

# 🔐 Authentication Flow

```
User
  |
  |
Signup / Login Form
  |
  |
Appwrite Account API
  |
  |
Session Created
  |
  |
Auth Context Updates State
  |
  |
User Accesses Application
```

---

# 📦 Available Scripts

Run development server:

```bash
npm run dev
```

Build application:

```bash
npm run build
```

Start production server:

```bash
npm start
```

Run ESLint:

```bash
npm run lint
```

---

# 🌱 Future Improvements

* Google OAuth Authentication
* Password Reset
* Email Verification
* Better UI/UX
* Role Based Authorization
* User Profile Management

---

# 👨‍💻 Author

**Siddharth**

GitHub:

https://github.com/Siddharthdrona

---

⭐ If you like this project, consider giving it a star!
