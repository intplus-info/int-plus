import CTABanner from '@/components/cta-banner';
import FAQ from '@/components/faq';
import { HeroSection } from '@/components/hero-section';
import { ReasonsSection } from '@/components/reasons-section';
import { ServicesSection } from '@/components/services-section';
import Testimonials from '@/components/testimonials';
import { WorksSection } from '@/components/works-section';

export default function Home() {
  return (
    <main>
      <div className="xl:max-h-screen overflow-hidden">
        <HeroSection />
      </div>
      <ReasonsSection />
      <ServicesSection />
      <WorksSection />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
