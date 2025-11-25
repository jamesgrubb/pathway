import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PathwayInteractive from './components/PathwayInteractive';
import InsightCards from './components/InsightCards';
import CommunityBanner from './components/CommunityBanner';
import ResourcesSection from './components/ResourcesSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-teal-200 selection:text-teal-900">
      <Header />
      <main>
        <Hero />
        <PathwayInteractive />
        <InsightCards />
        <CommunityBanner />
        <ResourcesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;