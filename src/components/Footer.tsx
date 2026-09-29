import React from 'react';
import { ActivePage, FeatureTab, ComparePlatform } from '../types';
import { Star, ExternalLink, Terminal, Shield, GitBranch } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  setSelectedFeatureTab: (tab: FeatureTab) => void;
  setSelectedComparePlatform: (p: ComparePlatform) => void;
  onOpenQuickstart: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  setSelectedFeatureTab,
  setSelectedComparePlatform,
  onOpenQuickstart,
}) => {
  return (
    <footer className="w-full bg-[#0A0C0F] border-t border-white/5 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#0891B2] flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#0F1115] rounded-[5px] flex items-center justify-center">
                  <span className="font-heading font-black text-white text-xs">W</span>
                </div>
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">Whoobe</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The unified, open-source platform combining PIM, DAM, Headless CMS, and a Full-CRUD API Gateway into a single TypeScript stack powered by PostgreSQL JSONB.
            </p>
            <div className="flex items-center gap-3 pt-2 font-mono text-[11px] text-slate-500">
              <span>MIT License</span>
              <span>·</span>
              <span>Turborepo Monorepo</span>
              <span>·</span>
              <span>Node.js 22 LTS</span>
            </div>
          </div>

          {/* Col 2: Features */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-heading">
              Platform
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { setSelectedFeatureTab('pim-mdm'); setActivePage('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Dynamic PIM/MDM
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setSelectedFeatureTab('visual-builder'); setActivePage('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Visual Builder & AI Authoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setSelectedFeatureTab('api-gateway'); setActivePage('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Federated Full-CRUD Gateway
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setSelectedFeatureTab('mobile-factory'); setActivePage('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Native Mobile Factory (Capacitor)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Integrations & Compare */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-heading">
              Compare & Connect
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { setSelectedComparePlatform('bubble'); setActivePage('compare'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Whoobe vs Bubble.com
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setSelectedComparePlatform('pimcore'); setActivePage('compare'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Whoobe vs Pimcore
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setSelectedComparePlatform('contentful'); setActivePage('compare'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Whoobe vs Contentful
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('integrations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Connectors (HubSpot, Brevo, DAM)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-heading">
              Developers
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { setActivePage('docs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Sandbox Quickstart Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuickstart}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Terminal className="w-3 h-3 text-[#7C3AED]" />
                  <span>Docker Setup Snippet</span>
                </button>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © 2026 Whoobe Project. Released under the permissive MIT Open Source License.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Built with PostgreSQL 16</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Capacitor 6</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
