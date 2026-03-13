import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-data";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <div className="bg-[#003366] py-16 text-center text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto">Latest insights, tutorials, and career advice from the networking world.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-12 px-4 md:px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map((post) => (
                        <Link 
                            key={post.slug}
                            href={`/blog/${post.slug}`} 
                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                        >
                            <div className="flex flex-col h-full">
                                {/* Image Side */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-slate-500 text-sm font-medium mb-3 flex items-center gap-2">
                                        {post.date} • {post.readTime}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                        Read Full Article
                                        <span>&rarr;</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
