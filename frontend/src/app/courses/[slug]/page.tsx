"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, Video, BookOpen, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// Dummy data (should be replaced by API fetch)
const dummyCourses = [
    {
        id: 1,
        attributes: {
            title: "Cisco CCNA 200-301 Complete Training",
            slug: "ccna-200-301",
            description: "Master the fundamentals of networking with our comprehensive CCNA course. This course covers everything from IP addressing to security and automation.",
            duration: "7 Weeks",
            modules: ["Network Fundamentals", "Network Access", "IP Connectivity", "IP Services", "Security Fundamentals", "Automation and Programmability"],
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
            description: "Advance your career with professional-level networking skills. Covers Core and Advanced Routing/Switching.",
            duration: "10 Weeks",
            modules: ["Architecture", "Virtualization", "Infrastructure", "Network Assurance", "Security", "Automation"],
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
            description: "Automate network tasks using Python and Ansible. Learn paramiko, netmiko, nornir and more.",
            duration: "5 Weeks",
            modules: ["Python Basics", "Netmiko", "NAPALM", "Ansible", "Nornir", "API Interaction"],
            videoHours: 25,
            price: 149,
            image: { data: { id: 3, attributes: { url: '/course-python.jpg', alternativeText: 'Python', width: 640, height: 360 } } }
        }
    }
];

export default function CourseDetailPage() {
    const params = useParams();
    const { addToCart } = useCart();
    // Ensure slug is treated as a string, as useParams can return string | string[]
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const course = dummyCourses.find((c) => c.attributes.slug === slug);

    if (!course) {
        return <div className="container py-20 text-center">Course not found</div>;
    }

    const { title, description, duration, modules, videoHours, price } = course.attributes;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Banner */}
            <div className="bg-slate-900 text-white py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2 space-y-4">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
                            <p className="text-slate-300 text-lg max-w-2xl">{description}</p>
                            <div className="flex bg-slate-800 w-fit rounded-lg p-3 gap-6 text-sm">
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> {duration}</div>
                                <div className="flex items-center gap-2"><Video className="w-4 h-4 text-blue-400" /> {videoHours} Hours</div>
                                <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-400" /> {Array.isArray(modules) ? modules.length : 0} Modules</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 -mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">

                    {/* Overview */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                        <p className="text-slate-600 leading-relaxed">
                            This course is meticulously designed to provide you with deep theoretical knowledge and practical skills.
                            Whether you are a beginner or looking to upgrade your skills, this curriculum covers all essential topics.
                        </p>
                    </div>

                    {/* Syllabus */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(modules as string[]).map((mod, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{mod}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="md:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg border sticky top-24">
                        <div className="aspect-video bg-slate-200 rounded-lg mb-6 relative overflow-hidden">
                            {/* Video Preview or Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-100">
                                Preview Image
                            </div>
                        </div>

                        <div className="mb-6">
                            <span className="text-3xl font-bold text-slate-900">${price}</span>
                            <span className="text-slate-500 line-through ml-3 text-sm">$399</span>
                        </div>

                        <div className="space-y-3">
                            <Button className="w-full h-12 text-lg" onClick={() => addToCart(course)}>
                                Add to Cart
                            </Button>
                            <Button variant="outline" className="w-full h-12">
                                Enquire Now
                            </Button>
                        </div>

                        <div className="mt-6 text-xs text-slate-500 text-center">
                            30-Day Money-Back Guarantee
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
