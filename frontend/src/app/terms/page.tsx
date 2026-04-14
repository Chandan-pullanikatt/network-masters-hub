import { getStrapiData } from "@/lib/strapi";
import PolicyPageClient from "../privacy-policy/PolicyPageClient";

const FALLBACK_DATA = {
    title: "Terms & Conditions",
    intro: "By accessing Network Masters Hub, you agree to comply with our terms of service.",
    content: "Our platform provides educational content, labs, and mentorship for IT professionals.\n\n### Use of Services\nAll course materials are for personal use only and cannot be redistributed. Users must maintain professional conduct in community forums and during live sessions. We reserve the right to terminate access for users who violate our code of conduct.\n\nFor detailed terms, please contact our administrative team.",
    lastUpdated: new Date().toISOString(),
};

export default async function TermsPage() {
    try {
        const response = await getStrapiData('/policy-pages', {
            'filters[slug][$eq]': 'terms',
            'populate': '*',
        });

        const data = response.data?.[0];

        if (!data) {
            console.warn("CMS: Terms & Conditions content (slug: 'terms') not found. Using fallback.");
            return <PolicyPageClient data={FALLBACK_DATA} />;
        }

        const attributes = data.attributes || data;
        return <PolicyPageClient data={attributes} />;
    } catch (e) {
        console.error("Error fetching terms policy from Strapi:", e);
        return <PolicyPageClient data={FALLBACK_DATA} />;
    }
}
