import { getStrapiData } from '@/lib/strapi';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Courses from '@/components/sections/Courses';
import Steps from '@/components/sections/Steps';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import EnquiryCTA from '@/components/sections/EnquiryCTA';
import UpcomingBatchesModal from '@/components/home/UpcomingBatchesModal';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default async function Home() {
    // Fetch data from Strapi
    const [landingPageResponse, coursesResponse, faqsResponse] = await Promise.all([
        getStrapiData('/landing-page', { populate: '*' }),
        getStrapiData('/courses', { populate: 'image' }),
        getStrapiData('/faqs', {})
    ]);

    const landingPage = landingPageResponse.data?.attributes || landingPageResponse.data;
    const courses = coursesResponse.data;
    const faqs = faqsResponse.data?.map((f: any) => f.attributes || f) || [];

    return (
        <main className="min-h-screen bg-background">
            <UpcomingBatchesModal />
            <Hero data={landingPage?.hero} />
            <Courses initialCourses={courses} />
            <Features data={{
                title: landingPage?.features_title,
                description: landingPage?.features_desc,
                featureItems: landingPage?.features_list?.map((item: any) => ({
                    ...item,
                    description: item.desc
                }))
            }} />
            <Steps data={{
                title: landingPage?.steps_title,
                description: landingPage?.steps_desc,
                stepItems: landingPage?.steps_list?.map((item: any) => ({
                    ...item,
                    description: item.desc
                }))
            }} />
            <Testimonials />
            <EnquiryCTA />
            <NewsletterSection />
            <FAQ items={faqs.length > 0 ? faqs : undefined} />
        </main>
    );
}
