import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickstartModal } from './components/QuickstartModal';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { DocsPage } from './pages/DocsPage';
import { ActivePage, FeatureTab, ComparePlatform } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedFeatureTab, setSelectedFeatureTab] = useState<FeatureTab>('pim-mdm');
  const [selectedComparePlatform, setSelectedComparePlatform] = useState<ComparePlatform>('bubble');
  const [isQuickstartOpen, setIsQuickstartOpen] = useState(false);

  // Sync window hash or simple history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'features') setActivePage('features');
      else if (hash === 'integrations') setActivePage('integrations');
      else if (hash === 'compare' || hash === 'vs/bubble') {
        setActivePage('compare');
        setSelectedComparePlatform('bubble');
      }
      else if (hash === 'docs' || hash === 'getting-started') setActivePage('docs');
      else if (hash === '' || hash === 'home') setActivePage('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-slate-200 flex flex-col font-sans selection:bg-[#7C3AED]/30 selection:text-white">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Whoobe",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Linux, macOS, Windows, Docker",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "The unified open-source platform combining PIM, DAM, Headless CMS, and a Full-CRUD API Gateway into a single TypeScript stack powered by PostgreSQL JSONB."
          })
        }}
      />

      {/* Global Top Bar Contract Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        selectedFeatureTab={selectedFeatureTab}
        setSelectedFeatureTab={setSelectedFeatureTab}
        selectedComparePlatform={selectedComparePlatform}
        setSelectedComparePlatform={setSelectedComparePlatform}
        onOpenQuickstart={() => setIsQuickstartOpen(true)}
      />

      {/* Page Routing */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handlePageChange}
            setSelectedFeatureTab={setSelectedFeatureTab}
            onOpenQuickstart={() => setIsQuickstartOpen(true)}
          />
        )}

        {activePage === 'features' && (
          <FeaturesPage
            selectedTab={selectedFeatureTab}
            setSelectedTab={setSelectedFeatureTab}
            onOpenQuickstart={() => setIsQuickstartOpen(true)}
          />
        )}

        {activePage === 'integrations' && (
          <IntegrationsPage />
        )}

        {activePage === 'compare' && (
          <ComparisonPage
            selectedPlatform={selectedComparePlatform}
            setSelectedPlatform={setSelectedComparePlatform}
            onOpenQuickstart={() => setIsQuickstartOpen(true)}
          />
        )}

        {activePage === 'docs' && (
          <DocsPage />
        )}
      </main>

      {/* Global Authoritative Footer */}
      <Footer
        setActivePage={handlePageChange}
        setSelectedFeatureTab={setSelectedFeatureTab}
        setSelectedComparePlatform={setSelectedComparePlatform}
        onOpenQuickstart={() => setIsQuickstartOpen(true)}
      />

      {/* Quickstart Deployment Modal */}
      <QuickstartModal
        isOpen={isQuickstartOpen}
        onClose={() => setIsQuickstartOpen(false)}
        setActivePage={handlePageChange}
      />
    </div>
  );
}
