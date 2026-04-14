import { notFound } from 'next/navigation';
import { getStrapiData } from '@/lib/strapi';
import CourseDetailClient from './CourseDetailClient';

export async function generateStaticParams() {
    try {
        const { data: courses } = await getStrapiData('/courses');
        return courses.map((course: any) => ({
            slug: (course.attributes || course).slug,
        }));
    } catch (e) {
        return [];
    }
}

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
            return notFound();
        }

        return <CourseDetailClient course={course} />;
    } catch (e) {
        console.error("Error fetching course detail:", e);
        return notFound();
    }
}
