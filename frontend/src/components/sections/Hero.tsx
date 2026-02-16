"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            {/* Background Video with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
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
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.div variants={scaleIn} className="mb-2">
                        <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-wide text-blue-100 bg-blue-600/30 border border-blue-400/30 rounded-full backdrop-blur-sm">
                            New: Updated CCNA blueprint included
                        </span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-tight text-white drop-shadow-sm mb-2">
                        Master IT & Networking with <br />
                        industry-led training
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-[16px] text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                        Elevate Your IT Career to the Global Stage.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" className="h-12 px-8 text-base bg-white text-blue-900 hover:bg-slate-100 border-none font-semibold transition-transform hover:scale-105" asChild>
                            <Link href="/about">Learn More</Link>
                        </Button>
                        <Button size="lg" className="h-12 px-8 text-base bg-blue-800 hover:bg-blue-700 text-white border-none font-semibold transition-transform hover:scale-105 shadow-lg shadow-blue-900/20" asChild>
                            <Link href="/courses">Explore Courses</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
