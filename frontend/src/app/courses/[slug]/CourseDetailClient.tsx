"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { User, Shield, Server, Activity, CheckCircle2, Clock, Calendar, Database, Globe, Cpu, Cloud, Code, Award, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/sections/FAQ';
import CourseSchedule from '@/components/sections/CourseSchedule';
import EnquiryCTA from '@/components/sections/EnquiryCTA';
import GoogleReviewsSection from '@/components/sections/GoogleReviewsSection';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { getIcon } from '@/lib/icons';

export default function CourseDetailClient({ course }: { course: any }) {
    const [activeSection, setActiveSection] = useState('overview');
    const [activeModule, setActiveModule] = useState('encor');
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [enrollLoading, setEnrollLoading] = useState(false);

    const data = course.attributes || course;
    const { title, description, price, slug, hero, overview, roadmap, faqs, isCombo, schedule } = data;

    const handleEnroll = () => {
        setEnrollLoading(true);
        addToCart(course);
        if (isAuthenticated) {
            router.push("/checkout");
        } else {
            toast.error("Please login to continue to checkout");
            router.push("/login?returnUrl=/checkout");
        }
    };

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            toast.error("Please login to add items to cart");
            router.push("/login");
            return;
        }
        addToCart(course);
        toast.success("Added to cart");
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
            {/* Hero Section */}
            <div className="relative bg-[#003366] text-white pt-32 pb-48 overflow-hidden" style={{ backgroundImage: "url('/assets/p6.png')", backgroundRepeat: 'repeat' }}>
                <div className="absolute inset-0 z-0 bg-[#003366]/90"></div>
                <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/30">
                        {hero?.badge || "Professional Training"}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        {hero?.title || title}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {hero?.subtitle || description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="bg-white text-[#003366] hover:bg-blue-50 font-semibold px-8 h-12" onClick={handleEnroll} disabled={enrollLoading}>
                            {enrollLoading ? "Redirecting..." : "Enroll Now"}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto rounded-[12px] relative z-10 -mt-[100px] bg-white shadow-xl px-0 pb-[60px] mb-[120px] w-full">
                <div className="px-4 md:px-6 pt-[24px] pb-[24px] mb-[48px] overflow-x-auto">
                    <div className="flex gap-4 items-center min-w-max p-1">
                        {['Overview', 'Roadmap', 'Batches', 'Course Schedule', 'FAQ']
                            .filter(item => !((slug === 'cisco-sd-wan' || slug === 'python-automation' || isCombo) && item === 'Course Schedule'))
                            .map((item) => {
                                const id = item.toLowerCase().replace(' ', '-');
                                const isActive = activeSection === id;
                                return (
                                    <button key={item} onClick={() => scrollToSection(id)} className={`relative px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${isActive ? 'bg-[#003366] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100 hover:text-[#003366]'}`}>
                                        {item}
                                    </button>
                                );
                            })}
                    </div>
                </div>

                <div className="space-y-[48px]">
                    <section id="overview" className="scroll-mt-32 max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Core Skills You'll Master</h2>
                            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                                Our curriculum is designed to take you from beginner to certified networking professional with practical, job-ready skills
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {(overview && Array.isArray(overview) ? overview : [
                                { title: "Foundations", desc: "OSI model, TCP/IP basics, physical cabling, and switching fundamentals", icon: "Server" },
                                { title: "Routing", desc: "Static and dynamic routing (OSPF), VLAN configuration, and network segmentation", icon: "Activity" },
                                { title: "Security", desc: "Access Control Lists (ACLs), port security, and VLAN security fundamentals", icon: "Shield" },
                                { title: "Automation", desc: "Network automation basics, programmable networks, and modern networking concepts", icon: "Cpu" }
                            ]).map((skill: any, idx: number) => {
                                const Icon = getIcon(skill.icon);
                                return (
                                    <div key={idx} className="bg-[#F8FBFF] p-5 rounded-2xl border border-white hover:border-blue-100 hover:shadow-sm transition-all duration-300">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 mb-4 text-[#003366]">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-[17px] font-bold text-slate-800 mb-2">{skill.title}</h3>
                                        <p className="text-slate-500 text-[12px] leading-relaxed">{skill.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section id="roadmap" className="scroll-mt-32 max-w-7xl mx-auto bg-[#0079FF]/5 rounded-[12px] py-12 px-4">
                         <div className="relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2 hidden md:block"></div>
                            {roadmap?.map((item: any, idx: number) => (
                                <motion.div key={idx} variants={fadeInUp} className={`relative flex flex-col md:flex-row gap-8 mb-[40px] items-center text-left ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[#003366] ring-4 ring-white shadow-sm -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>
                                    <div className="w-full md:w-1/2 md:max-w-[506px]">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full flex flex-col justify-center min-h-[220px]">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-600 mb-4 leading-relaxed text-sm">{item.desc}</p>
                                            {item.topics && (
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white text-blue-700 text-xs font-medium w-fit">
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

                    <section id="batches" className="scroll-mt-32 max-w-6xl mx-auto py-12 px-4 bg-white rounded-[2rem] border border-slate-100 shadow-sm mb-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Upcoming Batches</h1>
                                <p className="text-slate-500 text-sm font-medium">Secure your seat in our next scheduled batch and begin your journey.</p>
                            </div>

                            <div className={`flex flex-col lg:flex-row gap-8 items-stretch max-w-5xl mx-auto ${(hero?.batches?.length > 0 || slug === 'ccna-200-301' || slug === 'ccnp-enterprise') ? '' : 'justify-center'}`}>
                                {/* Left Side: Pricing & Features Card */}
                                <div className={`w-full lg:w-[330px] flex-shrink-0 ${(hero?.batches?.length > 0 || slug === 'ccna-200-301' || slug === 'ccnp-enterprise') ? '' : 'mx-auto'}`}>
                                    <div className="bg-[#003366] text-white rounded-[1.25rem] p-5 h-full shadow-lg relative flex flex-col justify-between overflow-hidden">
                                        <div className="relative z-10">
                                            <p className="text-slate-300 text-[10px] font-medium mb-2">Total Course Fee</p>
                                            <div className="flex items-center gap-3 mb-5">
                                                <span className="text-2xl font-bold">
                                                    ₹{slug === 'python-automation' ? '15,000' : (slug === 'ccna-ccnp-combo' ? '30,000' : (price?.toLocaleString('en-IN') || price))}
                                                </span>
                                                {(hero?.originalPrice || slug === 'python-automation' || slug === 'ccna-ccnp-combo') && (
                                                    <span className="text-xs text-slate-400 line-through font-medium">
                                                        ({`₹${slug === 'python-automation' ? '25,000' : (slug === 'ccna-ccnp-combo' ? '45,000' : hero?.originalPrice?.toLocaleString('en-IN'))}`})
                                                    </span>
                                                )}
                                            </div>

                                            <div className="space-y-2 mb-6">
                                                {[
                                                    `${(slug === 'cisco-sd-wan' || slug === 'python-automation') ? '40' : (slug === 'ccna-ccnp-combo' ? '180' : (data.videoHours || '60'))}+ hours of learning`,
                                                    "Instructor-led HD sessions",
                                                    "Job & interview support",
                                                    "Scenario-based practice",
                                                    "Resume & soft skill guidance",
                                                    "Weekly doubt sessions",
                                                    "Premium study notes"
                                                ].map((feat, idx) => (
                                                    <div key={idx} className="flex items-center gap-2.5">
                                                        <div className="w-3.5 h-3.5 rounded-full border border-blue-400 flex items-center justify-center shrink-0">
                                                            <CheckCircle2 className="w-2 h-2 text-blue-400" />
                                                        </div>
                                                        <span className="text-slate-200 font-medium text-[10px]">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3 relative z-10 mt-auto">
                                            <Button 
                                                className="flex-1 bg-[#1A73E8] hover:bg-blue-600 text-white text-[10px] font-bold h-9 rounded-lg shadow-sm" 
                                                onClick={handleEnroll} 
                                                disabled={enrollLoading}
                                            >
                                                Buy Now
                                            </Button>
                                            <Button 
                                                className="flex-1 bg-white hover:bg-slate-50 text-[#003366] text-[10px] font-bold h-9 rounded-lg border-none shadow-sm" 
                                                onClick={handleAddToCart}
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Batches Area */}
                                {(hero?.batches?.length > 0 || slug === 'ccna-200-301' || slug === 'ccnp-enterprise') && (
                                    <div className="flex-1 space-y-5 pt-1">
                                        {(hero?.batches?.length > 0 ? hero.batches : (slug === 'ccna-200-301' ? [
                                            {
                                                name: "Weekday Evening Batch",
                                                startDate: "16th March 2026",
                                                time: "08:00 PM – 10:00 PM",
                                                days: "Monday – Friday",
                                                status: "Filling Fast"
                                            },
                                            {
                                                name: "Weekend Morning Batch",
                                                startDate: "14th March 2026",
                                                time: "10:00 AM – 01:00 PM",
                                                days: "Saturday, Sunday"
                                            }
                                        ] : (slug === 'ccnp-enterprise' ? [
                                            {
                                                name: "Weekday Evening Batch",
                                                startDate: "16th March, 2026",
                                                time: "05:00 PM – 07:00 PM",
                                                days: "Monday – Friday",
                                                status: "Filling Fast"
                                            },
                                            {
                                                name: "Weekend Evening Batch",
                                                startDate: "14th March, 2026",
                                                time: "05:00 PM – 08:00 PM",
                                                days: "Saturday, Sunday"
                                            }
                                        ] : []))).map((batch: any, index: number) => (
                                            <div key={index} className="relative pt-3">
                                                {batch.status === "Filling Fast" && (
                                                    <div className="absolute top-0 left-4 z-20 bg-[#003366] text-white text-[10px] font-bold px-3 py-0.5 rounded-md uppercase tracking-wide">
                                                        Fast Filling
                                                    </div>
                                                )}
                                                <div className="bg-white rounded-2xl border border-blue-100 px-6 pt-5 pb-5 shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="flex items-start justify-between gap-4 mb-4">
                                                        <div>
                                                            <h3 className="text-[17px] font-extrabold text-slate-800 leading-tight">{batch.name}</h3>
                                                            <p className="text-slate-400 text-[11px] font-medium mt-0.5">
                                                                Starts: {batch.startDate || "Coming Soon"}
                                                            </p>
                                                        </div>
                                                        <Button 
                                                            onClick={handleEnroll} 
                                                            className="bg-[#003366] hover:bg-slate-800 text-white text-[12px] font-bold px-6 h-9 rounded-lg shrink-0"
                                                        >
                                                            Book Now
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-wrap gap-6 text-[12px] text-slate-600 font-medium">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-5 h-5 rounded-full border border-blue-400 flex items-center justify-center shrink-0">
                                                                <Clock className="w-3 h-3 text-blue-500" />
                                                            </div>
                                                            {batch.time}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-5 h-5 rounded-full border border-blue-400 flex items-center justify-center shrink-0">
                                                                <Calendar className="w-3 h-3 text-blue-500" />
                                                            </div>
                                                            {batch.days}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Flexible Learning Info */}
                                        <div className="pt-2">
                                            <h4 className="text-base font-bold text-slate-800 mb-1">Flexible Learning Environment</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed max-w-2xl">
                                                Missed a class? No worries. All sessions are recorded and uploaded to your student portal within 2 hours. You can watch them anytime to practice at your own pace.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    
                    {/* Course Schedule (Hide if SD-WAN, Python, or Combo) */}
                    {!(slug === 'cisco-sd-wan' || slug === 'python-automation' || isCombo) && (
                        <div id="course-schedule" className="scroll-mt-32">
                            <CourseSchedule onEnroll={handleEnroll} items={schedule} />
                        </div>
                    )}

                    {/* Enquiry / Consultation Section */}
                    <div id="enquiry" className="scroll-mt-32">
                        <EnquiryCTA defaultCourse={title} />
                    </div>

                    {/* FAQ */}
                    <div id="faq" className="scroll-mt-32 pb-12">
                        <FAQ items={faqs} />
                    </div>

                    {/* Google Reviews */}
                    <div id="reviews" className="scroll-mt-32 pb-12">
                        <GoogleReviewsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
