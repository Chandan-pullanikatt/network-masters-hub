import FAQ from "@/components/sections/FAQ";
import EnquiryCTA from "@/components/sections/EnquiryCTA";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-10">
            <div className="container px-4 md:px-6">

                <FAQ />

                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-center mb-8">Still have questions?</h2>
                    <EnquiryCTA />
                </div>
            </div>
        </div>
    );
}
