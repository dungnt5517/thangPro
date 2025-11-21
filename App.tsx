import React, { useEffect } from 'react';
import { landingPageData } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import OfferCTA from './components/OfferCTA';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import { HeroBannerData, OfferCtaData } from './types';

const App: React.FC = () => {
  // Helper to find phone number from data
  const findPhone = (): string => {
    const offer = landingPageData.content.find(c => c.type === 'countdown_offer');
    if (offer) return (offer.data as OfferCtaData).phone;
    
    const hero = landingPageData.content.find(c => c.type === 'hero_banner');
    if (hero) {
      const heroData = hero.data as HeroBannerData;
      // Assuming secondary CTA might contain a phone number text
      return heroData.cta_secondary; 
    }
    return "0900000000";
  };

  const phone = findPhone();

  // Set document title for SEO
  useEffect(() => {
    if (landingPageData.config.seo.title) {
      document.title = landingPageData.config.seo.title;
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-brand-light">
      <Header title={landingPageData.config.seo.title} phone={phone} />

      <main className="flex-grow">
        {landingPageData.content.map((section) => {
          switch (section.type) {
            case 'hero_banner':
              return <Hero key={section.id} data={section.data} />;
            case 'grid_3_col':
              return <PainPoints key={section.id} data={section.data} />;
            case 'service_list':
              return <Services key={section.id} data={section.data} />;
            case 'before_after_slider':
              return <SocialProof key={section.id} data={section.data} />;
            case 'testimonial_cards':
              return <Testimonials key={section.id} data={section.data} />;
            case 'countdown_offer':
              return <OfferCTA key={section.id} data={section.data} />;
            default:
              return null;
          }
        })}
      </main>

      <FloatingCTA phone={phone} />
      <Footer companyName={landingPageData.config.seo.title} />
    </div>
  );
};

export default App;