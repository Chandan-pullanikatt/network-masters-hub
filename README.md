# Network Masters Hub

A production-ready IT training platform built with Next.js (Frontend) and Strapi (Backend).

## 🚀 Features & Implementations

- **Modern Landing Page**: Custom responsive sections including Hero, Steps, Popular Courses, and Testimonials.
- **Course Catalog & Details**: Browse IT courses with comprehensive details, structured roadmap modules, and responsive layout.
- **Cart & Checkout**: Seamless enrollment flow with automated Razorpay payment integration and manual payment flow with screenshot upload.
- **Admin Panel (CMS)**: Manage courses, enquiries, orders, and uploaded payment receipts via Strapi CMS.
- **Authentication**: Secure login/signup flow with properly handled Next.js Suspense boundaries and simplified Navbar state for logged-in users.
- **Responsive Design**: Premium UI with dark mode components, ensuring mobile responsiveness across all pages (Modals, Blogs, and Course layouts).
- **SEO & Performance**: Optimized build process to run seamlessly on Netlify/Vercel.

## 💻 Tech Stack

### Frontend
- **Framework**: Next.js 16.1 (App Router)
- **Library**: React 19.2
- **Styling**: Tailwind CSS v4, Framer Motion for animations
- **UI Components**: Radix UI, Lucide React (icons), Sonner (toast notifications)
- **Language**: TypeScript
- **Payment Gateway**: Razorpay

### Backend
- **CMS**: Strapi headless CMS (v5.36)
- **Database**: PostgreSQL (production via Render) & SQLite3 (local development)
- **Runtime**: Node.js (v20+)

## 📁 Directory Structure

- `frontend/`: Next.js application frontend.
- `backend/`: Strapi CMS backend.

## 🛠 Setup Instructions

### 1. Backend (Strapi)

```bash
cd backend
npm install
# Create .env file based on .env.example
npm run build
npm run develop
```

The admin panel will be available at `http://localhost:1337/admin`.
Create your first admin user and configure permissions for Public API access if needed.

### 2. Frontend (Next.js)

```bash
cd frontend
npm install
# Update .env.local with Strapi URL and Razorpay keys
npm run dev
```

Visit `http://localhost:3000`.

## ⚙️ Environment Variables

### Frontend (`.env.local`)

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### Backend (`.env`)

Standard Strapi configuration and PostgreSQL database URI credentials.

## 📡 API Endpoints (Backend)

- `GET /api/courses`
- `POST /api/orders`
- `POST /api/enquiries`
- `POST /api/upload` (for manual payment receipt uploads)

## 🚀 Deployment

- **Frontend**: Successfully deployed and configured on Netlify (or Vercel).
- **Backend & Database**: Deployed on Render with a managed PostgreSQL database.
