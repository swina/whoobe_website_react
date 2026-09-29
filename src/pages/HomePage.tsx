import React from 'react';
import { Terminal, ArrowRight, Star, ExternalLink, ShieldCheck, Database, Layers, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { IsometricCoreVisual } from '../components/IsometricCoreVisual';
import { PillarsSection } from '../components/PillarsSection';
import { FederatedGatewayDemo } from '../components/FederatedGatewayDemo';
import { AudienceMatrix } from '../components/AudienceMatrix';
import { ComparisonTable } from '../components/ComparisonTable';
import { MetricsSection } from '../components/MetricsSection';
import { ActivePage, FeatureTab } from '../types';

interface HomePageProps {
  setActivePage: (page: ActivePage) => void;
  setSelectedFeatureTab: (tab: FeatureTab) => void;
  onOpenQuickstart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  setSelectedFeatureTab,
  onOpenQuickstart,
}) => {
  return (
    <div className="w-full">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#7C3AED]/10 via-[#0891B2]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span>Version 2.1.0 Enterprise Stack</span>
              <span className="text-slate-500">·</span>
              <span className="text-[#38BDF8]">Open-Source MIT</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-heading tracking-tight text-balance leading-[1.08]">
              Unify your stack.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-balance">
              Don't ignore the cost of CMS fragmentation. Deploy Whoobe: the unified, open-source platform combining PIM, DAM, Headless CMS, and a Full-CRUD API Gateway into a single TypeScript stack powered by PostgreSQL JSONB.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenQuickstart}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all cursor-pointer group"
              >
                <Terminal className="w-4 h-4 text-cyan-200" />
                <span>Spin Up Locally</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all cursor-pointer"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>View on GitHub</span>
                <span className="font-mono text-xs text-slate-400 pl-1 border-l border-white/10">4,820</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
              </a>
            </div>

            {/* Micro Trust Proof */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                PostgreSQL 16 JSONB Native
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Cloud Workload Fees
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Self-Hosted Docker Stack
              </span>
            </div>

          </div>

          {/* Marquee Visual Blueprint Asset */}
          <div className="w-full">
            <IsometricCoreVisual />
          </div>

        </div>
      </section>

      {/* ===================== SECTION 2: 4 CORE PILLARS ===================== */}
      <PillarsSection />

      {/* ===================== SECTION 3: THE KILLER FEATURE FOCUS ===================== */}
      <section className="py-20 border-b border-white/5 bg-[#0C0E13] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C3AED] font-mono mb-3">
              <span>The Killer Feature</span>
              <span>·</span>
              <span>Federated Full-CRUD Gateway</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight text-balance">
              Configuration, Not Custom Code, For Your Integrations.
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Point Whoobe to any remote REST endpoint or OpenAPI/Swagger specification. The gateway automatically discovers the response layout, creates application-level Zod validation guards, and injects the live keys directly into the visual canvas sidebar.
            </p>
          </div>

          {/* Interactive 3-Step Playground */}
          <FederatedGatewayDemo />

        </div>
      </section>

      {/* ===================== SECTION 4: AUDIENCE MATRIX ===================== */}
      <AudienceMatrix />

      {/* ===================== SECTION 5: GLOBAL COMPARISON MATRIX ===================== */}
      <ComparisonTable />

      {/* ===================== SECTION 6: METRICS & DOCKER QUICKSTART ===================== */}
      <MetricsSection onOpenQuickstart={onOpenQuickstart} />

    </div>
  );
};
