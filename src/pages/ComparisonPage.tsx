import React, { useState } from 'react';
import { ComparePlatform } from '../types';
import { ShieldAlert, Check, X, ShieldCheck, Database, Lock, Smartphone, DollarSign, ArrowRight, ExternalLink } from 'lucide-react';

interface ComparisonPageProps {
  selectedPlatform: ComparePlatform;
  setSelectedPlatform: (p: ComparePlatform) => void;
  onOpenQuickstart: () => void;
}

export const ComparisonPage: React.FC<ComparisonPageProps> = ({
  selectedPlatform,
  setSelectedPlatform,
  onOpenQuickstart,
}) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C3AED] font-mono mb-3">
            <span>Competitive Matrix</span>
            <span>·</span>
            <span>Architectural Freedom</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Whoobe vs Proprietary Alternatives
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Break free from closed-source silos and variable success taxes. Understand why modern engineering teams choose open TypeScript architecture over proprietary visual monoliths.
          </p>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
          <button
            onClick={() => setSelectedPlatform('bubble')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedPlatform === 'bubble'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <span>Whoobe vs Bubble.com</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded font-mono">Deep-Dive</span>
          </button>

          <button
            onClick={() => setSelectedPlatform('pimcore')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedPlatform === 'pimcore'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <span>Whoobe vs Pimcore</span>
            <span className="text-[10px] text-slate-500 font-mono">Roadmap</span>
          </button>

          <button
            onClick={() => setSelectedPlatform('contentful')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedPlatform === 'contentful'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <span>Whoobe vs Contentful</span>
            <span className="text-[10px] text-slate-500 font-mono">Roadmap</span>
          </button>
        </div>

        {/* ================= WHOOBE VS BUBBLE.COM ================= */}
        {selectedPlatform === 'bubble' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            
            {/* Section 1: The Core Conflict Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-[#171A24] via-[#1B1E29] to-[#171A24] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#7C3AED]/20 text-[#A78BFA] text-xs font-mono mb-4 border border-[#7C3AED]/30">
                  <span>The Core Conflict</span>
                  <span>·</span>
                  <span>SaaS Prison vs Open Freedom</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight leading-snug">
                  Visual orchestration on top of standard software engineering tools.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Bubble introduced the power of visual application delivery, but coupled it with extreme platform lock-in, proprietary cloud requirements, and unpredictable variable pricing models based on operational workloads. <strong>Whoobe breaks this lock-in by delivering visual orchestration on top of standard software engineering tools.</strong>
                </p>
              </div>
            </div>

            {/* Section 2: Deep Architectural Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Feature 1: Data Management */}
              <div className="rounded-2xl bg-[#12151B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">Data Management & Freedom</h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-slate-300">
                      <div className="flex items-center gap-1.5 font-bold text-red-400 mb-1">
                        <X className="w-4 h-4 shrink-0" />
                        <span>Bubble: Proprietary Black Box</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Black-box database structures. You cannot run raw SQL optimizations, you cannot optimize schemas directly, and you are tied to their closed infrastructure.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-slate-200">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>Whoobe: Standard PostgreSQL 16</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Standard <strong>PostgreSQL 16</strong>. Data Classes translate directly to JSONB with GIN indexing. You retain complete database query freedom, backup control, and storage layout transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Security & Credentials */}
              <div className="rounded-2xl bg-[#12151B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">Security & Credential Isolation</h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-slate-300">
                      <div className="flex items-center gap-1.5 font-bold text-red-400 mb-1">
                        <X className="w-4 h-4 shrink-0" />
                        <span>Bubble: Client Plugin Exposure</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Integration tokens and API keys are often handled inside public-facing plugins or accessible within the application editor scope, creating audit friction. Even when masked in the UI, raw credentials cross the wire and transit the network to the browser, leaving them vulnerable to exposure in DevTools, browser extensions, or front-end error-tracking software.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-slate-200">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>Whoobe: Zero-Round-Trip Architecture</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Absolute server-side runtime execution with zero client-side credential exposure. All credentials are encrypted via AES-256-GCM at rest and handled strictly by the server-side gateway proxy.To eliminate network leaks, backoffice admin routes (GET/POST/PATCH on gateway endpoints) automatically filter data through redactEndpoint(), completely stripping the authConfig object before responding. Sensitive credentials never cross the network to the browser, ensuring that visual developers, browser extensions, and error-tracking tools (like Sentry) never lay eyes on a raw corporate token.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: Channel Portability */}
              <div className="rounded-2xl bg-[#12151B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">Channel Portability & Native Mobile</h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-slate-300">
                      <div className="flex items-center gap-1.5 font-bold text-red-400 mb-1">
                        <X className="w-4 h-4 shrink-0" />
                        <span>Bubble: Web-Only Lock-in</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Built mainly for web layouts. Porting experiences onto proper native app containers requires expensive third-party wrappers (like BDK or Jasonette) or complete application rebuilds.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-slate-200">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>Whoobe: Native Capacitor Compiler</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Multi-channel by definition. The same structural JSON engine drives public SSR websites via our headless SDK and triggers native <strong>.apk / .ipa</strong> builds through the integrated <strong>Capacitor generator</strong> with direct hardware access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Pricing Model */}
              <div className="rounded-2xl bg-[#12151B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">Monopolistic Pricing vs Free Self-Hosting</h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 text-slate-300">
                      <div className="flex items-center gap-1.5 font-bold text-red-400 mb-1">
                        <X className="w-4 h-4 shrink-0" />
                        <span>Bubble: Workload Units (WU) Tax</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Prezzi scalabili basati sul carico di lavoro (Workload Metrics). Più la tua applicazione ha successo, più la tua fattura mensile lievita in modo imprevedibile.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-slate-200">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>Whoobe: 100% Free MIT Software</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong>100% Free Software under the MIT License</strong>. Self-host the ecosystem indefinitely on your own infrastructure (AWS, DigitalOcean, or private hardware). Your software scales based on your server capacity, with zero success taxes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Callout */}
            <div className="text-center pt-4">
              <button
                onClick={onOpenQuickstart}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                <span>Deploy Whoobe Locally Under MIT License</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ================= WHOOBE VS PIMCORE ================= */}
        {selectedPlatform === 'pimcore' && (
          <div className="rounded-2xl bg-[#12151B] border border-white/10 p-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Ecosystem Roadmap</span>
                <h3 className="text-2xl font-bold text-white font-heading mt-1">Whoobe vs Pimcore</h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 text-cyan-400 border border-white/10">
                Migration CLI Included
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Pimcore has historically been the open-source enterprise PIM staple, but it carries the heavy footprint of legacy PHP, Symfony, and complex MySQL relational mapping. Whoobe replaces this with a modern, lightweight TypeScript + PostgreSQL JSONB architecture that requires 80% less memory and zero Symfony runtime overhead.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-bold">Language Stack</div>
                <div className="text-sm font-semibold text-white">100% TypeScript</div>
                <div className="text-xs text-slate-400">vs PHP 8.2 / Symfony 6 / Twig templates</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 space-y-1">
                <div className="text-xs font-mono text-[#A78BFA] font-bold">Database Storage</div>
                <div className="text-sm font-semibold text-white">PostgreSQL 16 JSONB</div>
                <div className="text-xs text-slate-400">vs complex relational MySQL entity tables</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 space-y-1">
                <div className="text-xs font-mono text-emerald-400 font-bold">Search Engine</div>
                <div className="text-sm font-semibold text-white">Built-in pg_trgm</div>
                <div className="text-xs text-slate-400">vs mandatory external Elasticsearch cluster</div>
              </div>
            </div>
          </div>
        )}

        {/* ================= WHOOBE VS CONTENTFUL ================= */}
        {selectedPlatform === 'contentful' && (
          <div className="rounded-2xl bg-[#12151B] border border-white/10 p-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Ecosystem Roadmap</span>
                <h3 className="text-2xl font-bold text-white font-heading mt-1">Whoobe vs Contentful</h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 text-purple-400 border border-white/10">
                Sovereignty Focus
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Contentful offers a pure headless API but lacks a native visual drag-and-drop authoring canvas, has no built-in API gateway for remote third-party data mutation, and locks your enterprise into astronomical monthly subscription tiers as record volumes scale. Whoobe provides both a headless API and an intuitive visual canvas with zero record limits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-bold">Visual Authoring</div>
                <div className="text-sm font-semibold text-white">Integrated Drag & Drop</div>
                <div className="text-xs text-slate-400">vs form fields only (Studio add-on costs extra)</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 space-y-1">
                <div className="text-xs font-mono text-[#A78BFA] font-bold">API Gateway</div>
                <div className="text-sm font-semibold text-white">Built-in Full-CRUD</div>
                <div className="text-xs text-slate-400">vs passive webhooks requiring third-party Zapier/lambda</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0F1115] border border-white/5 space-y-1">
                <div className="text-xs font-mono text-emerald-400 font-bold">Data Privacy</div>
                <div className="text-sm font-semibold text-white">Self-Hosted Sovereign</div>
                <div className="text-xs text-slate-400">vs US/EU multi-tenant cloud storage</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
