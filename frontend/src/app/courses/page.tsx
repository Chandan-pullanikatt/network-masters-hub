"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import GoogleReviewsSection from '@/components/sections/GoogleReviewsSection';
import WrittenTestimonialsSection from '@/components/sections/WrittenTestimonialsSection';
import CourseCard from '@/components/CourseCard';
import { Course } from '@/types';
import { User, Shield, Server, Activity, CheckCircle2, Circle, Clock, Calendar } from 'lucide-react';

// Dummy data (same as Home but usually fetched)
const dummyCourses: Course[] = [
    {
        id: 1,
        attributes: {
            title: "Cisco CCNA 200-301 Complete Training",
            slug: "ccna-200-301",
            description: "Master the fundamentals of networking with our comprehensive CCNA course.",
            duration: "7 Weeks",
            modules: 10,
            videoHours: 40,
            price: 199,
            image: { data: { id: 1, attributes: { url: '/course-ccna.jpg', alternativeText: 'CCNA', width: 640, height: 360 } } }
        }
    },
    {
        id: 2,
        attributes: {
            title: "CCNP Enterprise (ENCOR + ENARSI)",
            slug: "ccnp-enterprise",
            description: "Advance your career with professional-level networking skills.",
            duration: "10 Weeks",
            modules: 10,
            videoHours: 60,
            price: 299,
            image: { data: { id: 2, attributes: { url: '/course-ccnp.jpg', alternativeText: 'CCNP', width: 640, height: 360 } } }
        }
    },
    {
        id: 3,
        attributes: {
            title: "Python Network Automation",
            slug: "python-automation",
            description: "Automate network tasks using Python and Ansible.",
            duration: "5 Weeks",
            modules: 10,
            videoHours: 25,
            price: 149,
            image: { data: { id: 3, attributes: { url: '/course-python.jpg', alternativeText: 'Python', width: 640, height: 360 } } }
        }
    }
];

