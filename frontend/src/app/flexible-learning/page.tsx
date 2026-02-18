"use client";

import { courses } from '@/lib/courses-data';
import RecordedCourseCard from '@/components/RecordedCourseCard';
import { motion } from 'framer-motion';

export default function FlexibleLearningPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="py-16 text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]"
                    >
                        Flexible <span className="text-blue-500">Learning</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg"
                    >
                        Learn At Your Own Ease with Our Recorded Course
                    </motion.p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {courses.map((course, index) => {
                            // Dynamic pricing for Flexible Learning Listing
                            const getFlexiblePrice = (slug: string) => {
                                switch (slug) {
                                    case 'ccna-200-301': return 4999;
                                    case 'ccnp-enterprise': return 8999;
                                    case 'python-automation': return 8999;
                                    case 'cisco-sd-wan': return 5999;
                                    default: return 11999; // Default/Combo
                                }
                            };

                            const flexiblePrice = getFlexiblePrice(course.attributes.slug);

                            // Create a modified course object with the flexible price
                            const flexibleCourse = {
                                ...course,
                                attributes: {
                                    ...course.attributes,
                                    price: flexiblePrice,
                                    hero: {
                                        ...course.attributes.hero,
                                        price: flexiblePrice,
                                        originalPrice: flexiblePrice * 2.5
                                    }
                                }
                            };

                            return (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    <RecordedCourseCard course={flexibleCourse} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
