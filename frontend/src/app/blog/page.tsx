import Link from "next/link";
import Image from "next/image";
import { getStrapiData, getStrapiMedia } from "@/lib/strapi";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default async function BlogPage() {
    let blogPosts: any[] = [];

    try {
        const response = await getStrapiData('/blogs', { populate: '*' });
        blogPosts = response.data || [];
    } catch (e) {
        console.error("Error fetching blogs:", e);
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#F6FAFF]">
            {/* Header Section */}
            <div className="bg-[#003366] py-20 text-center text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Latest insights, tutorials, and career advice from the networking world.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-16 px-4 md:px-6">
                {blogPosts.length === 0 ? (
                    <div className="text-center py-24 text-slate-500">
                        <p className="text-xl">No blog posts found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogPosts.map((post: any) => {
                            // Strapi 5 uses flat data, Strapi 4 uses .attributes
                            const data = post.attributes || post;
                            const imageUrl = getStrapiMedia(data.image) || '/assets/blog.jpeg';

                            return (
                                <Link
                                    key={data.slug}
                                    href={`/blog/${data.slug}`}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-52 overflow-hidden">
                                            <Image
                                                src={imageUrl}
                                                alt={data.title || 'Blog Post'}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            {data.category && (
                                                <div className="absolute top-4 left-4 bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                    {data.category}
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                                                {data.date && (
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {data.date}
                                                    </span>
                                                )}
                                                {data.readTime && (
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {data.readTime}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-[#003366] transition-colors line-clamp-2">
                                                {data.title}
                                            </h3>
                                            <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3 flex-grow text-sm">
                                                {data.excerpt}
                                            </p>
                                            <div className="text-[#003366] font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto text-sm">
                                                Read Full Article
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
