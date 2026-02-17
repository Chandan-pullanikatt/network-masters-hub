import EnquiryCTA from '@/components/sections/EnquiryCTA';
import FAQ from '@/components/sections/FAQ';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-10">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    We are here to help you achieve your career goals. Reach out to us for course details, batch timings, or career advice.
                </p>
            </div>

            <EnquiryCTA />

            <div className="py-12">
                <FAQ />
            </div>

            {/* Map Section Placeholder with Office Address */}
            <section className="py-12 bg-slate-50 border-t">
                <div className="container px-4 md:px-6 text-center">
                    <h3 className="text-2xl font-bold mb-8">Visit Our Center</h3>
                    <div className="aspect-[21/9] bg-slate-200 w-full rounded-xl flex items-center justify-center text-slate-500">
                        Interactive Google Map Integration would go here
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                        <div>
                            <h4 className="font-bold">Head Office</h4>
                            <p className="text-slate-600 text-sm mt-2">
                                789 IT Park, Knowledge Corridor,<br />
                                Noida, UP - 201301
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold">Contact</h4>
                            <p className="text-slate-600 text-sm mt-2">
                                +91 9971148345<br />
                                info@networkmastershub.com
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold">Working Hours</h4>
                            <p className="text-slate-600 text-sm mt-2">
                                Mon - Sat: 9:00 AM - 7:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
