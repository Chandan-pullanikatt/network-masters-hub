import { notFound } from 'next/navigation';
import { getStrapiData } from '@/lib/strapi';
import FlexibleLearningDetailClient from './FlexibleLearningDetailClient';

export async function generateStaticParams() {
    try {
        const { data: courses } = await getStrapiData('/courses', {
            'filters[isFlexible][$eq]': 'true'
        });
        return courses.map((course: any) => ({
            slug: (course.attributes || course).slug,
        }));
    } catch (e) {
        return [];
    }
}

export default async function FlexibleLearningCourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    try {
        const response = await getStrapiData('/courses', {
            'filters[slug][$eq]': slug,
            'populate': '*',
        });

        const course = response.data?.[0];

        if (!course) {
            return notFound();
        }

        return <FlexibleLearningDetailClient course={course} />;
    } catch (e) {
        console.error("Error fetching flexible course detail:", e);
        return notFound();
    }
}