export default function CoursesPage() {
    const [activeSection, setActiveSection] = useState('overview');

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
            <section className="bg-[#003366] text-white py-24 relative overflow-hidden">
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4d7a97_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Become a Job-Ready Network<br />
                        Engineer with CCNA (200-301)
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        Master the fundamentals of networking, security, and automation through hands-on
                        labs and expert-led mentorship and launch your career with confidence.
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

            {/* Sticky Sub-Navigation */}
            <div className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="container px-4 md:px-6">
                    <div className="flex overflow-x-auto no-scrollbar gap-8 items-center h-16">
                        {['Program Overview', 'Learning Roadmap', 'Batch Structure', 'FAQ'].map((item) => {
                            const id = item.toLowerCase().replace(' ', '-');
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(id)}
                                    className={`whitespace-nowrap font-medium text-sm md:text-base border-b-2 transition-colors px-1 py-5 ${activeSection === id
                                        ? 'border-[#003366] text-[#003366]'
                                        : 'border-transparent text-slate-500 hover:text-slate-800'
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-16 space-y-24">

                {/* Program Overview - Core Skills */}
                <section id="program-overview" className="scroll-mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Skills You'll Master</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our curriculum is designed to take you from beginner to certified networking professional with practical, job-ready skills.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Foundations', icon: User, desc: 'OSI model, TCP/IP basics, physical cabling, and switching fundamentals' },
                            { title: 'Routing', icon: Server, desc: 'Static and dynamic routing (OSPF), VLAN configuration, and network segmentation' },
                            { title: 'Security', icon: Shield, desc: 'Access Control Lists (ACLs), port security, and VLAN security fundamentals' },
                            { title: 'Automation', icon: Activity, desc: 'Network automation basics, programmable networks, and modern networking concepts' },
                        ].map((skill, idx) => (
                            <div key={idx} className="bg-[#EBF3FA] p-6 rounded-xl border border-slate-100/50 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4 text-[#003366]">
                                    <skill.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{skill.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Learning Roadmap */}
                <section id="learning-roadmap" className="scroll-mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Skills You'll Master</h2>
                        {/* Note: In screenshot this title was repeated, probably should be 'Learning Path' */}
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A structured journey to mastery.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>

                        {[
                            { id: '01', title: 'Network Fundamentals', desc: 'Build a strong foundation with the OSI and TCP/IP models, cabling types, and essential networking components.', topics: 'OSI Model - IPv4/IPv6 Basics' },
                            { id: '02', title: 'Network Access', desc: 'Master Ethernet switching, VLAN configuration, Spanning Tree Protocol (STP), and inter-switch trunking concepts.', topics: 'VLANs - Spanning Tree Protocol' },
                            { id: '03', title: 'IP Connectivity', desc: 'Learn how to configure and troubleshoot IPv4/IPv6 addressing, static routing, and dynamic routing protocols like OSPF.', topics: 'OSF - Static Routes' },
                            { id: '04', title: 'IP Services', desc: 'Understand critical network services such as NAT, DHCP, NTP, and SNMP for monitoring and management.', topics: 'NAT/DHCP - SNMP' },
                            { id: '05', title: 'Security Fundamentals', desc: 'Protect and secure networks by learning about threat landscapes, ACLs, VPN technologies, and port security.', topics: 'Firewalls - Network Security' },
                            { id: '06', title: 'Automation', desc: 'Step into modern networking with Software-Defined Networking (SDN), REST APIs, and automation tools.', topics: 'REST APIs - SDN Controllers' },
                        ].map((item, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-[15px] md:left-1/2 top-0 w-8 h-8 rounded-full bg-[#003366] border-4 border-white shadow-sm -translate-x-1/2 z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <span className="text-4xl font-light text-slate-300">{item.id}</span>
                                            <div className="ml-auto md:ml-0">
                                                {/* Optional Icon/Badge here if needed */}
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                                    <User className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed text-sm">{item.desc}</p>
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            Topics Covered: {item.topics}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Google Reviews Section */}
                <GoogleReviewsSection />

                {/* Written Testimonials Section */}
                <WrittenTestimonialsSection />

                {/* Upcoming Batches Section */}
                <section id="batch-structure" className="scroll-mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Upcoming Batches</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Secure your seat in our next scheduled batch and begin your journey toward becoming a certified network engineer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Pricing Card */}
                        <div className="bg-[#003366] text-white rounded-2xl p-8 shadow-lg h-fit">
                            <p className="text-blue-200 text-sm font-medium mb-1">Total Course Fee</p>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-4xl font-bold">₹8,500</span>
                                <span className="text-slate-400 text-lg line-through">(₹12,000)</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    '60+ hours of learning',
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
                            {/* Weekday Batch */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 relative overflow-hidden group hover:border-blue-200 transition-colors">
                                <div className="absolute top-0 left-0 bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                                    Fast Filling
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 mt-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Weekday Evening Batch</h3>
                                        <p className="text-slate-500 text-sm">Starts: 15th October 2024</p>
                                    </div>
                                    <Button className="bg-[#003366] hover:bg-[#002244] text-white">Book Now</Button>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-600 border-t border-slate-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-blue-600" />
                                        7:30 PM – 9:30 PM (IST)
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-600" />
                                        Monday, Wednesday, Friday
                                    </div>
                                </div>
                            </div>

                            {/* Weekend Batch */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-blue-200 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Weekend Morning Batch</h3>
                                        <p className="text-slate-500 text-sm">Starts: 19th October 2024</p>
                                    </div>
                                    <Button className="bg-[#003366] hover:bg-[#002244] text-white">Book Now</Button>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-600 border-t border-slate-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-blue-600" />
                                        10:00 AM – 1:00 PM (IST)
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-blue-600" />
                                        Saturday, Sunday
                                    </div>
                                </div>
                            </div>

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

                {/* FAQ Section */}
                <section id="faq" className="scroll-mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Common questions about the course and certification.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { q: "Do I need prior networking knowledge?", a: "No, this course is designed for absolute beginners. We start from the very basics of what a network is." },
                            { q: "Is the CCNA certification fee included?", a: "No, the course fee covers training and study materials. The exam fee is paid directly to Cisco." },
                            { q: "Do you provide placement assistance?", a: "Yes, we provide resume building, mock interviews, and share job openings with our hiring partners." },
                            { q: "How long do I have access to the recordings?", a: "You get lifetime access to all class recordings and study materials through our student portal." },
                            { q: "Can I switch batches if I miss classes?", a: "Yes, we allow batch switching in special cases. Please contact support for assistance." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>



            </div>
        </div>
    );
}
