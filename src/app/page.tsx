import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FranchiseLogos from '@/components/FranchiseLogos';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FranchiseLogos />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
