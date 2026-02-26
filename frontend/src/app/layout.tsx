import type { Metadata } from "next";
import { Urbanist } from "next/font/google"; // Switch to Urbanist
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Masters Hub | IT Training Platform",
  description: "Master IT, Networking, and Automation with industry-led training.",
  icons: {
    icon: "/assets/favicon.png"
  }
};

import { Toaster } from 'sonner';

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={urbanist.className}>
        <CartProvider>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <WhatsAppButton />
              <Footer />
            </div>
            <Toaster richColors position="top-right" />
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}
