"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            toast.success("Subscribed successfully!");
            setEmail("");
            setLoading(false);
        }, 1000);
    };

    return (
        <section className="bg-[#003366] py-16 md:py-24 relative overflow-hidden">
            {/* Background Pattern - Subtle dots or abstract overlay to match specific "no text" areas if needed */}
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/grid-pattern.svg')]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">

                {/* Badge */}
                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
                    <span className="text-white text-xs md:text-sm font-bold tracking-wider uppercase">
                        GET LATEST PM NETWORKING UPDATE
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Subscribe Our Newsletter
                </h2>

                <p className="text-blue-100 text-lg md:text-xl mb-12">
                    To Get More Updates With Us
                </p>

                {/* Form */}
                <div className="max-w-2xl mx-auto mb-6">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                        <div className="w-full relative">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-14 bg-white border-none text-slate-800 placeholder:text-slate-400 text-lg px-6 rounded-lg shadow-lg focus-visible:ring-2 focus-visible:ring-blue-400"
                                required
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 font-bold text-xl hidden">*</span>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="bg-[#0056b3] hover:bg-[#004494] text-white px-10 py-6 text-lg font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 min-w-[160px]"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                    <p className="text-blue-200 text-sm mt-4 font-medium">
                        No Spam Messages
                    </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-16 md:mt-24">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center px-6">
                        <span className="text-5xl md:text-6xl font-bold text-white mb-2">500+</span>
                        <span className="text-xl md:text-2xl font-bold text-white mb-1">Successfully Trained</span>
                        <span className="text-blue-200 text-sm md:text-base">Learners & counting</span>
                    </div>

                    {/* Divider for larger screens */}
                    <div className="hidden md:block w-px bg-blue-400/30 self-stretch"></div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center px-6">
                        <span className="text-5xl md:text-6xl font-bold text-white mb-2">100+</span>
                        <span className="text-xl md:text-2xl font-bold text-white mb-1">Certification Students</span>
                        <span className="text-blue-200 text-sm md:text-base">Online Course</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
