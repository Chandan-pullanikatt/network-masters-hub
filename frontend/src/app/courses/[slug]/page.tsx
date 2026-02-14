
"use client";

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User, Shield, Server, Activity, CheckCircle2, Clock, Calendar, Database, Globe, Cpu, Cloud, Code } from 'lucide-react';
import { courses } from '@/lib/courses-data';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '@/components/sections/FAQ';

// Helper to get course by slug
function getCourseBySlug(slug: string) {
    const decodedSlug = decodeURIComponent(slug);
    console.log('All courses:', courses.map(c => ({ title: c.attributes.title, slug: c.attributes.slug })));
    console.log(`Searching for slug: "${slug}" (decoded: "${decodedSlug}")`);

    if (!courses || courses.length === 0) {
        console.error('Courses data is empty or undefined!');
        return undefined;
    }

    const found = courses.find(course => course.attributes.slug === decodedSlug);
    console.log('Found course:', found ? found.attributes.title : 'None');
    return found;
}

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const course = getCourseBySlug(slug);
    const [activeSection, setActiveSection] = useState('overview');

    if (!course) {
        // Return 404 but log it first
        console.error(`Course not found for slug: ${slug}`);
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
            <section className="bg-[#003366] text-white py-[150px] relative overflow-hidden">
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4d7a97_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="container px-4 md:px-6 relative z-10 text-center">
                    {/* Breadcrumb-ish */}
                    <div className="mb-6 text-blue-200 text-sm font-medium uppercase tracking-wider">
                        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link> / {course.attributes.title}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
                        {hero?.title || course.attributes.title}
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        {hero?.subtitle || course.attributes.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-[#0056b3] hover:bg-[#004494] text-white border-none h-12 px-8 text-lg">
                            Get Course Plan
                        </Button>
                        <Button size="lg" variant="outline" className="bg-white text-[#003366] hover:bg-slate-100 border-none h-12 px-8 text-lg">
                            Talk to Trainer
                        </Button>
                    </div>
                </div>
            </section>

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
                    <section id="batches" className="scroll-mt-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Upcoming Batches</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Secure your seat in our next scheduled batch and begin your journey.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Pricing Card */}
                            <div className="bg-[#003366] text-white rounded-2xl p-8 shadow-lg h-fit">
                                <p className="text-blue-200 text-sm font-medium mb-1">Total Course Fee</p>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-4xl font-bold">₹{hero?.price}</span>
                                    {hero?.originalPrice && (
                                        <span className="text-slate-400 text-lg line-through">(₹{hero?.originalPrice})</span>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        `${course.attributes.videoHours}+ hours of learning`,
                                        'Instructor-led HD sessions',
                                        'Job & interview support',
                                        'Scenario-based practice',
                                        'Resume & soft skill guidance',
                                        'Weekly doubt sessions',
                                        'Premium study notes'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-3">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-10">Buy Now</Button>
                                    <Button variant="outline" className="w-full bg-white text-[#003366] hover:bg-slate-100 h-10 border-none">Add to Cart</Button>
                                </div>
                            </div>

                            {/* Batches List */}
                            <div className="lg:col-span-2 space-y-6">
                                {hero?.batches?.map((batch: any, idx: number) => (
                                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 relative overflow-hidden group hover:border-blue-200 transition-colors">
                                        {batch.status !== 'Open' && (
                                            <div className="absolute top-0 left-0 bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                                                {batch.status}
                                            </div>
                                        )}
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 mt-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900">{batch.name}</h3>
                                                <p className="text-slate-500 text-sm">Starts: {hero.startDate || "Coming Soon"}</p>
                                            </div>
                                            <Button className="bg-[#003366] hover:bg-[#002244] text-white">Book Now</Button>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-600 border-t border-slate-100 pt-4">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-blue-600" />
                                                {batch.time}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-blue-600" />
                                                {batch.days}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Info Note */}
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Flexible Learning Environment</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
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
