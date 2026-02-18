"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { courses } from '@/lib/courses-data';

const categories = [
    { id: 'in-person', label: 'In Person Training', description: 'Immerse yourself in a classroom environment.' },
    { id: 'flexible', label: 'Flexible Learning', description: 'Learn at your own pace, anywhere, anytime.' }
];

interface CoursesDropdownProps {
    isScrolled: boolean;
    isHome: boolean;
}

const CoursesDropdown: React.FC<CoursesDropdownProps> = ({ isScrolled, isHome }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>('in-person');

    // Determine text color based on scroll/home state (matching Navbar logic)
    const textColor = isHome && !isScrolled ? 'text-white/90 hover:text-white' : 'text-foreground hover:text-primary';
    const chevronColor = isHome && !isScrolled ? 'text-white/70' : 'text-muted-foreground';

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 group ${textColor}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                Courses
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${chevronColor} group-hover:text-current`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 pt-4 w-[800px] -translate-x-1/2 z-50" // Improved positioning
                    >
                        <div className="bg-white rounded-xl shadow-xl border border-border overflow-hidden flex">
                            {/* Left Sidebar: Categories */}
                            <div className="w-[260px] bg-slate-50 border-r border-border p-4 flex flex-col gap-2 shrink-0">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        onMouseEnter={() => setActiveCategory(category.id)}
                                        className={`text-left p-3 rounded-lg transition-all ${activeCategory === category.id
                                            ? 'bg-blue-100 text-[#003366] shadow-sm ring-1 ring-blue-200'
                                            : 'hover:bg-slate-100 text-slate-600'
                                            }`}
                                    >
                                        <div className="font-bold text-sm mb-0.5">{category.label}</div>
                                        <div className="text-xs text-slate-500 leading-tight">{category.description}</div>
                                    </button>
                                ))}
                            </div>

                            {/* Right Content: Course List */}
                            <div className="flex-1 p-5 bg-white">
                                <div className="mb-3 flex items-center justify-between">
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                        {categories.find(c => c.id === activeCategory)?.label}
                                    </h3>
                                    <span className="text-xs text-slate-400">Select a course to view details</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {courses.slice(0, 5).map((course) => (
                                        <Link
                                            key={course.id}
                                            href={`/courses/${course.attributes.slug}`}
                                            className="group flex gap-3 items-start p-2 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                                        >
                                            {/* Course Image */}
                                            <div className="relative w-16 h-12 rounded-md overflow-hidden shrink-0 bg-slate-200">
                                                <Image
                                                    src={course.attributes.image?.data?.attributes?.url || '/placeholder.jpg'}
                                                    alt={course.attributes.title}
                                                    fill
                                                    className="object-cover transition-transform group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Course Info */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#003366] transition-colors">
                                                    {course.attributes.title}
                                                </h4>
                                                <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
                                                    <span>{course.attributes.duration}</span>
                                                    <span>•</span>
                                                    <span className="font-medium text-slate-700">₹{course.attributes.price.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                {activeCategory === 'flexible' && (
                                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
                                        <Link
                                            href="/flexible-learning"
                                            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            View All Flexible Learning Courses <span className="text-lg">→</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CoursesDropdown;
