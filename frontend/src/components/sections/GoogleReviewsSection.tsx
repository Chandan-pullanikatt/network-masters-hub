"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const googleReviews = [
    {
        name: "Karan Mehta",
        time: "1 month ago",
        rating: 5,
        text: "I had completed CCNA earlier but everything felt disconnected. After joining Network Masters Hub, the way Sir connects topics—routing to switching to security—made me realize what I was missing. The lab scenarios are not just for passing exams but for real-world troubleshooting.",
        initial: "K",
        bg: "bg-blue-600"
    },
    {
        name: "Sneha Arora",
        time: "2 months ago",
        rating: 5,
        text: "Coming from a non-technical background, I was scared of networking. But the way concepts are explained here, from 'what is a cable' to 'configuring OSPF,' gave me so much confidence. I successfully cleared my CCNA interview last week!",
        initial: "S",
        bg: "bg-purple-600"
    },
    {
        name: "Rohit Verma",
        time: "3 weeks ago",
        rating: 5,
        text: "Most courses teach commands. This course teaches 'packet flow.' Once you understand how a packet moves from Source A to Destination B, you don't need to memorize commands. That logic building is the best part of this training.",
        initial: "R",
        bg: "bg-green-600"
    },
    {
        name: "Anjali Nair",
        time: "2 months ago",
        rating: 5,
        text: "During my internship, I struggled to answer basic questions on VLANs and STP. After watching the recorded sessions and practicing the labs provided, I could answer complex scenario-based questions in my job interview at a top ISP.",
        initial: "A",
        bg: "bg-red-600"
    },
    {
        name: "Harsh Gupta",
        time: "1 month ago",
        rating: 5,
        text: "I was stuck at L1 support for 2 years. I needed in-depth knowledge to upgrade. The CCNP ENCOR + ENARSI content covered here is deep. The troubleshooting tickets we solved in class helped me crack an L2 Network Engineer role.",
        initial: "H",
        bg: "bg-orange-600"
    },
    {
        name: "Mohammed Faizan",
        time: "3 months ago",
        rating: 5,
        text: "Subnetting used to feel like a nightmare. Sir taught it in one class, and I haven't used a calculator since. The teaching style is very practical and logic-driven, not theory-heavy.",
        initial: "M",
        bg: "bg-teal-600"
    },
    {
        name: "Divya Sharma",
        time: "1 month ago",
        rating: 5,
        text: "The interview-focused discussions at the end of every module are a game-changer. You don't just learn configuration; you learn how to explain it to an interviewer. That made all the difference for me.",
        initial: "D",
        bg: "bg-indigo-600"
    },
    {
        name: "Akash Yadav",
        time: "2 weeks ago",
        rating: 5,
        text: "The biggest difference is clarity. I have watched many YouTube videos, but the structured approach here—step-by-step from zero to advanced—is missing elsewhere. The notes provided are concise and perfect for revision.",
        initial: "A",
        bg: "bg-pink-600"
    },
    {
        name: "Nitin Raj",
        time: "2 months ago",
        rating: 5,
        text: "I had watched many YouTube videos before joining, but the clarity I got here is unmatched. The logic-building approach for protocols like BGP and OSPF is something you won't find easily. Value for money training.",
        initial: "N",
        bg: "bg-cyan-600"
    }
];

export default function GoogleReviewsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350; // Card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-slate-900 mb-2">
                    Our Google <span className="text-blue-600">Reviews</span>
                </h2>

                {/* Rating Summary */}
                <div className="flex flex-col items-center mb-12">
                    <p className="text-slate-900 font-bold tracking-widest text-sm mb-2">EXCELLENT</p>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mb-4">Based on 136 reviews</p>
                    {/* Google Logo */}
                    <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-[#4285F4]">G</span>
                        <span className="text-2xl font-bold text-[#EA4335]">o</span>
                        <span className="text-2xl font-bold text-[#FBBC05]">o</span>
                        <span className="text-2xl font-bold text-[#4285F4]">g</span>
                        <span className="text-2xl font-bold text-[#34A853]">l</span>
                        <span className="text-2xl font-bold text-[#EA4335]">e</span>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 border border-slate-100 hidden md:flex"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 border border-slate-100 hidden md:flex"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Cards Scroll Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory no-scrollbar"
                    >
                        {googleReviews.map((review, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] md:min-w-[350px] bg-[#1a1a1a] rounded-xl p-6 text-left flex flex-col gap-4 snap-center shadow-lg relative group overflow-hidden"
                            >
                                {/* Google Icon Badge */}
                                <div className="absolute top-4 right-4">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                </div>

                                {/* User Info */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${review.bg || 'bg-blue-600'}`}>
                                        {review.initial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{review.name}</h4>
                                        <span className="text-gray-400 text-xs">{review.time}</span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="bg-blue-500 rounded-full p-0.5 ml-1">
                                        <CheckCircle2Icon className="w-3 h-3 text-white" />
                                    </span>
                                </div>

                                {/* Text */}
                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                                    {review.text}
                                </p>

                                {review.text.length > 100 && (
                                    <span className="text-gray-500 text-xs mt-auto cursor-pointer hover:text-white">Read more</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CheckCircle2Icon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
