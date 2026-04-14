import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getStrapiData, getStrapiMedia } from "@/lib/strapi";

export async function generateStaticParams() {
    try {
        const { data: blogs } = await getStrapiData('/blogs');
        return blogs.map((blog: any) => ({
            slug: blog.attributes.slug,
        }));
    } catch (e) {
        return [];
    }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    let post = null;
    try {
        const response = await getStrapiData('/blogs', {
            'filters[slug][$eq]': slug,
            'populate': '*',
        });
        post = response.data?.[0];
    } catch (e) {
        console.error("Error fetching blog detail:", e);
    }

    if (!post) {
        notFound();
    }

    const { attributes } = post;
    const imageUrl = getStrapiMedia(attributes.image) || '/assets/blog.jpeg';

    return (
        <article className="min-h-screen bg-white pb-24">
            {/* Hero Image */}
            <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                    src={imageUrl}
                    alt={attributes.title}
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
                    {attributes.title}
                </h1>

                <div className="flex items-center gap-6 text-sm md:text-base text-slate-600 font-medium border-b border-slate-200 pb-8 mb-8">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {attributes.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {attributes.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                        <span className="bg-blue-50 px-3 py-1 rounded-full text-xs uppercase font-bold">
                            {attributes.category}
                        </span>
                    </div>
                </div>

                {/* Content Body */}
                <div
                    className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 max-w-none prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: attributes.content }}
                />
            </div>
        </article>
    );
}
