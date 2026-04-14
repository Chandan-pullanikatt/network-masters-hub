import { notFound } from 'next/navigation';
import { getStrapiData } from '@/lib/strapi';
import CourseDetailClient from './CourseDetailClient';

export async function generateStaticParams() {
    const defaultSlugs = [
        { slug: 'ccna-200-301' },
        { slug: 'ccnp-enterprise' },
        { slug: 'python-automation' }
    ];

    try {
        const { data: courses } = await getStrapiData('/courses');
        if (!courses || courses.length === 0) return defaultSlugs;
        
        return courses.map((course: any) => ({
            slug: (course.attributes || course).slug,
        }));
    } catch (e) {
        return defaultSlugs;
    }
}

const fallbackCourses: Record<string, any> = {
    'ccna-200-301': {
        id: 1,
        slug: "ccna-200-301",
        title: "Cisco CCNA 200-301 Complete Training",
        description: "Master the fundamentals of networking with our comprehensive CCNA course.",
        price: 15000,
        originalPrice: 20000,
        videoHours: 60,
        isCombo: false,
        hero: {
            title: "Cisco CCNA 200-301 Complete Training",
            subtitle: "Master the fundamentals of networking with our comprehensive CCNA course.",
            badge: "Most Popular",
            originalPrice: 20000,
            batches: []
        }
    },
    'ccnp-enterprise': {
        id: 2,
        slug: "ccnp-enterprise",
        title: "CCNP Enterprise (ENCOR + ENARSI)",
        description: "Advance your career with professional-level networking skills.",
        price: 25000,
        originalPrice: 35000,
        videoHours: 120,
        isCombo: false,
        hero: {
            title: "CCNP Enterprise (ENCOR + ENARSI)",
            subtitle: "Advance your career with professional-level networking skills.",
            badge: "Professional Track",
            originalPrice: 35000,
            batches: []
        }
    },
    'python-automation': {
        id: 3,
        slug: "python-automation",
        title: "Python Network Automation",
        description: "Automate network tasks using Python and Ansible.",
        price: 15000,
        originalPrice: 25000,
        videoHours: 40,
        isCombo: false,
        hero: {
            title: "Python Network Automation",
            subtitle: "Automate network tasks using Python and Ansible.",
            badge: "Trending",
            originalPrice: 25000,
            batches: []
        }
    }
};

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    try {
        const response = await getStrapiData('/courses', {
            'filters[slug][$eq]': slug,
            'populate[hero][populate]': '*',
            'populate[overview][populate]': '*',
            'populate[roadmap][populate]': '*',
            'populate[faqs][populate]': '*',
            'populate[schedule][populate]': '*',
            'populate[image][populate]': '*',
        });

        const course = response.data?.[0];

        if (!course) {
            if (fallbackCourses[slug]) {
                console.log(`Using fallback data for missing course: ${slug}`);
                return <CourseDetailClient course={fallbackCourses[slug]} />;
            }
            return notFound();
        }

        return <CourseDetailClient course={course} />;
    } catch (e) {
        console.error("Error fetching course detail:", e);
        if (fallbackCourses[slug]) {
            console.log(`Using fallback data due to Strapi error: ${slug}`);
            return <CourseDetailClient course={fallbackCourses[slug]} />;
        }
        return notFound();
    }
}
