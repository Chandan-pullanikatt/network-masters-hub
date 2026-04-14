import FAQ from "@/components/sections/FAQ";
import EnquiryCTA from "@/components/sections/EnquiryCTA";
import { getStrapiData } from "@/lib/strapi";

export default async function FAQPage() {
    let faqs = [];
    try {
        const response = await getStrapiData("/faqs", { populate: "*" });
        const data = response.data || [];
        faqs = data.map((item: any) => {
            const fields = item.attributes || item;
            return {
                question: fields.question,
                answer: fields.answer,
            };
        });
    } catch (error) {
        console.error("Error fetching FAQs:", error);
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-10">
            <div className="container px-4 md:px-6">

                <FAQ items={faqs} />

                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-center mb-8">Still have questions?</h2>
                    <EnquiryCTA />
                </div>
            </div>
        </div>
    );
}
