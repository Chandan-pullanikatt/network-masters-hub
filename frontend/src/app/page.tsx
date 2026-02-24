import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Courses from '@/components/sections/Courses';
import Steps from '@/components/sections/Steps';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';

import EnquiryCTA from '@/components/sections/EnquiryCTA';

import UpcomingBatchesModal from '@/components/home/UpcomingBatchesModal';

import NewsletterSection from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <UpcomingBatchesModal />
      <Hero />
      <Courses />
      <Features />
      <Steps />
      <Testimonials />
      <EnquiryCTA />
      <NewsletterSection />
      <FAQ />
    </main>
  );
}
