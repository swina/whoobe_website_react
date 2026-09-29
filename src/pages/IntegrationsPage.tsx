import React, { useState } from 'react';
import { Share2, ShieldCheck, CheckCircle2, ArrowRight, RefreshCw, Send, Cloud, HardDrive, Lock, ExternalLink, Zap } from 'lucide-react';

export const IntegrationsPage: React.FC = () => {
  const [activeCase, setActiveCase] = useState<'hubspot' | 'brevo' | 'dam'>('hubspot');
  
  // Interactive state for HubSpot
  const [leadForm, setLeadForm] = useState({ name: 'Elena Rostova', email: 'elena@enterprise-tech.de', company: 'Rostova GmbH' });
  const [hubspotStatus, setHubspotStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Interactive state for Brevo
  const [brevoSegment, setBrevoSegment] = useState('Enterprise VIP Developers');
  const [brevoStatus, setBrevoStatus] = useState<'idle' | 'pushing' | 'published'>('idle');

  // Interactive state for Hybrid DAM
  const [damTarget, setDamTarget] = useState<'minio' | 'cloudinary'>('minio');
  const [syncProgress, setSyncProgress] = useState(100);

  const handleHubSpotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHubspotStatus('submitting');
    setTimeout(() => {
      setHubspotStatus('success');
    }, 600);
  };

  const handleBrevoPush = () => {
    setBrevoStatus('pushing');
    setTimeout(() => {
      setBrevoStatus('published');
    }, 700);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0891B2] font-mono mb-3">
            <span>Declarative Ecosystem</span>
            <span>·</span>
            <span>Connectors & Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Connectors & Integrations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whoobe treats external endpoints as first-class citizens. By housing connectors as declarative schemas inside <code className="text-cyan-300">@whoobe-cms/connectors</code>, integrations are completely decoupled from core execution logic.
          </p>
        </div>

        {/* Overview Callout Card */}
        <div className="rounded-2xl bg-gradient-to-r from-[#171A24] via-[#1C1F2B] to-[#171A24] border border-white/10 p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
                <span>Zero Hardcoded API Clients · Declarative Schema Isolation</span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Decoupled Execution Architecture
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connectors are configured via standardized JSON definitions. Authentication handshakes, token rotation, rate-limiting, and payload sanitization occur strictly in the gateway runtime. Frontend developers never manage raw SDK secrets.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg">
                Production Validated
              </span>
            </div>
          </div>
        </div>

        {/* Case Studies Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setActiveCase('hubspot')}
            className={`p-5 rounded-xl text-left border transition-all ${
              activeCase === 'hubspot'
                ? 'bg-[#181B24] border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.25)]'
                : 'bg-[#12151B] border-white/5 hover:border-white/10 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Case Study A</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Active</span>
            </div>
            <h4 className="text-base font-bold text-white font-heading">HubSpot CRM</h4>
            <p className="text-xs text-slate-400 mt-1">Full-CRUD GET/POST proxy & OAuth2 token refresh lifecycle.</p>
          </button>

          <button
            onClick={() => setActiveCase('brevo')}
            className={`p-5 rounded-xl text-left border transition-all ${
              activeCase === 'brevo'
                ? 'bg-[#181B24] border-[#0891B2] shadow-[0_0_20px_rgba(8,145,178,0.25)]'
                : 'bg-[#12151B] border-white/5 hover:border-white/10 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Case Study B</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">Preset Ready</span>
            </div>
            <h4 className="text-base font-bold text-white font-heading">Brevo Marketing</h4>
            <p className="text-xs text-slate-400 mt-1">1-click Visual-to-Campaign push for responsive newsletter drafts.</p>
          </button>

          <button
            onClick={() => setActiveCase('dam')}
            className={`p-5 rounded-xl text-left border transition-all ${
              activeCase === 'dam'
                ? 'bg-[#181B24] border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                : 'bg-[#12151B] border-white/5 hover:border-white/10 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Case Study C</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Hybrid DAM</span>
            </div>
            <h4 className="text-base font-bold text-white font-heading">Hybrid Cloud DAM</h4>
            <p className="text-xs text-slate-400 mt-1">Private MinIO S3 master records + automated Cloudinary CDN switch.</p>
          </button>
        </div>

        {/* Case Study Details Area */}
        <div className="rounded-2xl bg-[#12151B] border border-white/10 p-6 sm:p-8">
          
          {/* CASE A: HUBSPOT */}
          {activeCase === 'hubspot' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <span>GET / POST Validation Pipeline</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    HubSpot CRM Integration Flow
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    The gateway handles background token lifecycles and OAuth2 refreshes. Public input blocks created inside the visual builder map directly to HubSpot contact creation mutations securely via server-side proxying.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-[#0F1115] border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 font-mono">1. Automated OAuth2 Lifecycle</span>
                    <p className="text-slate-300">Refresh tokens rotate in background workers; expired access tokens never block frontends.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#0F1115] border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 font-mono">2. Strict Inbound Sanitization</span>
                    <p className="text-slate-300">Zod guards validate form values before transmitting payloads to HubSpot CRM endpoints.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#0F1115] border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 font-mono">3. Rate Limiting & Backoff</span>
                    <p className="text-slate-300">Protects HubSpot tenant quota limits with token-bucket throttle policies.</p>
                  </div>
                </div>
              </div>

              {/* Interactive Simulation */}
              <div className="lg:col-span-6 bg-[#0B0D11] border border-white/10 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="text-xs font-mono text-white font-semibold">Live Proxy Mutation Tester</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Server-Side AES-256</span>
                </div>

                <form onSubmit={handleHubSpotSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="w-full bg-[#1A1D24] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Corporate Email</label>
                    <input
                      type="email"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      className="w-full bg-[#1A1D24] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Company</label>
                    <input
                      type="text"
                      value={leadForm.company}
                      onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                      className="w-full bg-[#1A1D24] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={hubspotStatus === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {hubspotStatus === 'submitting' ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Proxying to HubSpot CRM...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Lead via Whoobe Proxy</span>
                      </>
                    )}
                  </button>
                </form>

                {hubspotStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs font-mono text-emerald-300 space-y-1 animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>HTTP 201 Created (HubSpot Object ID: #994821)</span>
                    </div>
                    <div className="text-[11px] text-emerald-400/80">
                      Zod validated · Encrypted header dispatched · Zero public tokens exposed
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CASE B: BREVO */}
          {activeCase === 'brevo' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0891B2] mb-1">
                    <span>Declarative Preset: apps/gateway/presets/brevo.json</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Brevo Marketing Automation
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Content creators can select any reusable snippet or structural block inside the dashboard and push it directly as a fully styled email campaign draft onto Brevo list segments with a single click.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-[#0F1115] border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 font-mono">MJML / HTML Inline Synthesis</span>
                    <p className="text-slate-300">The visual layout tree converts into email-client safe table layouts compatible with Outlook and Gmail.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#0F1115] border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 font-mono">Dynamic Personalization Tokens</span>
                    <p className="text-slate-300">Injects Brevo attributes like <code className="text-cyan-300">&#123;&#123; contact.FIRSTNAME &#125;&#125;</code> right from the canvas.</p>
                  </div>
                </div>
              </div>

              {/* Interactive Brevo Push */}
              <div className="lg:col-span-6 bg-[#0B0D11] border border-white/10 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-white font-semibold">1-Click Visual-to-Campaign Push</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">brevo.json active</span>
                </div>

                <div className="p-3 rounded-lg bg-[#161A22] border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-white">Selected Canvas Layout Block:</div>
                  <div className="text-xs text-slate-300 font-mono bg-[#0F1115] p-2.5 rounded border border-white/5">
                    📦 Promotional_Product_Grid_V2 (Zod JSON Tree, 3 items)
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Target Brevo Contact Segment</label>
                  <select
                    value={brevoSegment}
                    onChange={(e) => setBrevoSegment(e.target.value)}
                    className="w-full bg-[#1A1D24] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0891B2]"
                  >
                    <option value="Enterprise VIP Developers">Enterprise VIP Developers (14,200 contacts)</option>
                    <option value="Self-Host Newsletter Subscribers">Self-Host Newsletter Subscribers (28,500 contacts)</option>
                    <option value="Pimcore Migration Inquiries">Pimcore Migration Inquiries (1,840 contacts)</option>
                  </select>
                </div>

                <button
                  onClick={handleBrevoPush}
                  disabled={brevoStatus === 'pushing'}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0891B2] hover:bg-[#0E7490] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {brevoStatus === 'pushing' ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Synthesizing Email Draft & Pushing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Push Campaign Draft to Brevo</span>
                    </>
                  )}
                </button>

                {brevoStatus === 'published' && (
                  <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-300 space-y-1 animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Draft Created in Brevo (Campaign ID: #brv_88192)</span>
                    </div>
                    <div className="text-[11px] text-cyan-300/80">
                      Segment: {brevoSegment} · Layout synced with zero template drift
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CASE C: HYBRID DAM */}
          {activeCase === 'dam' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                    <span>On-Premise Vault vs Global CDN</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Hybrid Cloud DAM Orchestration
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Keep your backend completely invisible inside a private cloud or local environment using <strong>MinIO / local S3 storage</strong> for private master records. Upon publication, an automated API switch pushes targeted web-ready image media variants directly onto <strong>Cloudinary CDN</strong> nodes.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-[#0F1115] border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 font-mono">The Edge Switch</span>
                    <p className="text-slate-300">
                      The headless SDK resolves image locations dynamically based on your delivery selection (Local Storage vs Global Edge CDN), keeping your internal network locked while keeping global rendering instant.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#0F1115] border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 font-mono">Sharp Media Mutation Worker</span>
                    <p className="text-slate-300">
                      Generates AVIF and WebP responsive sizes on decoupled workers so image transforms never starve the core CRUD API.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive DAM Switcher */}
              <div className="lg:col-span-6 bg-[#0B0D11] border border-white/10 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-white font-semibold">Live Delivery Location Switch</span>
                  <span className="text-[10px] font-mono text-purple-300">Auto URL Resolution</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDamTarget('minio')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      damTarget === 'minio'
                        ? 'bg-[#1E1B4B]/40 border-[#7C3AED] text-white'
                        : 'bg-[#161A22] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <HardDrive className="w-4 h-4 text-[#A78BFA]" />
                      <span className="text-xs font-bold">Private MinIO S3</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Internal network only</p>
                  </button>

                  <button
                    onClick={() => setDamTarget('cloudinary')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      damTarget === 'cloudinary'
                        ? 'bg-[#083344]/40 border-cyan-400 text-white'
                        : 'bg-[#161A22] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Cloud className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold">Cloudinary Edge CDN</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Global edge distribution</p>
                  </button>
                </div>

                <div className="p-3.5 rounded-lg bg-[#161A22] border border-white/5 space-y-2">
                  <div className="text-[11px] text-slate-400 font-mono">Resolved Image URI (via SDK):</div>
                  <div className="text-xs font-mono text-cyan-300 bg-[#0F1115] p-2.5 rounded overflow-x-auto">
                    {damTarget === 'minio'
                      ? 'http://minio.internal:9000/whoobe-cms/masters/hero_4k_raw.tiff'
                      : 'https://res.cloudinary.com/whoobe/image/upload/f_auto,q_auto,w_1200/hero_web.avif'}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span>Latency: {damTarget === 'minio' ? '0.4ms (Intranet)' : '18ms (Edge CDN 320 PoPs)'}</span>
                    <span>Access: {damTarget === 'minio' ? 'Locked' : 'Public Fast Cache'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
