import { Course } from '@/types';
import PopularCourseCard from '@/components/PopularCourseCard';

const popularCourses: Course[] = [
    {
        id: 1,
        attributes: {
            title: "Cisco CCNA 200–301 Course (Training & Certificate)",
            slug: "ccna-200-301",
            description: "Master the fundamentals of networking.",
            duration: "7 weeks",
            modules: 10,
            videoHours: 40,
            price: 199,
            image: { data: { id: 1, attributes: { url: '/assets/p1.webp', alternativeText: 'CCNA', width: 640, height: 360 } } }
        }
    },
    {
        id: 2,
        attributes: {
            title: "CCNP (Encor and Enarsi) Online Training Course",
            slug: "ccnp-enterprise",
            description: "Advance your career with professional-level networking skills.",
            duration: "7 weeks",
            modules: 10,
            videoHours: 60,
            price: 299,
            image: { data: { id: 2, attributes: { url: '/assets/p2.webp', alternativeText: 'CCNP', width: 640, height: 360 } } }
        }
    },
    {
        id: 3,
        attributes: {
            title: "Cisco SD-WAN Online Course | Get Lifetime Access",
            slug: "cisco-sd-wan",
            description: "Master Software-Defined WAN.",
            duration: "7 weeks",
            modules: 10,
            videoHours: 35,
            price: 249,
            image: { data: { id: 3, attributes: { url: '/assets/p3.webp', alternativeText: 'SD-WAN', width: 640, height: 360 } } }
        }
    },
    {
        id: 4,
        attributes: {
            title: "Complete Python Automation Online Course for Network Engineers",
            slug: "python-automation",
            description: "Automate network tasks using Python.",
            duration: "7 weeks",
            modules: 10,
            videoHours: 25,
            price: 149,
            image: { data: { id: 4, attributes: { url: '/assets/p4.webp', alternativeText: 'Python', width: 640, height: 360 } } }
        }
    },
    {
        id: 5,
        attributes: {
            title: "CCNA & CCNP Combo Batch",
            slug: "ccna-ccnp-combo",
            description: "Comprehensive networking mastery.",
            duration: "12 weeks",
            modules: 20,
            videoHours: 100,
            price: 449,
            image: { data: { id: 5, attributes: { url: '/assets/p5.webp', alternativeText: 'Combo', width: 640, height: 360 } } }
        }
    }
];

const Courses = () => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Popular Courses</h2>
                    <p className="max-w-[700px] text-slate-600 text-lg">
                        Industry-focused programs crafted for practical learning and career growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularCourses.map((course) => (
                        <PopularCourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
