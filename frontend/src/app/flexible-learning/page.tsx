import { getStrapiData } from '@/lib/strapi';
import FlexibleLearningListingClient from './FlexibleLearningListingClient';

export default async function FlexibleLearningPage() {
    try {
        const response = await getStrapiData('/courses', {
            'filters[isFlexible][$eq]': 'true',
            'populate': '*',
        });

        const courses = response.data || [];

        return <FlexibleLearningListingClient courses={courses} />;
    } catch (e) {
        console.error("Error fetching flexible courses:", e);
        // Fallback to empty list or handled by client
        return <FlexibleLearningListingClient courses={[]} />;
    }
}
