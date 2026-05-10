import { NextResponse } from 'next/server';
import { getStrapiData } from '@/lib/strapi';

export async function GET() {
    try {
        const [coursesResponse, landingPageResponse] = await Promise.all([
            getStrapiData('/courses', {
                'populate[hero][populate]': '*',
            }, { cache: 'no-store' }),
            getStrapiData('/landing-page', { populate: '*' }, { cache: 'no-store' }),
        ]);

        const landingData = landingPageResponse?.data?.attributes || landingPageResponse?.data || {};
        const showPopup = landingData.showBatchPopup !== false;

        const coursesData: any[] = coursesResponse.data || [];

        const batches: { courseName: string; date: string; time: string; status: string; link: string }[] = [];

        const MODAL_SLUGS = ['ccna-200-301', 'ccnp-enterprise'];

        coursesData
            .filter((course: any) => MODAL_SLUGS.includes((course.attributes || course).slug))
            .forEach((course: any) => {
                const data = course.attributes || course;
                const hero = data.hero;
                if (!hero) return;

                const heroBatches: any[] = hero.batches || [];
                heroBatches.forEach((batch: any) => {
                    if (batch.status !== 'Closed') {
                        batches.push({
                            courseName: data.title,
                            date: batch.startDate || hero.startDate || '',
                            time: batch.time || '',
                            status: batch.status || 'Open',
                            link: `/courses/${data.slug}`,
                        });
                    }
                });
            });

        return NextResponse.json({ batches, showPopup });
    } catch (err) {
        console.error('[/api/batches] Failed to fetch:', err);
        return NextResponse.json({ batches: [], showPopup: true }, { status: 200 });
    }
}
