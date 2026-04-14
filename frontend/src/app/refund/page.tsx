import { getStrapiData } from "@/lib/strapi";
import PolicyPageClient from "../privacy-policy/PolicyPageClient";

const FALLBACK_DATA = {
    title: "Refund Policy",
    intro: "At Network Masters Hub, we are committed to providing high-quality IT training. Please review our refund policy carefully:",
    content: "Course fees are refundable within 7 days of enrollment if the student has not accessed more than 10% of the course content. After 7 days or significant course access, fees are non-refundable. Technical issues resulting in inability to access content will be reviewed on a case-by-case basis for potential partial refunds or course extensions.\n\nFor any refund requests, please contact our support team at support@networkmastershub.com.",
    lastUpdated: new Date().toISOString(),
};

export default async function RefundPolicyPage() {
    try {
        const response = await getStrapiData('/policy-pages', {
            'filters[slug][$eq]': 'refund',
            'populate': '*',
        });
        
        const data = response.data?.[0];

        if (!data) {
            console.warn("CMS: Refund Policy content (slug: 'refund') not found. Using fallback.");
            return <PolicyPageClient data={FALLBACK_DATA} />;
        }

        const attributes = data.attributes || data;
        return <PolicyPageClient data={attributes} />;
    } catch (e) {
        console.error("Error fetching refund policy from Strapi:", e);
        return <PolicyPageClient data={FALLBACK_DATA} />;
    }
}
