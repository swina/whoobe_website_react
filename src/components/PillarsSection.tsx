import React from 'react';
import { Layers, FileJson, Zap, ShieldCheck } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Unified',
      tagline: 'Single TypeScript Monorepo',
      description: 'Consolidates PIM, DAM, CMS, and API orchestration into a single pnpm + Turborepo monorepo, completely cutting out the operational overhead of fragmented language stacks.',
      icon: Layers,
      highlightColor: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
      borderColor: 'border-[#7C3AED]/30',
      iconColor: 'text-[#A78BFA]',
      tags: ['Turborepo', 'pnpm', 'TypeScript 5.6', 'Zero Legacy PHP']
    },
    {
      num: '02',
      title: 'Composable',
      tagline: 'Zod-Validated Recursive Trees',
      description: 'Outputs structured, recursive, and Zod-validated JSON layout trees. Instantly consumable on any client surface via native SDK adapters for React 19, Next.js, Vue 3, Nuxt, and Svelte 5.',
      icon: FileJson,
      highlightColor: 'from-[#0891B2]/20 to-[#0891B2]/5',
      borderColor: 'border-[#0891B2]/30',
      iconColor: 'text-[#38BDF8]',
      tags: ['Recursive JSON', 'Zod Guards', 'SSR & ISR Hydration', 'Multi-Framework']
    },
    {
      num: '03',
      title: 'Performant',
      tagline: 'PostgreSQL 16 & Trigram Indexes',
      description: 'Built natively on top of Node.js and PostgreSQL 16. Uses built-in tsvector and pg_trgm (Trigram) indexes for fuzzy search and typo-tolerance with zero external engine dependencies (No Elasticsearch bloat).',
      icon: Zap,
      highlightColor: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      tags: ['PostgreSQL 16', 'GIN Indexes', 'pg_trgm Fuzzy', 'Zero Elasticsearch']
    },
    {
      num: '04',
      title: 'Frictionless',
      tagline: '100% Data Sovereignty & ETL',
      description: '100% data and code sovereignty under the permissive MIT license. Includes an embedded CLI ETL pipeline to extract and import legacy Pimcore MySQL schemas with one click.',
      icon: ShieldCheck,
      highlightColor: 'from-emerald-500/20 to-emerald-500/5',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      tags: ['MIT License', 'Self-Hosted', 'Pimcore MySQL ETL', 'No Cloud Lock-in']
    }
  ];

  return (
    <section className="py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0891B2] font-mono mb-3">
            <span>Architectural Foundation</span>
            <span>·</span>
            <span>The 4 Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight text-balance">
            Engineered to eliminate the hidden tax of fragmented stacks.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Most organizations patch together 4 to 6 separate enterprise tools — an outdated PHP PIM, a cloud-locked CMS, an asset bucket, and brittle integration glue. Whoobe unifies all four under one coherent, type-safe architecture.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`relative rounded-2xl bg-[#12151B] border ${pillar.borderColor} p-6 sm:p-8 flex flex-col justify-between hover:bg-[#161A22] transition-all group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-white transition-colors">
                      {pillar.num}
                    </span>
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${pillar.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-medium text-slate-400 mt-0.5">
                      {pillar.tagline}
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
