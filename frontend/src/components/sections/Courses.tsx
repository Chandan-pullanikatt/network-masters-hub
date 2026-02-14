import { Course } from '@/types';
import CourseCard from '@/components/CourseCard';

const dummyCourses: Course[] = [
    {
        id: 1,
        attributes: {
            title: "Cisco CCNA 200-301 Complete Training",
            slug: "ccna-200-301",
            description: "Master the fundamentals of networking with our comprehensive CCNA course.",
            duration: "7 Weeks",
            modules: [],
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
            modules: [],
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
            modules: [],
            videoHours: 25,
            price: 149,
            image: { data: { id: 3, attributes: { url: '/course-python.jpg', alternativeText: 'Python', width: 640, height: 360 } } }
        }
    }
];

const Courses = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Courses</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Most Popular Training Programs</h2>
                    <p className="max-w-[700px] text-slate-600">
                        Join thousands of students learning constantly updated networking technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
