"use client";

import { FileText, Eye, ShieldCheck, Share2, Cookie, Info } from "lucide-react";
import ReactMarkdown from 'react-markdown';

import { formatDate } from "@/lib/utils";

interface PolicySection {
    title: string;
    icon: string;
    content: string;
}

interface PolicyPageData {
    title: string;
    intro: string;
    content?: string;
    sections?: PolicySection[];
    lastUpdated?: string;
}

const iconMap: Record<string, any> = {
    "file-text": FileText,
    "eye": Eye,
    "shield-check": ShieldCheck,
    "share-2": Share2,
    "cookie": Cookie,
    "info": Info
};

export default function PolicyPageClient({ data }: { data: PolicyPageData }) {
    return (
        <div className="bg-[#F6FAFF] min-h-screen flex flex-col items-center w-full">
            <div className="w-full max-w-[1440px] flex flex-col items-center">
                <div className="w-full max-w-[1200px] px-6 py-10 md:px-[40px] md:pt-[64px] md:pb-[120px] flex flex-col items-center">
                    
                    {/* Header Section */}
                    <div className="text-center flex flex-col items-center mb-[48px]">
                        <h1 className="text-[44px] font-bold text-white bg-[#003366] px-6 py-2 rounded-lg leading-[1.2] tracking-tight mb-2 uppercase">
                            {data.title}
                        </h1>
                        {data.lastUpdated && (
                            <p className="text-slate-500 text-sm mt-2">
                                Last Updated: {formatDate(data.lastUpdated)}
                            </p>
                        )}
                    </div>

                    {/* Main Content Card */}
                    <div className="w-full max-w-[800px] bg-white rounded-[12px] p-[32px] shadow-sm">
                        
                        {/* Intro Paragraph */}
                        {data.intro && (
                            <div className="text-[16px] text-slate-600 leading-relaxed mb-[32px] prose prose-slate max-w-none">
                                <ReactMarkdown>{data.intro}</ReactMarkdown>
                            </div>
                        )}

                        {/* Direct Content (New structure from Strapi) */}
                        {data.content && (
                            <div className="text-[15px] text-slate-600 leading-relaxed prose prose-slate max-w-none 
                                prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-[#003366] prose-strong:text-[#1a1a1a] mb-[32px]">
                                <ReactMarkdown>{data.content}</ReactMarkdown>
                            </div>
                        )}

                        <div className="space-y-[32px]">
                            {data.sections?.map((section, index) => {
                                const IconComponent = iconMap[section.icon] || FileText;
                                return (
                                    <section key={index}>
                                        <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                            <span className="bg-[#EAF1F8] p-1.5 rounded-md text-[#003366]">
                                                <IconComponent size={20} />
                                            </span>
                                            {section.title}
                                        </h2>
                                        <div className="text-[15px] text-slate-600 leading-relaxed prose prose-slate max-w-none 
                                            prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-[#003366] prose-strong:text-[#1a1a1a]">
                                            <ReactMarkdown>{section.content}</ReactMarkdown>
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
