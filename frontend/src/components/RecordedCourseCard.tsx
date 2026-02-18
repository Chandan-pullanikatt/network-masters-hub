"use client";

import { Course } from '@/types';
import { Button } from '@/components/ui/button';
import { Check, Video } from 'lucide-react';
import Link from 'next/link';

interface RecordedCourseCardProps {
    course: Course;
}

const RecordedCourseCard: React.FC<RecordedCourseCardProps> = ({ course }) => {
    const { title, slug, videoHours, price } = course.attributes;

    const benefits = [
        `${videoHours}+ Hours of Content`,
        "Resume Building",
        "Soft Skill Training",
        "Practical Learning with Lab",
        "2 year Access of Course"
    ];

    return (
        <div className="flex flex-col w-full bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl border border-slate-100">
            {/* Header Section (Blue Curve) */}
            <div className="relative bg-[#003366] pt-8 pb-12 px-6 text-center text-white">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide min-h-[56px] flex items-center justify-center">
                    {title}
                </h3>
                <p className="text-blue-200 text-sm font-medium mb-1">Course Price</p>
                <div className="text-4xl font-bold">
                    ₹{price}
                </div>

                {/* Curved Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-white" style={{ borderTopLeftRadius: '50% 50%', borderTopRightRadius: '50% 50%', transform: 'translateY(55%)' }}></div>
            </div>

            {/* Content Section */}
            <div className="relative px-6 pb-8 pt-6 flex flex-col items-center flex-1">
                {/* Enroll Button (Pill shape) */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 text-center">
                    <Button
                        asChild
                        className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6 font-bold tracking-wider text-sm shadow-lg border-2 border-white"
                    >
                        <Link href={`/courses/${slug}`}>ENROLL NOW</Link>
                    </Button>
                </div>

                <div className="mt-8 space-y-3 w-full max-w-[260px]">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                            {index === 0 ? (
                                <Video className="w-4 h-4 text-blue-600" fill="currentColor" />
                            ) : (
                                <Check className="w-4 h-4 text-blue-600" strokeWidth={4} />
                            )}
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecordedCourseCard;
