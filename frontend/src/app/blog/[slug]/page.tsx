"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog-data";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-24">
            {/* Hero Image */}
            <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Link>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
                    {post.title}
                </h1>

                <div className="flex items-center gap-6 text-sm md:text-base text-slate-600 font-medium border-b border-slate-200 pb-8 mb-8">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                    </div>
                </div>

                {/* Content Body */}
                <div
                    className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >
                </div>
            </div>
        </article>
    );
}
