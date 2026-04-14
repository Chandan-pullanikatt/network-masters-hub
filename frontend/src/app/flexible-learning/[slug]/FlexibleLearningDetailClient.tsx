"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { User, CheckCircle2, Video, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/sections/FAQ';
import StudentReviews from '@/components/sections/StudentReviews';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { Course } from '@/types';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { getStrapiMedia } from '@/lib/strapi';
import { getIcon } from '@/lib/icons';

export default function FlexibleLearningDetailClient({ course }: { course: Course }) {
    const [activeSection, setActiveSection] = useState('overview');
    const [activeModule, setActiveModule] = useState('encor');
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [enrollLoading, setEnrollLoading] = useState(false);

    const data = (course.attributes || course) as any;
    const { title, description, slug, flexiblePrice, hero, overview, roadmap, roadmapModules, faqs, image } = data;

    const FLEXIBLE_PRICE = flexiblePrice || 4999;
    const ORIGINAL_PRICE = FLEXIBLE_PRICE * 2.5;

    const handleEnroll = () => {
        setEnrollLoading(true);
        // Ensure price is set to flexiblePrice for checkout
        const modifiedCourse = {
            ...course,
            attributes: {
                ...data,
                price: FLEXIBLE_PRICE
            }
        };
        addToCart(modifiedCourse);
        if (isAuthenticated) {
            router.push("/checkout");
        } else {
            toast.error("Please login to continue to checkout");
            router.push("/login?returnUrl=/checkout");
        }
    };

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Gradient Hero Section */}
            <div className="relative pt-32 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 opacity-90"></div>
                <div className="container relative z-10 px-4 md:px-6 mx-auto">
                    <div className="text-sm text-slate-700 mb-6 font-medium">
                        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/flexible-learning" className="hover:underline">Flexible Learning</Link> &gt; <span>{title} (Recorded)</span>
                    </div>

                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-tight">
                            {hero?.title || title} <br />
                            <span className="block mt-2 text-slate-700/80">(Recorded Version)</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-800 mb-8 leading-relaxed max-w-3xl font-medium">
                            {hero?.subtitle || description}
                        </p>

                        <div className="bg-[#003366] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl max-w-3xl border border-blue-400/30 backdrop-blur-sm">
                            <div className="flex flex-col">
                                <span className="text-blue-200 text-sm font-medium mb-1">Recorded Course Price</span>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-bold text-white">₹{FLEXIBLE_PRICE.toLocaleString('en-IN')}</span>
                                    <span className="text-lg text-blue-300/60 line-through">₹{ORIGINAL_PRICE.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-white text-[#003366] hover:bg-blue-50 font-bold px-8 h-12 rounded-full shadow-md transition-all hover:scale-105"
                                onClick={handleEnroll}
                                disabled={enrollLoading}
                            >
                                {enrollLoading ? "Redirecting..." : "Enroll Now"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto rounded-[12px] relative z-20 -mt-10 bg-white shadow-xl px-0 pb-[60px] mb-[120px] w-full border border-slate-100/50">
                {/* Tabs Navigation (Batches and Schedule removed) */}
                <div className="px-4 md:px-6 pt-[24px] pb-[24px] mb-[48px] overflow-x-auto border-b border-slate-100">
                    <div className="flex gap-4 items-center min-w-max p-1">
                        {['Overview', 'Roadmap', 'FAQ']
                            .map((item) => {
                                const id = item.toLowerCase().replace(' ', '-');
                                const isActive = activeSection === id;
                                return (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(id)}
                                        className={`relative px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${isActive
                                            ? 'bg-slate-900 text-white shadow-md'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                            }`}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                    </div>
                </div>

                <div className="space-y-[48px]">
                    {/* Program Overview */}
                    <section id="overview" className="scroll-mt-32 max-w-6xl mx-auto px-4">
                        <div className="text-center mb-[48px]">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{overview?.title || "Course Overview"}</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                {overview?.description || "Master the skills needed for this course."}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {(overview?.skills || [
                                { title: "Foundations", desc: "OSI model, TCP/IP basics, physical cabling, and switching fundamentals", icon: "Server" },
                                { title: "Routing", desc: "Static and dynamic routing (OSPF), VLAN configuration, and network segmentation", icon: "Activity" },
                                { title: "Security", desc: "Access Control Lists (ACLs), port security, and VLAN security fundamentals", icon: "Shield" },
                                { title: "Automation", desc: "Network automation basics, programmable networks, and modern networking concepts", icon: "Cpu" }
                            ]).map((skill: any, idx: number) => {
                                const Icon = getIcon(skill.icon);
                                return (
                                    <div key={idx} className="bg-[#EBF3FA] p-5 rounded-2xl border border-slate-100/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                                        <div>
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4 text-[#003366]">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{skill.title}</h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">{skill.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Learning Roadmap */}
                    {(roadmapModules || (roadmap && roadmap.length > 0)) && (
                        <section id="roadmap" className="scroll-mt-32 max-w-7xl mx-auto bg-slate-50 rounded-[12px] py-12 px-4 md:px-10 border border-slate-100">
                            <div className="text-center mb-[48px]">
                                <h2 className="text-3xl font-bold text-slate-900 max-w-2xl mx-auto">
                                    A structured journey to mastery.
                                </h2>
                            </div>

                            {roadmapModules && (
                                <div className="flex justify-center gap-4 mb-12">
                                    <button
                                        onClick={() => setActiveModule('encor')}
                                        className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeModule === 'encor' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        <div className={`w-2.5 h-2.5 rounded-full ${activeModule === 'encor' ? 'bg-slate-900' : 'bg-slate-300'}`}></div>
                                        ENCORE Modules
                                    </button>
                                    <button
                                        onClick={() => setActiveModule('enarsi')}
                                        className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeModule === 'enarsi' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        <div className={`w-2.5 h-2.5 rounded-full ${activeModule === 'enarsi' ? 'bg-slate-900' : 'bg-slate-300'}`}></div>
                                        ENARSI Modules
                                    </button>
                                </div>
                            )}

                            <div className="relative">
                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

                                {((roadmapModules && roadmapModules[activeModule]) || roadmap || []).map((item: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        variants={fadeInUp}
                                        className={`relative flex flex-col md:flex-row gap-8 md:gap-[96px] mb-[40px] items-center text-left ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-slate-900 ring-4 ring-white shadow-sm -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>
                                        <div className="w-full md:w-1/2 md:max-w-[506px]">
                                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col justify-center min-h-[150px]">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-4xl font-bold text-slate-200 select-none">{item.id || (idx + 1).toString().padStart(2, '0')}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-600 mb-4 leading-relaxed text-sm">{item.desc}</p>
                                                {item.topics && (
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-100 bg-slate-50 text-slate-600 text-xs font-medium w-fit">
                                                        Topics: {item.topics}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 hidden md:block"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* FAQ Section */}
                    <div id="faq" className="px-[24px] scroll-mt-32">
                        <FAQ items={faqs} />
                    </div>

                    {/* Student Reviews Section */}
                    <div className="scroll-mt-32">
                        <StudentReviews />
                    </div>
                </div>
            </div>
        </div>
    );
}
