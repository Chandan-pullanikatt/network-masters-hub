import { getStrapiData } from "@/lib/strapi";
import PolicyPageClient from "./PolicyPageClient";

const FALLBACK_DATA = {
    title: "Privacy Policy",
    intro: "Your privacy is important to us.",
    content: "Your privacy is important to us. This Privacy Policy explains how Network Masters Hub collects, uses, and protects your personal information when you use our website and services.\n\n### Information Collection\nWe collect information you provide directly to us, such as when you create an account, enroll in a course, or contact our support team.",
    lastUpdated: new Date().toISOString(),
};

export default async function PrivacyPolicyPage() {
    try {
        // Fetching with 'privacy' slug as confirmed in CMS diagnostics
        const response = await getStrapiData("/policy-pages", {
            "filters[slug][$eq]": "privacy",
            "populate": "*",
        });

        const data = response.data?.[0];

        if (!data) {
            console.warn("CMS: Privacy Policy content (slug: 'privacy') not found. Using fallback.");
            return <PolicyPageClient data={FALLBACK_DATA} />;
        }

        const attributes = data.attributes || data;
        return <PolicyPageClient data={attributes} />;
    } catch (e) {
        console.error("Error fetching privacy policy from Strapi:", e);
        return <PolicyPageClient data={FALLBACK_DATA} />;
    }
}
