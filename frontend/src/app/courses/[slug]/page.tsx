
"use client";

import { useState, use } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { User, Shield, Server, Activity, CheckCircle2, Clock, Calendar, Database, Globe, Cpu, Cloud, Code, Award, Lock } from 'lucide-react';
import { courses } from '@/lib/courses-data';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/sections/FAQ';
import CourseSchedule from '@/components/sections/CourseSchedule';
import EnquiryCTA from '@/components/sections/EnquiryCTA';
import StudentReviews from '@/components/sections/StudentReviews';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { Course } from '@/types';

// Helper to get course by slug
function getCourseBySlug(slug: string): Course | undefined {
    if (!slug) return undefined;
    const decodedSlug = decodeURIComponent(slug);
    // console.log(`Searching for slug: "${slug}"`);

    if (!courses || courses.length === 0) {
        return undefined;
    }

    return courses.find(course => course.attributes.slug === decodedSlug);
}

export default function CourseDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const course = getCourseBySlug(slug);
    const [activeSection, setActiveSection] = useState('overview');
    const [activeModule, setActiveModule] = useState('encor');
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    const [enrollLoading, setEnrollLoading] = useState(false);

    const handleEnroll = () => {
        if (!course) return;

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

        if (course) {
            addToCart(course);
            toast.success("Added to cart");
        }
    };

    if (!course) {
        return notFound();
    }

    const { hero, overview, roadmap, roadmapModules } = course.attributes;

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for sticky nav height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative bg-[#003366] text-white pt-32 pb-48">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/assets/p6.png)' }}
                >
                    <div className="absolute inset-0 bg-[#003366]/80"></div>
                </div>

                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/30">
                        {hero?.badge || "Best Seller"}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        {hero?.title || course.attributes.title}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {hero?.subtitle || course.attributes.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-white text-[#003366] hover:bg-blue-50 font-semibold px-8 h-12"
                            onClick={handleEnroll}
                            disabled={enrollLoading}
                        >
                            {enrollLoading ? "Redirecting..." : "Enroll Now"}
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 px-8 h-12 bg-transparent">
                            Download Syllabus
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto rounded-[12px] relative z-10 -mt-[100px] bg-white shadow-xl px-0 pb-[60px] mb-[120px] w-full">

                {/* Tabs Navigation */}
                <div className="px-4 md:px-6 pt-[24px] pb-[24px] mb-[48px] overflow-x-auto">
                    <div className="flex gap-4 items-center min-w-max p-1">
                        {['Overview', 'Roadmap', 'Batches', 'Course Schedule', 'FAQ'].map((item) => {
                            const id = item.toLowerCase().replace(' ', '-');
                            const isActive = activeSection === id;
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(id)}
                                    className={`relative px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${isActive
                                        ? 'bg-[#003366] text-white shadow-md'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#003366]'
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-[48px]">

                    {/* Program Overview - Core Skills */}
                    <section id="overview" className="scroll-mt-32 max-w-6xl mx-auto px-4">
                        <div className="text-center mb-[48px]">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{overview?.title || "Course Overview"}</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                {overview?.description || "Master the skills needed for this course."}
                            </p>
                        </div>

                        {slug === 'ccna-ccnp-combo' ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* CCNA Card */}
                                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                                                <User className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">CCNA (Foundation Level)</h3>
                                                <p className="text-blue-600 font-medium">Prerequisite & Basics</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                                    <Database className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">OSI Model & Architecture</h4>
                                                    <p className="text-sm text-slate-600">Mastering the 7 layers and end-to-end data flow.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                                    <Globe className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">IP Addressing & Subnetting</h4>
                                                    <p className="text-sm text-slate-600">IPv4/IPv6 address management and VLSM.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                                    <Activity className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">Switching Technologies</h4>
                                                    <p className="text-sm text-slate-600">VLANs, STP, and EtherChannel basics.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                                    <Shield className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">Network Security Fundamentals</h4>
                                                    <p className="text-sm text-slate-600">Port security, ACLs, and basic device hardening.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CCNP Card */}
                                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                                                <Award className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">CCNP Enterprise</h3>
                                                <p className="text-indigo-600 font-medium">Professional Level Mastery</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">ENCORE</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <Server className="w-4 h-4 text-indigo-500" />
                                                        Dual Stack Architecture
                                                    </li>
                                                    <li className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <Cloud className="w-4 h-4 text-indigo-500" />
                                                        Virtualization
                                                    </li>
                                                    <li className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <Code className="w-4 h-4 text-indigo-500" />
                                                        Network Automation
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">ENARSI</h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <Activity className="w-4 h-4 text-indigo-500" />
                                                        Advanced Layer 3
                                                    </li>
                                                    <li className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <Lock className="w-4 h-4 text-indigo-500" />
                                                        VPN Technologies
                                                    </li>
                                                    <li className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <Shield className="w-4 h-4 text-indigo-500" />
                                                        Infrastructure Security
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : slug === 'ccnp-enterprise' ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {overview?.skills.map((skill: any, idx: number) => (
                                    <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden h-full flex flex-col">
                                        <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full -mr-10 -mt-10 z-0 opacity-50 ${idx === 0 ? 'bg-blue-50' : 'bg-indigo-50'}`}></div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${idx === 0 ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'}`}>
                                                <skill.icon className="w-7 h-7" />
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                                            <p className="text-slate-600 mb-8 leading-relaxed">{skill.desc}</p>

                                            {skill.points && (
                                                <ul className="space-y-4 mt-auto">
                                                    {skill.points.map((point: string, pIdx: number) => (
                                                        <li key={pIdx} className="flex items-start gap-3 text-slate-700 font-medium">
                                                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${idx === 0 ? 'text-blue-600' : 'text-indigo-600'}`} />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : slug === 'cisco-sd-wan' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {overview?.skills.map((skill: any, idx: number) => (
                                    <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start h-full group">
                                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <skill.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{skill.desc}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-wrap lg:flex-nowrap gap-[24px] justify-center lg:justify-start">
                                {overview?.skills.map((skill: any, idx: number) => (
                                    <div key={idx} className="bg-[#EBF3FA] p-[16px] rounded-[12px] border border-slate-100/50 hover:shadow-md transition-shadow w-full sm:w-[262px] h-[175px] flex-shrink-0 flex flex-col justify-between">
                                        <div>
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-3 text-[#003366]">
                                                <skill.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{skill.title}</h3>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-snug line-clamp-3">{skill.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Learning Roadmap */}
                    {(roadmapModules || (roadmap && roadmap.length > 0)) && (
                        <section id="roadmap" className="scroll-mt-32 max-w-7xl mx-auto bg-[#0079FF]/5 rounded-[12px] py-12 px-4 md:px-10">
                            <div className="text-center mb-[48px]">
                                <h2 className="text-3xl font-bold text-slate-900 mb-[8px]">Curriculum Roadmap</h2>
                                <p className="text-slate-600 max-w-2xl mx-auto">
                                    A structured journey to mastery.
                                </p>
                            </div>

                            {roadmapModules && (
                                <div className="flex justify-center gap-4 mb-12">
                                    <button
                                        onClick={() => setActiveModule('encor')}
                                        className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeModule === 'encor' ? 'text-[#003366]' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        <div className={`w-2.5 h-2.5 rounded-full ${activeModule === 'encor' ? 'bg-[#003366]' : 'bg-slate-300'}`}></div>
                                        ENCORE Modules
                                    </button>
                                    <button
                                        onClick={() => setActiveModule('enarsi')}
                                        className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeModule === 'enarsi' ? 'text-[#003366]' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        <div className={`w-2.5 h-2.5 rounded-full ${activeModule === 'enarsi' ? 'bg-[#003366]' : 'bg-slate-300'}`}></div>
                                        ENARSI Modules
                                    </button>
                                </div>
                            )}

                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2 hidden md:block"></div>

                                {((roadmapModules && roadmapModules[activeModule]) || roadmap || []).map((item: any, idx: number) => (
                                    <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-[96px] mb-[40px] items-center text-left ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Timeline Dot */}
                                        <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[#003366] ring-4 ring-white shadow-sm -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>

                                        {/* Content Card */}
                                        <div className="w-full md:w-1/2 md:max-w-[506px]">
                                            <div className="bg-white p-[16px] rounded-[12px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col justify-center min-h-[250px]">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-4xl font-light text-slate-300">{item.id}</span>
                                                    <div className="ml-auto">
                                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                                            <User className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">{item.desc}</p>
                                                {item.topics && (
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white text-blue-700 text-xs font-medium w-fit">
                                                        Topics Covered: {item.topics}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 hidden md:block"></div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Upcoming Batches Section */}
                    <section id="batches" className="scroll-mt-32 max-w-6xl mx-auto py-12 px-4 md:px-10 bg-white rounded-[12px] shadow-sm border border-slate-100 mb-[100px]">
                        <div className="text-center mb-[48px]">
                            <h2 className="text-3xl font-bold mb-[8px]">Upcoming Batches</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Secure your seat in our next scheduled batch and begin your journey.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-[40px] h-auto">
                            {/* Pricing Card */}
                            <div className="w-full lg:w-[340px] flex-shrink-0 bg-[#003366] text-white rounded-[12px] p-[24px] shadow-lg flex flex-col h-auto lg:h-full">
                                <p className="text-blue-200 text-sm font-medium mb-1">Total Course Fee</p>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-3xl font-bold">₹{course.attributes.price.toLocaleString('en-IN')}</span>
                                    {course.attributes.hero?.originalPrice && (
                                        <span className="text-slate-400 text-lg line-through">(₹{course.attributes.hero?.originalPrice.toLocaleString('en-IN')})</span>
                                    )}
                                </div>

                                <ul className="space-y-2 mb-auto">
                                    {[
                                        '60+ hours of learning',
                                        'Instructor-led HD sessions',
                                        'Job & interview support',
                                        'Scenario-based practice',
                                        'Resume & soft skill guidance',
                                        'Weekly doubt sessions',
                                        'Premium study notes'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs">
                                            <CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex gap-3 mt-auto pt-4">

                                    <Button
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 h-9 text-sm"
                                        onClick={handleEnroll}
                                        disabled={enrollLoading}
                                    >
                                        {enrollLoading ? "Redirecting..." : "Buy Now"}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1 bg-white text-[#003366] hover:bg-slate-100 h-9 border-none text-sm"
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>

                            {/* Batches List & Info */}
                            <div className="flex-1 flex flex-col justify-between h-full">
                                {/* Batch 1 */}
                                <div className="bg-blue-50/50 rounded-[12px] border border-blue-200 p-[16px] relative">
                                    <div className="absolute -top-3 left-4 bg-[#003366] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                        Fast Filling
                                    </div>
                                    <div className="flex justify-between items-start mb-2 mt-1">
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900">Weekday Evening Batch</h3>
                                            <p className="text-slate-500 text-xs">Starts: 15th October 2024</p>
                                        </div>
                                        <Button className="bg-[#003366] hover:bg-[#002244] text-white h-7 text-xs px-3">Book Now</Button>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-slate-600">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                                            <span>7:30 PM - 9:30 PM (IST)</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                            <span>Monday, Wednesday, Friday</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Batch 2 */}
                                <div className="bg-blue-50/50 rounded-[12px] border border-blue-200 p-[16px] relative">
                                    <div className="flex justify-between items-start mb-2 mt-1">
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900">Weekend Morning Batch</h3>
                                            <p className="text-slate-500 text-xs">Starts: 19th October 2024</p>
                                        </div>
                                        <Button className="bg-[#003366] hover:bg-[#002244] text-white h-7 text-xs px-3">Book Now</Button>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-slate-600">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                                            <span>10:00 AM - 1:00 PM (IST)</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                            <span>Saturday, Sunday</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Note */}
                                <div className="bg-transparent rounded-xl pt-2 border-t border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-1 text-sm">Flexible Learning Environment</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Missed a class? No worries. All sessions are recorded and uploaded to your student portal within 2 hours.
                                        You can watch them anytime to practice at your own pace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* New Course Schedule Section */}
                    {/* Added ID for linking from tabs */}
                    <div id="course-schedule" className="scroll-mt-32">
                        <CourseSchedule />
                    </div>

                    {/* Enquiry Section */}
                    <div className="scroll-mt-32">
                        <EnquiryCTA />
                    </div>

                    {/* Shared FAQ Section */}
                    <div id="faq" className="px-[24px] scroll-mt-32">
                        <FAQ />
                    </div>

                    {/* Student Reviews Section */}
                    <div className="scroll-mt-32">
                        <StudentReviews />
                    </div>

                </div>


            </div >
        </div >
    );
}
