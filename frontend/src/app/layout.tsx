import type { Metadata } from "next";
import { Urbanist } from "next/font/google"; // Switch to Urbanist
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Masters Hub | IT Training Platform",
  description: "Master IT, Networking, and Automation with industry-led training.",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={urbanist.className}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
