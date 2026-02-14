import { Course } from '@/types';
import PopularCourseCard from '@/components/PopularCourseCard';
import { MotionSection, MotionDiv } from '@/components/ui/motion-container';
import { staggerContainer, fadeInUp } from '@/lib/animations';

import { courses } from '@/lib/courses-data';

const popularCourses = courses;

const Courses = () => {
    return (
        <section className="py-[150px] bg-[#F8F9FA]">
            <div className="max-w-[1280px] mx-auto w-full px-6">
                <MotionDiv
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center space-y-4 mb-16"
                >
                    <MotionDiv variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Popular Courses</h2>
                    </MotionDiv>
                    <MotionDiv variants={fadeInUp}>
                        <p className="max-w-[700px] text-slate-600 text-lg">
                            Industry-focused programs crafted for practical learning and career growth.
                        </p>
                    </MotionDiv>
                </MotionDiv>

                <MotionSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularCourses.map((course) => (
                        <MotionDiv key={course.id} variants={fadeInUp} className="h-full w-full mx-auto">
                            <PopularCourseCard course={course} />
                        </MotionDiv>
                    ))}
                </MotionSection>
            </div>
        </section>
    );
};

export default Courses;
