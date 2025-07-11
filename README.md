🛒 Breezy Shop – Modern E-commerce Store (React + Supabase)
Welcome to Breezy Shop, a full-stack e-commerce web application built with React, TypeScript, Tailwind CSS, and Supabase. This project demonstrates a real-world, production-ready online store with secure admin controls, modern UI, and a scalable backend.

🚀 Features
Beautiful, Responsive UI – Built with React, TypeScript, and Tailwind CSS for a seamless experience on any device.
Product Catalog – Browse, search, and view detailed product pages with images, features, and categories.
Shopping Cart & Checkout – Add products to your cart, update quantities, and complete purchases.
User Authentication – Secure sign up, login, and sessionmanagement powered by Supabase Auth.
Admin Dashboard – Only authorized admins can add, edit, or delete products via a protected panel.
Role-Based Access Control – Database-level security ensures only admins can modify products, even via API.
Real-Time Updates – All product changes are instantly reflected for all users.
Modern Codebase – Clean, modular, and scalable code
structure using React hooks and context.
🛡️ Security Highlights
Environment Variables Protected – All secrets and API keys are stored in .env.local (never committed).
Supabase Row-Level Security (RLS) – Only users with admin privileges can modify products or categories at the database level.
Frontend & Backend Protection – Admin UI is hidden from non-admins, and backend policies prevent unauthorized access.
🧑‍💻 Tech Stack
Frontend: React, TypeScript, Tailwind CSS, Vite
Backend: Supabase (Postgres, Auth, Storage)
State Management: React Context, React Query
UI Components: Custom + Radix UI
Notifications: Sonner
✨ Demo
“A modern, fast, and secure e-commerce experience. Try logging in as an admin to manage products!”

🛠️ Getting Started
Clone the repo:
git clone https://github.com/yourusername/breezy-shop.git

Install dependencies:
npm install

Set up environment variables:

Copy .env.local.example to .env.local
Add your Supabase project URL and anon key
Run the app:
npm run dev

Supabase Setup:
Supabase Setup:

Run the provided SQL scripts in your Supabase SQL editor to create tables and sample data.
👤 Admin Access
Only users with the is_admin flag in the database can access the admin dashboard and manage products.
To become an admin, set your user’s is_admin field to true in the user_profiles table.
📂 Project Structure
src/
  components/      # Reusable UI components
  context/         # Auth and Cart context providers
  hooks/           # Custom React hooks (including admin logic)
  lib/             # Supabase client and utilities
  pages/           # Main app pages (Home, Product, Cart, Admin, etc.)
  data/            # Sample product data
  💡 Why This Project?
Production-Ready Patterns: Real authentication, secure admin, and scalable code.
Modern UI/UX: Clean, accessible, and mobile-friendly.
Recruiter Appeal: Demonstrates both frontend and backend skills, security best practices, and real-world features.
📧 Contact
Feel free to connect with me on LinkedIn or reach out at mtahirbutt1005@gmail.com.

Like what you see? Star this repo and let’s build something amazing together