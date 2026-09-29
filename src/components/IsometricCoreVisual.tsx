import React, { useState } from 'react';
import { Database, ShieldCheck, ArrowRight, Layers, Smartphone, Globe, Cpu, RefreshCw, Key, CheckCircle2 } from 'lucide-react';

export const IsometricCoreVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'postgres' | 'gateway' | 'zod' | 'mobile' | 'web'>('postgres');
  const [simulatePulse, setSimulatePulse] = useState(true);

  const nodeInfo = {
    postgres: {
      title: 'PostgreSQL 16 Engine (JSONB + GIN)',
      desc: 'Centralized schema storage. Runtime Data Classes map into PostgreSQL JSONB with built-in tsvector and pg_trgm trigram fuzzy search. Zero runtime SQL table migrations, zero schema corruption.',
      tag: 'Core Sovereign DB',
      metrics: '100% ACID · Single Monorepo',
    },
    gateway: {
      title: 'Federated Full-CRUD Gateway',
      desc: 'Connectors run as declarative schemas. Background OAuth2 token lifecycles, AES-256-GCM encrypted credentials at rest, and zero-trust proxying of HubSpot, Brevo, and OpenAPI endpoints.',
      tag: 'Declarative Orchestration',
      metrics: 'AES-256-GCM · Server-Side Proxy',
    },
    zod: {
      title: 'Recursive Zod Layout Engine',
      desc: 'Transforms raw database records into strongly-typed, recursive JSON UI layout trees consumable by React, Next.js, Nuxt, and Svelte 5 native SDKs with deterministic SSR/ISR hydration.',
      tag: 'Multi-Framework Tree',
      metrics: 'Pure TypeScript · Zero PHP',
    },
    mobile: {
      title: 'Capacitor Native Factory',
      desc: 'Compiles the identical JSON layout asset tree directly into native Android (.apk) and iOS (.ipa) application packages with an offline write queue and device hardware bridge.',
      tag: 'Native Binary Pipeline',
      metrics: 'Capacitor 6 · Offline Queue',
    },
    web: {
      title: 'Headless Multi-Framework SDKs',
      desc: 'Client adapters that render clean, accessible web components deterministically on React 19, Next.js App Router, Vue 3, Nuxt 3, and Svelte 5.',
      tag: 'Hydrated Frontends',
      metrics: 'SSR / ISR Ready · Edge CDN',
    },
  };

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#12151B] to-[#0B0D11] border border-white/10 p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#0891B2]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
            Architectural Pipeline Simulator
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline">· Click any node to inspect data flow</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSimulatePulse(!simulatePulse)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${simulatePulse ? 'text-cyan-400 animate-spin' : 'text-slate-500'}`} style={{ animationDuration: '4s' }} />
            <span>{simulatePulse ? 'Live Conduits: Active' : 'Conduits: Paused'}</span>
          </button>
        </div>
      </div>

      {/* Isometric SVG Blueprint Canvas */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[460px] flex items-center justify-center">
        <svg viewBox="0 0 900 520" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradients */}
            <linearGradient id="violetCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>

            <linearGradient id="streamPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
            </linearGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid Background Lines */}
          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
            <line x1="50" y1="260" x2="850" y2="260" />
            <line x1="450" y1="50" x2="450" y2="470" />
            <line x1="150" y1="90" x2="750" y2="430" />
            <line x1="750" y1="90" x2="150" y2="430" />
          </g>

          {/* Connecting Data Conduits */}
          {/* Stream 1: Inbound External Connectors to Gateway */}
          <path
            d="M 120,150 C 230,150 250,220 320,240"
            fill="none"
            stroke={simulatePulse ? "url(#streamPulseGrad)" : "rgba(124,58,237,0.3)"}
            strokeWidth="3"
            strokeDasharray={simulatePulse ? "6,4" : "none"}
            className={simulatePulse ? "animate-pulse" : ""}
          />

          {/* Stream 2: Private DAM (MinIO) to Core */}
          <path
            d="M 120,370 C 230,370 250,300 340,280"
            fill="none"
            stroke={simulatePulse ? "url(#streamPulseGrad)" : "rgba(8,145,178,0.3)"}
            strokeWidth="3"
            strokeDasharray={simulatePulse ? "6,4" : "none"}
          />

          {/* Stream 3: Gateway to Postgres Core */}
          <path
            d="M 380,240 L 450,260"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="3"
          />

          {/* Stream 4: Postgres Core to Zod Synthesizer */}
          <path
            d="M 450,260 L 580,260"
            fill="none"
            stroke="url(#violetCyanGrad)"
            strokeWidth="4"
          />

          {/* Stream 5: Zod Synthesizer to Web Frontends */}
          <path
            d="M 640,240 C 700,220 740,160 800,160"
            fill="none"
            stroke={simulatePulse ? "url(#streamPulseGrad)" : "rgba(8,145,178,0.4)"}
            strokeWidth="3"
            strokeDasharray={simulatePulse ? "6,4" : "none"}
          />

          {/* Stream 6: Zod Synthesizer to Mobile Capacitor */}
          <path
            d="M 640,280 C 700,300 740,360 800,360"
            fill="none"
            stroke={simulatePulse ? "url(#streamPulseGrad)" : "rgba(124,58,237,0.4)"}
            strokeWidth="3"
            strokeDasharray={simulatePulse ? "6,4" : "none"}
          />

          {/* --- INBOUND NODES (LEFT) --- */}
          {/* Node: Remote APIs (HubSpot, Brevo, REST) */}
          <g transform="translate(60, 110)" className="cursor-pointer" onClick={() => setActiveNode('gateway')}>
            <rect width="130" height="70" rx="10" fill="#1A1D24" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <text x="65" y="28" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="monospace">REMOTE APIS</text>
            <text x="65" y="46" fill="#F8FAFC" fontSize="12" fontWeight="600" textAnchor="middle">HubSpot & Brevo</text>
            <text x="65" y="60" fill="#38BDF8" fontSize="9" textAnchor="middle">REST / OpenAPI</text>
          </g>

          {/* Node: Storage (MinIO / Cloudinary) */}
          <g transform="translate(60, 330)" className="cursor-pointer" onClick={() => setActiveNode('gateway')}>
            <rect width="130" height="70" rx="10" fill="#1A1D24" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <text x="65" y="28" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="monospace">HYBRID DAM</text>
            <text x="65" y="46" fill="#F8FAFC" fontSize="12" fontWeight="600" textAnchor="middle">MinIO + S3 Vault</text>
            <text x="65" y="60" fill="#A78BFA" fontSize="9" textAnchor="middle">Cloudinary Edge CDN</text>
          </g>

          {/* --- MIDDLE ENGINE NODES --- */}
          {/* Node: Federated Gateway Proxy */}
          <g
            transform="translate(290, 205)"
            className="cursor-pointer transition-all"
            onClick={() => setActiveNode('gateway')}
          >
            <rect
              width="110"
              height="80"
              rx="12"
              fill={activeNode === 'gateway' ? '#1E1B4B' : '#171922'}
              stroke={activeNode === 'gateway' ? '#7C3AED' : 'rgba(124,58,237,0.4)'}
              strokeWidth={activeNode === 'gateway' ? '2.5' : '1.5'}
              filter={activeNode === 'gateway' ? 'url(#neonGlow)' : undefined}
            />
            <circle cx="55" cy="26" r="10" fill="#7C3AED" fillOpacity="0.2" stroke="#7C3AED" strokeWidth="1.5" />
            <text x="55" y="30" fill="#C4B5FD" fontSize="11" textAnchor="middle" fontWeight="bold">⚡</text>
            <text x="55" y="52" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle">API Gateway</text>
            <text x="55" y="68" fill="#A5B4FC" fontSize="9" textAnchor="middle" fontFamily="monospace">AES-256-GCM</text>
          </g>

          {/* CENTRAL CORE NODE: PostgreSQL 16 JSONB */}
          <g
            transform="translate(400, 200)"
            className="cursor-pointer transition-all"
            onClick={() => setActiveNode('postgres')}
          >
            {/* Hexagonal / Rounded Isometric Core Pod */}
            <circle
              cx="50"
              cy="60"
              r="62"
              fill="rgba(124,58,237,0.08)"
              stroke="#7C3AED"
              strokeWidth="1"
              strokeDasharray="4,4"
              className={simulatePulse ? "animate-spin" : ""}
              style={{ transformOrigin: '50px 60px', animationDuration: '24s' }}
            />
            <rect
              x="-2"
              y="10"
              width="104"
              height="100"
              rx="18"
              fill={activeNode === 'postgres' ? '#1F1A38' : '#161922'}
              stroke={activeNode === 'postgres' ? '#7C3AED' : 'rgba(255,255,255,0.2)'}
              strokeWidth={activeNode === 'postgres' ? '2.5' : '1.5'}
              filter={activeNode === 'postgres' ? 'url(#neonGlow)' : undefined}
            />
            <rect x="18" y="24" width="68" height="24" rx="6" fill="#7C3AED" fillOpacity="0.25" stroke="#7C3AED" strokeWidth="1" />
            <text x="52" y="40" fill="#E9D5FF" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="monospace">POSTGRES 16</text>
            <text x="52" y="66" fill="#FFFFFF" fontSize="13" fontWeight="800" textAnchor="middle">JSONB Core</text>
            <text x="52" y="82" fill="#38BDF8" fontSize="10" textAnchor="middle" fontFamily="monospace">GIN + Trigram</text>
            <text x="52" y="98" fill="#94A3B8" fontSize="8" textAnchor="middle">No Schema Lock</text>
          </g>

          {/* Node: Recursive Zod Layout Synthesizer */}
          <g
            transform="translate(560, 205)"
            className="cursor-pointer transition-all"
            onClick={() => setActiveNode('zod')}
          >
            <rect
              width="110"
              height="80"
              rx="12"
              fill={activeNode === 'zod' ? '#083344' : '#171922'}
              stroke={activeNode === 'zod' ? '#0891B2' : 'rgba(8,145,178,0.4)'}
              strokeWidth={activeNode === 'zod' ? '2.5' : '1.5'}
              filter={activeNode === 'zod' ? 'url(#neonGlow)' : undefined}
            />
            <circle cx="55" cy="26" r="10" fill="#0891B2" fillOpacity="0.2" stroke="#0891B2" strokeWidth="1.5" />
            <text x="55" y="30" fill="#67E8F9" fontSize="11" textAnchor="middle" fontWeight="bold">💎</text>
            <text x="55" y="52" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle">Zod Trees</text>
            <text x="55" y="68" fill="#38BDF8" fontSize="9" textAnchor="middle" fontFamily="monospace">Schema Validated</text>
          </g>

          {/* --- OUTBOUND CHANNELS (RIGHT) --- */}
          {/* Node: Headless Web SSR Frontends */}
          <g transform="translate(740, 115)" className="cursor-pointer" onClick={() => setActiveNode('web')}>
            <rect
              width="135"
              height="75"
              rx="10"
              fill={activeNode === 'web' ? '#0E2E3B' : '#1A1D24'}
              stroke={activeNode === 'web' ? '#0891B2' : 'rgba(255,255,255,0.12)'}
              strokeWidth="1.5"
            />
            <text x="67" y="26" fill="#38BDF8" fontSize="10" textAnchor="middle" fontFamily="monospace">HEADLESS SDK</text>
            <text x="67" y="44" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">React 19 & Next.js</text>
            <text x="67" y="60" fill="#94A3B8" fontSize="10" textAnchor="middle">Vue 3 · Nuxt · Svelte 5</text>
          </g>

          {/* Node: Capacitor Native Mobile Factory */}
          <g transform="translate(740, 325)" className="cursor-pointer" onClick={() => setActiveNode('mobile')}>
            <rect
              width="135"
              height="75"
              rx="10"
              fill={activeNode === 'mobile' ? '#2A184D' : '#1A1D24'}
              stroke={activeNode === 'mobile' ? '#7C3AED' : 'rgba(255,255,255,0.12)'}
              strokeWidth="1.5"
            />
            <text x="67" y="26" fill="#A78BFA" fontSize="10" textAnchor="middle" fontFamily="monospace">CAPACITOR FACTORY</text>
            <text x="67" y="44" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">Native iOS & Android</text>
            <text x="67" y="60" fill="#38BDF8" fontSize="10" textAnchor="middle">Offline Write Queue</text>
          </g>
        </svg>
      </div>

      {/* Selected Node Details Card */}
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#161A22]/90 p-4 rounded-xl border border-white/5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30">
              {nodeInfo[activeNode].tag}
            </span>
            <h4 className="text-sm font-bold text-white font-heading">
              {nodeInfo[activeNode].title}
            </h4>
          </div>
          <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
            {nodeInfo[activeNode].desc}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-lg">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>{nodeInfo[activeNode].metrics}</span>
        </div>
      </div>
    </div>
  );
};
