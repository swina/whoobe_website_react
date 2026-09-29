import React, { useState } from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'core' | 'open-source'>('all');

  const rows = [
    {
      feature: 'Dynamic Content Model',
      whoobe: 'Runtime Data Classes, Postgres JSONB',
      contentful: 'Runtime content types',
      webflow: 'Fixed CMS collections',
      wordpress: 'Custom Post Types via plugins',
      zapier: 'Not applicable',
      adalo: 'Basic no-code collections',
      whoobeHighlight: true,
      category: 'core'
    },
    {
      feature: 'Visual Page Builder',
      whoobe: 'Drag-and-drop, Zod JSON output',
      contentful: 'None — Form entries only',
      webflow: 'Best-in-class visual builder',
      wordpress: 'Plugin-dependent (Elementor)',
      zapier: 'None',
      adalo: 'Visual builder, mobile-only',
      whoobeHighlight: true,
      category: 'core'
    },
    {
      feature: 'Native API Gateway',
      whoobe: 'Built-in Full-CRUD (GET/POST)',
      contentful: 'None native',
      webflow: 'Limited to basic webhooks',
      wordpress: 'Requires unstable plugins',
      zapier: 'Pure automation hub',
      adalo: 'Generic limited connector',
      whoobeHighlight: true,
      category: 'core'
    },
    {
      feature: 'Headless SDK Support',
      whoobe: 'React, Vue, Next, Nuxt, Svelte',
      contentful: 'Mature, multi-language',
      webflow: 'Limited API',
      wordpress: 'REST/GraphQL via plugins',
      zapier: 'Not applicable',
      adalo: 'Not applicable',
      whoobeHighlight: true,
      category: 'open-source'
    },
    {
      feature: 'Digital Asset Manager (DAM)',
      whoobe: 'Built-in S3/MinIO + Sharp',
      contentful: 'Basic asset API',
      webflow: 'Basic static assets',
      wordpress: 'Rigid media library',
      zapier: 'Not applicable',
      adalo: 'Not applicable',
      whoobeHighlight: true,
      category: 'core'
    },
    {
      feature: 'Mobile App Generation',
      whoobe: 'Incluso: Capacitor Build Factory',
      contentful: 'None',
      webflow: 'None',
      wordpress: 'Simple PWAs via plugins',
      zapier: 'Not applicable',
      adalo: 'Core product, no web output',
      whoobeHighlight: true,
      category: 'core'
    },
    {
      feature: 'AI Authoring Canvas',
      whoobe: 'Built-in canvas + Figma Import',
      contentful: 'Add-on metadata tags',
      webflow: 'AI Page generation (Beta)',
      wordpress: 'Plugin dependent',
      zapier: 'AI automation steps',
      adalo: 'None',
      whoobeHighlight: true,
      category: 'core'
    },
    {
      feature: 'Self-Hosted Control',
      whoobe: 'Yes — Total Data Sovereignty (MIT)',
      contentful: 'No — SaaS only',
      webflow: 'No — SaaS only',
      wordpress: 'Yes (GPL PHP)',
      zapier: 'No — SaaS only',
      adalo: 'No — SaaS only',
      whoobeHighlight: true,
      category: 'open-source'
    }
  ];

  const filteredRows = rows.filter(r => {
    if (filterMode === 'all') return true;
    return r.category === filterMode;
  });

  return (
    <section className="py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0891B2] font-mono mb-3">
              <span>Ecosystem Analysis</span>
              <span>·</span>
              <span>Architectural Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight text-balance">
              Global Solution Comparison Matrix
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Why settle for stitched-together plugins or vendor lock-in? See how Whoobe consolidates the capabilities of legacy CMSs, visual builders, and automation middleware.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#12151B] border border-white/10 rounded-lg shrink-0">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterMode === 'all' ? 'bg-[#7C3AED] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Features
            </button>
            <button
              onClick={() => setFilterMode('core')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterMode === 'core' ? 'bg-[#7C3AED] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Core Platform
            </button>
            <button
              onClick={() => setFilterMode('open-source')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterMode === 'open-source' ? 'bg-[#7C3AED] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sovereignty & SDKs
            </button>
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="w-full overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-[#0F1115]">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-white/10 bg-[#161A22] text-xs font-mono uppercase tracking-wider">
                <th className="py-4 px-5 text-slate-400 font-semibold w-1/4">Pillar Feature</th>
                <th className="py-4 px-5 text-[#A78BFA] font-bold bg-[#7C3AED]/15 border-x border-[#7C3AED]/30 w-1/4">
                  <div className="flex items-center gap-1.5">
                    <span>Whoobe</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#7C3AED] text-white font-sans font-medium">MIT</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-slate-400 font-normal">Contentful</th>
                <th className="py-4 px-4 text-slate-400 font-normal">Webflow</th>
                <th className="py-4 px-4 text-slate-400 font-normal">WordPress</th>
                <th className="py-4 px-4 text-slate-400 font-normal">Zapier</th>
                <th className="py-4 px-4 text-slate-400 font-normal">Adalo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {filteredRows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`hover:bg-white/[0.02] transition-colors ${idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}`}
                >
                  <td className="py-4 px-5 font-semibold text-slate-200">
                    {row.feature}
                  </td>
                  
                  {/* Whoobe Column */}
                  <td className="py-4 px-5 font-medium text-white bg-[#7C3AED]/10 border-x border-[#7C3AED]/25">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-cyan-200 font-semibold">{row.whoobe}</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-slate-400">{row.contentful}</td>
                  <td className="py-4 px-4 text-slate-400">{row.webflow}</td>
                  <td className="py-4 px-4 text-slate-400">{row.wordpress}</td>
                  <td className="py-4 px-4 text-slate-400">{row.zapier}</td>
                  <td className="py-4 px-4 text-slate-400">{row.adalo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
