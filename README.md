# 🔐 Next.js + Appwrite Authentication

A full-stack authentication application built with **Next.js**, **TypeScript**, and **Appwrite**.

This project uses the **Next.js App Router**, **nested layouts**, **route groups**, and a **context-based authentication system** to manage public and protected sections of the app cleanly.

---

## 🚀 Features

* ✅ User Registration (Signup)
* ✅ User Login
* ✅ User Logout
* ✅ Persistent Authentication State
* ✅ Protected Routes
* ✅ Appwrite Authentication Integration
* ✅ TypeScript Support
* ✅ Next.js App Router
* ✅ Nested Layouts
* ✅ Route Groups with Parentheses Folders
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

```bash
src/
│
├── app/
│   ├── layout.tsx
│   ├── api/
│   │   └── ...
│   │
│   ├── (pages)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   └── logout/
│   │       └── page.tsx
│   │
│   └── (protected)/
│       ├── layout.tsx
│       └── profile/
│           └── page.tsx
│
├── appwrite/
│   └── config.ts
│
├── context/
│   ├── authContext.ts
│   ├── authProvider.tsx
│   └── useAuth.ts
│
└──components/
    ├── Signup.tsx
    ├── Login.tsx
    ├── Avatar.tsx
    ├── Blob.tsx
    ├── Header.tsx
    ├── Logo.tsx
    └── ProfileCard.tsx
```

---

## 🧱 Architecture Overview

This project is organized around the Next.js App Router and uses layouts to separate concerns:

* **`app/layout.tsx`**
  Global root layout that wraps the entire application and can define metadata or top-level UI.

* **`app/(pages)/layout.tsx`**
  Client layout for all public pages. It checks the current session on mount, manages loading/auth state, and provides the auth context to child routes.

* **`app/(protected)/layout.tsx`**
  Client layout for protected routes. It reads authentication state from context and redirects unauthenticated users to `/login`.

* **`app/api/...`**
  All backend-related endpoints live here. Everything outside `api` is treated as frontend UI.

* **`context/`**
  Contains the custom auth context and hook used throughout the app instead of middleware.

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

```bash
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

```text
Project
   ↓
Platforms
   ↓
Add Web App
```

Add:

```text
localhost
```

for development.

---

## Step 3: Environment Variables

Create a file:

```bash
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

# 📁 Folder & File Structure Explained

## `app/layout.tsx`

The root layout for the entire application.

Responsibilities:

* Wraps all routes
* Sets global metadata
* Can render top-level UI such as a banner or shared shell

---

## `app/api/...`

All backend endpoints live here.

This keeps the backend logic inside the App Router structure while the rest of the app remains frontend-focused.

---

## `app/(pages)/`

A route group used only for organization.

The parentheses folder:

* Does **not** appear in the URL
* Helps group public pages together
* Keeps the app structure clean and readable

### `app/(pages)/layout.tsx`

A client layout that:

* Calls `appwriteService` on mount to check the current user
* Stores `authStatus` and `loader` in state
* Wraps children with:

```tsx
<AuthProvider value={{ authStatus, setAuthStatus }}>
```

* Renders a `Header`
* Adds blog-style background markup around the page content

### `app/(pages)/page.tsx`

Acts as the home page.

Uses `useAuth()` to conditionally render:

* `ProfileCard` if the user is logged in
* `Login` if the user is not authenticated

### `app/(pages)/signup/page.tsx`

A client component.

Uses:

* `useAuth()`
* `useRouter()`

Behavior:

* If the user is already logged in, redirects to `/profile` using `router.replace`
* Otherwise renders the `Signup` component

### `app/(pages)/login/page.tsx`

Same pattern as signup:

* Uses `useAuth()`
* Uses `useRouter()`
* Redirects logged-in users to `/profile`
* Otherwise renders the `Login` component

### `app/(pages)/logout/page.tsx`

A minimal component that returns an empty fragment and runs a `useEffect`.

Inside `useEffect`:

* Calls `appwriteService.logout()`
* Sets `authStatus` to `false`
* Redirects to home using `router.push('/')`

---

## `app/(protected)/`

Another route group used to cluster protected routes.

This folder is also ignored in the URL and exists only for organization.

### `app/(protected)/layout.tsx`

A client layout that:

* Reads `authStatus` via `useAuth()`
* Redirects unauthenticated users to `/login`
* Returns an empty fragment while redirecting
* Otherwise renders its children

This acts like a simple middleware layer for protected sections of the app.

### `app/(protected)/profile/page.tsx`

A regular page that renders:

* `ProfileCard`
* Related account UI

Protection is handled entirely by the parent layout.

---

# 🔐 Authentication Flow

```text
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
Public / Protected Layouts React Accordingly
  |
  |
User Accesses Application
```

---

# 🧠 Conceptual Takeaway

This project relies heavily on **Next.js layouts** and **route groups**:

* Every directory inside `app` can have its own `layout.tsx`
* Layouts can be nested inside other layouts
* `page.tsx` files define actual routes
* A missing layout at the root of a segment can break rendering because Next.js expects something to wrap the children

Parentheses folders like:

* `(pages)`
* `(protected)`

are a Next.js convention for grouping routes without affecting the URL.

This makes it easy to separate:

* public pages
* protected pages
* backend API routes
* shared layout logic

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
