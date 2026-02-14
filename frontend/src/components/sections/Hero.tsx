"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/assets/v1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-wide text-blue-100 bg-blue-600/30 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6">
                            New: Updated CCNA blueprint included
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-sm">
                        Master IT & Networking with <br />
                        industry-led training
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                        Elevate Your IT Career to the Global Stage.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" className="h-12 px-8 text-base bg-white text-blue-900 hover:bg-slate-100 border-none font-semibold transition-transform hover:scale-105" asChild>
                            <Link href="/about">Learn More</Link>
                        </Button>
                        <Button size="lg" className="h-12 px-8 text-base bg-blue-800 hover:bg-blue-700 text-white border-none font-semibold transition-transform hover:scale-105 shadow-lg shadow-blue-900/20" asChild>
                            <Link href="/courses">Explore Courses</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
