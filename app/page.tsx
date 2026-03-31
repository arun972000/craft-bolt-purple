import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PartnersSection from '@/components/PartnersSection';
import LeadershipSection from '@/components/LeadershipSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PartnersSection />
      <LeadershipSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
