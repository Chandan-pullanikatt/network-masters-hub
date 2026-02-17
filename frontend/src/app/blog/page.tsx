import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <div className="bg-[#003366] py-16 text-center text-white">
                <div className="container px-4 md:px-6">
                    <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto">Latest insights, tutorials, and career advice from the networking world.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container py-12 px-4 md:px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((post) => (
                        <div key={post} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-slate-200 w-full relative">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">Post Image</div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Career Guide</span>
                                <h3 className="text-xl font-bold mt-2 mb-3">How to become a Network Engineer in 2026</h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    A step-by-step guide to certifications, skills, and tools you need to master...
                                </p>
                                <Button variant="link" className="p-0 h-auto font-semibold text-blue-600">Read More &rarr;</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
