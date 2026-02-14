# Network Masters Hub

A production-ready IT training platform built with Next.js (Frontend) and Strapi (Backend).

## Features

- **Course Catalog**: Browse IT courses with details.
- **Cart & Checkout**: Enrollment flow with Razorpay payment integration.
- **Admin Panel**: Manage courses, enquiries, and orders via Strapi CMS.
- **Responsive Design**: Premium UI with dark mode components.

## Tech Stack

- **Frontend**: Next.js 15+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Radix UI.
- **Backend**: Strapi v5 (Headless CMS), PostgreSQL (configured via env).
- **Payment**: Razorpay.

## Directory Structure

- `frontend/`: Next.js application.
- `backend/`: Strapi CMS.

## Setup Instructions

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

## Environment Variables

### Frontend (.env.local)

```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### Backend (.env)

Standard Strapi configuration.

## API Endpoints (Backend)

- `GET /api/courses`
- `POST /api/orders`
- `POST /api/enquiries`

## Deployment

- Deploy `frontend` to Vercel.
- Deploy `backend` to Render/Heroku/DigitalOcean.

