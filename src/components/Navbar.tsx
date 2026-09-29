import React, { useState, useEffect, useRef } from 'react';
import { ActivePage, FeatureTab, ComparePlatform } from '../types';
import { Star, ChevronDown, Terminal, ExternalLink, Menu, X, ArrowRight, Layers, Cpu, Share2, Smartphone } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  selectedFeatureTab?: FeatureTab;
  setSelectedFeatureTab?: (tab: FeatureTab) => void;
  selectedComparePlatform?: ComparePlatform;
  setSelectedComparePlatform?: (platform: ComparePlatform) => void;
  onOpenQuickstart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  setSelectedFeatureTab,
  setSelectedComparePlatform,
  onOpenQuickstart,
}) => {
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [compareDropdownOpen, setCompareDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [githubStars, setGithubStars] = useState(4820);
  const [hasStarred, setHasStarred] = useState(false);

  const featuresRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesDropdownOpen(false);
      }
      if (compareRef.current && !compareRef.current.contains(event.target as Node)) {
        setCompareDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStarClick = () => {
    if (!hasStarred) {
      setGithubStars(prev => prev + 1);
      setHasStarred(true);
    } else {
      setGithubStars(prev => prev - 1);
      setHasStarred(false);
    }
  };

  const navigateToFeature = (tab: FeatureTab) => {
    if (setSelectedFeatureTab) setSelectedFeatureTab(tab);
    setActivePage('features');
    setFeaturesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCompare = (platform: ComparePlatform) => {
    if (setSelectedComparePlatform) setSelectedComparePlatform(platform);
    setActivePage('compare');
    setCompareDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F1115]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single element Brand Wordmark */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#0891B2] flex items-center justify-center p-0.5 shadow-sm group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">
              <div className="w-full h-full bg-[#0F1115] rounded-[6px] flex items-center justify-center">
                <span className="font-heading font-black text-white text-base tracking-tighter">W</span>
              </div>
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors">
              Whoobe
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 Nav Links with dropdown hubs */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          
          {/* Features Dropdown */}
          <div className="relative" ref={featuresRef}>
            <button
              onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
              onMouseEnter={() => setFeaturesDropdownOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors ${
                activePage === 'features' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Features</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuresDropdownOpen ? 'rotate-180 text-[#7C3AED]' : 'text-slate-400'}`} />
            </button>

            {featuresDropdownOpen && (
              <div 
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-[#1A1D24] border border-white/10 p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                  Platform Core
                </div>
                <button
                  onClick={() => navigateToFeature('pim-mdm')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                >
                  <div className="p-1.5 rounded-md bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED]/20 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#7C3AED] transition-colors">Dynamic PIM/MDM</div>
                    <div className="text-xs text-slate-400">Postgres JSONB runtime data classes</div>
                  </div>
                </button>
                <button
                  onClick={() => navigateToFeature('visual-builder')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                >
                  <div className="p-1.5 rounded-md bg-[#0891B2]/10 text-[#0891B2] group-hover:bg-[#0891B2]/20 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#0891B2] transition-colors">Visual Builder & AI Authoring</div>
                    <div className="text-xs text-slate-400">Drag & drop with recursive Zod layout trees</div>
                  </div>
                </button>
                <button
                  onClick={() => navigateToFeature('api-gateway')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                >
                  <div className="p-1.5 rounded-md bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED]/20 mt-0.5">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#7C3AED] transition-colors">Federated Full-CRUD Gateway</div>
                    <div className="text-xs text-slate-400">Auto-discovering zero-code REST proxy</div>
                  </div>
                </button>
                <button
                  onClick={() => navigateToFeature('mobile-factory')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                >
                  <div className="p-1.5 rounded-md bg-[#0891B2]/10 text-[#0891B2] group-hover:bg-[#0891B2]/20 mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#0891B2] transition-colors">Native Mobile Factory</div>
                    <div className="text-xs text-slate-400">Capacitor compiler & offline write queue</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Compare Dropdown */}
          <div className="relative" ref={compareRef}>
            <button
              onClick={() => setCompareDropdownOpen(!compareDropdownOpen)}
              onMouseEnter={() => setCompareDropdownOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors ${
                activePage === 'compare' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Compare</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${compareDropdownOpen ? 'rotate-180 text-[#7C3AED]' : 'text-slate-400'}`} />
            </button>

            {compareDropdownOpen && (
              <div 
                onMouseLeave={() => setCompareDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-[#1A1D24] border border-white/10 p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                  Strategic Comparisons
                </div>
                <button
                  onClick={() => navigateToCompare('bubble')}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                >
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#7C3AED]">Whoobe vs Bubble.com</div>
                    <div className="text-xs text-slate-400">Open source vs Workload tax</div>
                  </div>
                  <span className="text-[11px] text-[#7C3AED] font-semibold">Featured</span>
                </button>
                <button
                  onClick={() => navigateToCompare('pimcore')}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                >
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-slate-200">Whoobe vs Pimcore</div>
                    <div className="text-xs text-slate-400">Modern TS vs PHP/Symfony</div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Roadmap</span>
                </button>
                <button
                  onClick={() => navigateToCompare('contentful')}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-left transition-colors group"
                >
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-slate-200">Whoobe vs Contentful</div>
                    <div className="text-xs text-slate-400">Sovereign vs SaaS Lock-in</div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Roadmap</span>
                </button>
              </div>
            )}
          </div>

          {/* Connectors & Integrations */}
          <button
            onClick={() => { setActivePage('integrations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`px-3 py-2 rounded-md transition-colors ${
              activePage === 'integrations' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Connectors & Integrations
          </button>

          {/* Docs Guide */}
          <button
            onClick={() => { setActivePage('docs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`px-3 py-2 rounded-md transition-colors ${
              activePage === 'docs' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Docs
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* GitHub Star CTA */}
          <button
            onClick={handleStarClick}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-pointer ${
              hasStarred 
                ? 'bg-[#7C3AED]/20 border-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' 
                : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20'
            }`}
            title="Star Whoobe on GitHub"
          >
            <Star className={`w-3.5 h-3.5 ${hasStarred ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400'}`} />
            <span>Star on GitHub</span>
            <span className="font-mono text-slate-400 text-[11px] pl-1 border-l border-white/10">
              {githubStars.toLocaleString()}
            </span>
          </button>

          {/* Quickstart Deploy CTA */}
          <button
            onClick={onOpenQuickstart}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all cursor-pointer whitespace-nowrap"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Spin Up Locally</span>
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleStarClick}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-yellow-400 flex items-center gap-1"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-mono text-[11px] text-slate-300">{(githubStars / 1000).toFixed(1)}k</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#12151B] px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
              activePage === 'home' ? 'bg-[#7C3AED]/20 text-white' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Home
          </button>

          <div className="pt-2 pb-1 border-t border-white/5">
            <div className="text-xs font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">Features</div>
            <button
              onClick={() => navigateToFeature('pim-mdm')}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Dynamic PIM/MDM</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              onClick={() => navigateToFeature('visual-builder')}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Visual Builder & AI Authoring</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              onClick={() => navigateToFeature('api-gateway')}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Federated Full-CRUD Gateway</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              onClick={() => navigateToFeature('mobile-factory')}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Native Mobile Factory</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>

          <div className="pt-2 pb-1 border-t border-white/5">
            <div className="text-xs font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">Compare</div>
            <button
              onClick={() => navigateToCompare('bubble')}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Whoobe vs Bubble.com</span>
              <span className="text-[11px] text-[#7C3AED]">Deep-Dive</span>
            </button>
            <button
              onClick={() => navigateToCompare('pimcore')}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Whoobe vs Pimcore</span>
              <span className="text-[11px] text-slate-500">Roadmap</span>
            </button>
            <button
              onClick={() => navigateToCompare('contentful')}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Whoobe vs Contentful</span>
              <span className="text-[11px] text-slate-500">Roadmap</span>
            </button>
          </div>

          <button
            onClick={() => { setActivePage('integrations'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
              activePage === 'integrations' ? 'bg-[#7C3AED]/20 text-white' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Connectors & Integrations
          </button>

          <button
            onClick={() => { setActivePage('docs'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
              activePage === 'docs' ? 'bg-[#7C3AED]/20 text-white' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Docs & Quickstart
          </button>

          <div className="pt-2">
            <button
              onClick={() => { onOpenQuickstart(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#7C3AED] text-white"
            >
              <Terminal className="w-4 h-4" />
              <span>Spin Up Locally</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
