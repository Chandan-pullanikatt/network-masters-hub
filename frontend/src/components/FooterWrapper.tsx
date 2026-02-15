"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function FooterWrapper() {
    const pathname = usePathname();
    const isPrivacyPolicy = pathname === "/privacy-policy" || pathname === "/disclaimer";

    if (isPrivacyPolicy) {
        return null;
    }

    return <Footer />;
}
