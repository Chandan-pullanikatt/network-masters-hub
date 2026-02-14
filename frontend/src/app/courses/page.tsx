import CourseCard from '@/components/CourseCard';
import { Course } from '@/types';

// Dummy data (same as Home but usually fetched)
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

export default function CoursesPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Start your journey towards a successful IT career with our industry-recognized certification courses.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}
