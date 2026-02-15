import type { Metadata } from "next";
import { Urbanist } from "next/font/google"; // Switch to Urbanist
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Masters Hub | IT Training Platform",
  description: "Master IT, Networking, and Automation with industry-led training.",
};

import { Toaster } from 'sonner';

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

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
              <FooterWrapper />
            </div>
            <Toaster richColors position="top-right" />
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}
