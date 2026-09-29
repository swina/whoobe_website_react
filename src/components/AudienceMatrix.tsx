import React from 'react';
import { Database, Code2, Terminal, Container, ArrowRight } from 'lucide-react';

export const AudienceMatrix: React.FC = () => {
  const personas = [
    {
      role: 'Backend & Solutions Architects',
      badge: 'Data Integrity & Scalability',
      description: 'Manage complex enterprise datasets via PostgreSQL JSONB and GIN indexes without risking schema corruption through dynamic SQL migrations at runtime.',
      benefits: [
        'PostgreSQL 16 native JSONB storage with ACID guarantees',
        'Runtime Data Classes with zero SQL DDL lock contention',
        'Built-in full-text search with tsvector and pg_trgm trigrams',
        'High-density indexing with PostgreSQL GIN structures'
      ],
      icon: Database,
      accent: 'border-[#7C3AED]/40 hover:border-[#7C3AED]'
    },
    {
      role: 'Frontend & JAMstack Developers',
      badge: 'Developer Experience',
      description: 'Enjoy pure layout data control. Consume components through production-ready multi-framework SDKs that handle server-side hydration (SSR/ISR) deterministically.',
      benefits: [
        'Typed SDK adapters for React 19, Next.js, Vue 3, Nuxt, and Svelte 5',
        'Recursive JSON tree structures with strict Zod inference',
        'Deterministic SSR and Incremental Static Regeneration (ISR)',
        'Zero layout lock-in: headless output formatted for modern UI'
      ],
      icon: Code2,
      accent: 'border-[#0891B2]/40 hover:border-[#0891B2]'
    },
    {
      role: 'Full-Stack TypeScript Engineers',
      badge: 'Unified Modern Stack',
      description: 'Eliminate PHP/Symfony legacy footprints. Audit, extend, and deploy your entire platform lifecycle using a single modern language structure.',
      benefits: [
        '100% TypeScript codebase from database layer to UI canvas',
        'Single Turborepo monorepo with pnpm workspaces',
        'Shared validation guards between backend and frontend',
        'Zero context switching between PHP, Twig, and JavaScript'
      ],
      icon: Terminal,
      accent: 'border-purple-500/40 hover:border-purple-500'
    },
    {
      role: 'DevOps & Data Engineers',
      badge: 'Decoupled Microservices',
      description: 'Scale fluidly by decoupling the core logical framework (core-api) from the intensive media mutation layer (asset-processor), wrapped completely inside a lightweight Docker architecture.',
      benefits: [
        'Independent scaling of core-api vs heavy asset-processor (Sharp/S3)',
        'Standard Docker Compose and Kubernetes Helm manifests',
        'Predictable memory footprint with Node.js 22 LTS runtime',
        'Automated health check endpoints across all federated services'
      ],
      icon: Container,
      accent: 'border-emerald-500/40 hover:border-emerald-500'
    }
  ];

  return (
    <section className="py-20 border-b border-white/5 bg-[#0D0F14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C3AED] font-mono mb-3">
            <span>Target Audience Matrix</span>
            <span>·</span>
            <span>Role-Specific Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight text-balance">
            Built for modern engineering teams who demand precision and control.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Whether you are designing resilient data schemas, rendering edge-hydrated components, or orchestrating self-hosted Kubernetes clusters, Whoobe fits cleanly into your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <div
                key={persona.role}
                className={`rounded-2xl bg-[#12151B] border ${persona.accent} p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 group`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-slate-200" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 border border-white/10 px-2.5 py-1 rounded-full">
                      {persona.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-2">
                    {persona.role}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {persona.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {persona.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <span className="text-cyan-400 font-mono mt-0.5">✓</span>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
