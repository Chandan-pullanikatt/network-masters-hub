"use client"; // Required for framer-motion if stored in component
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/placeholder-hero-bg.jpg')" }} // Placeholder, user image suggested server rack
            ></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
                <div className="space-y-6 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full mb-4">
                            Launch Your IT Career
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Master IT & Networking with <span className="text-blue-500">Industry-Led</span> Training
                        </h1>
                        <p className="text-lg text-slate-300 max-w-[600px]">
                            Gain hands-on experience, earn certifications, and get job-ready with our expert-designed courses in CCNA, CCNP, and Python Automation.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-base" asChild>
                            <Link href="/courses">Explore Courses</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-base border-white text-black hover:bg-white/10 hover:text-white" asChild>
                            <Link href="/contact">Book a Free Demo</Link>
                        </Button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-400 pt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                            ))}
                        </div>
                        <p>Trusted by 1000+ students</p>
                    </div>
                </div>

                {/* Right side illustration or image could go here */}
                <div className="hidden md:block w-full max-w-md">
                    {/* Abstract tech graphic placeholder */}
                    <div className="w-full h-64 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur p-6 relative">
                        <div className="absolute top-4 left-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                        </div>
                        <div className="mt-16 space-y-3">
                            <div className="h-2 w-3/4 bg-slate-700 rounded"></div>
                            <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                            <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
