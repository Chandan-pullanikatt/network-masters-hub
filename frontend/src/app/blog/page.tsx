import Link from "next/link";
import Image from "next/image";
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

                <div className="max-w-4xl mx-auto">
                    <Link href="/blog/ai-will-not-replace-network-engineers" className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <Image
                                    src="/assets/blog.jpeg"
                                    alt="AI in Networking"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Industry Insights
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <span className="text-slate-500 text-sm font-medium mb-3 flex items-center gap-2">
                                    October 24, 2024 • 5 min read
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                    AI Will Not Replace Network Engineers — But AI-Ready Engineers Will Replace Everyone Else.
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                                    A few years ago, when cloud started becoming mainstream, people said traditional networking was finished. It wasn’t. Now AI is here...
                                </p>
                                <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Full Article
                                    <span>&rarr;</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
