
"use client";

import { useState, use } from 'react';
import { notFound, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User, Shield, Server, Activity, CheckCircle2, Clock, Calendar, Database, Globe, Cpu, Cloud, Code } from 'lucide-react';
import { courses } from '@/lib/courses-data';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/sections/FAQ';

// Helper to get course by slug
function getCourseBySlug(slug: string) {
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

    if (!course) {
        return notFound();
    }

    const { hero, overview, roadmap } = course.attributes;

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
                        <Button size="lg" className="bg-white text-[#003366] hover:bg-blue-50 font-semibold px-8 h-12">
                            Enroll Now
                        </Button>
                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 px-8 h-12 bg-transparent">
                            Download Syllabus
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto rounded-[12px] relative z-10 -mt-[100px] bg-white shadow-xl px-0 pb-[60px]">

                {/* Tabs Navigation */}
                <div className="px-[24px] pt-[24px] pb-[24px] border-b border-slate-200 mb-[48px]">
                    <div className="flex flex-wrap gap-8 items-center">
                        {['Overview', 'Roadmap', 'Batches', 'FAQ'].map((item) => {
                            const id = item.toLowerCase();
                            const isActive = activeSection === id;
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(id)}
                                    className={`relative pb-2 text-sm md:text-base transition-colors ${isActive
                                        ? 'font-bold text-[#003366]'
                                        : 'font-medium text-slate-500 hover:text-slate-800'
                                        }`}
                                >
                                    {item}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#003366]"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-[48px]">

                    {/* Program Overview - Core Skills */}
                    <section id="overview" className="scroll-mt-32 w-[1120px] mx-auto">
                        <div className="text-center mb-[48px]">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{overview?.title || "Course Overview"}</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                {overview?.description || "Master the skills needed for this course."}
                            </p>
                        </div>

                        <div className="flex flex-wrap lg:flex-nowrap gap-[24px] justify-center lg:justify-start">
                            {overview?.skills.map((skill: any, idx: number) => (
                                <div key={idx} className="bg-[#EBF3FA] p-[16px] rounded-[12px] border border-slate-100/50 hover:shadow-md transition-shadow w-[262px] h-[175px] flex-shrink-0 flex flex-col justify-between">
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
                    </section>

                    {/* Learning Roadmap */}
                    {roadmap && roadmap.length > 0 && (
                        <section id="roadmap" className="scroll-mt-32 w-[1200px] mx-auto bg-[#0079FF]/5 rounded-[12px] pt-[48px] pb-[48px] px-[40px]">
                            <div className="text-center mb-[48px]">
                                <h2 className="text-3xl font-bold text-slate-900 mb-[8px]">Curriculum Roadmap</h2>
                                <p className="text-slate-600 max-w-2xl mx-auto">
                                    A structured journey to mastery.
                                </p>
                            </div>

                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2 hidden md:block"></div>

                                {roadmap.map((item: any, idx: number) => (
                                    <div key={idx} className={`relative flex flex-col md:flex-row gap-[96px] mb-[40px] items-center text-left ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Timeline Dot */}
                                        <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-[#003366] ring-4 ring-white shadow-sm -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>

                                        {/* Content Card */}
                                        <div className="w-[506px] h-[254px]">
                                            <div className="bg-white p-[16px] rounded-[12px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col justify-center">
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
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium w-fit">
                                                        Topics Covered: {item.topics}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-[506px] hidden md:block"></div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Upcoming Batches Section */}
                    <section id="batches" className="scroll-mt-32 w-[1120px] h-[568px] mx-auto pt-[48px] pb-[48px] px-[40px] bg-white rounded-[12px] shadow-sm border border-slate-100 mb-[100px]">
                        <div className="text-center mb-[48px]">
                            <h2 className="text-3xl font-bold mb-[8px]">Upcoming Batches</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Secure your seat in our next scheduled batch and begin your journey.
                            </p>
                        </div>

                        <div className="flex gap-[40px] h-[calc(100%-100px)]">
                            {/* Pricing Card */}
                            <div className="w-[340px] flex-shrink-0 bg-[#003366] text-white rounded-[12px] p-[24px] shadow-lg flex flex-col h-full">
                                <p className="text-blue-200 text-sm font-medium mb-1">Total Course Fee</p>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-3xl font-bold">₹8,500</span>
                                    <span className="text-slate-400 text-lg line-through">(₹12,000)</span>
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

                                <div className="space-y-3 mt-4">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-9 text-sm">Buy Now</Button>
                                    <Button variant="outline" className="w-full bg-white text-[#003366] hover:bg-slate-100 h-9 border-none text-sm">Add to Cart</Button>
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
                </div>

                {/* Shared FAQ Section */}
                <div className="px-[24px]"> {/* Add padding for FAQ inside the white box or keep it outside? */}
                    {/* Wait, I should probably put FAQ inside the white box too if it's "All course content" */}
                    {/* But the prompt said "Overview / Roadmap / Batches / FAQ" tabs. */}
                    {/* FAQ component is currently outside the white box in previous code (Line 274). */}
                    {/* But I added an opening div `space-y-[48px]` that wraps everything up to here. */}
                    {/* So I need to close that `space-y` div, then close the `max-w-[1200px]` div. */}
                    {/* Let's see: */}
                    {/* <div className="max-w-[1200px]..."> (Outer white box) */}
                    {/*   <div className="px-24 ..."> (Tabs) </div> */}
                    {/*   <div className="space-y-[48px]"> (Content Wrapper) */}
                    {/*      <section ...> (Overview) */}
                    {/*      ... */}
                    {/*      <div ...> (Batches) </div> (This closes at line 271 in view) */}
                    {/*      <FAQ /> (Line 274) */}
                    {/*   </div> (Close Content Wrapper) */}
                    {/* </div> (Close White Box) */}

                    <FAQ />
                </div>
            </div>
        </div>
    );
}
