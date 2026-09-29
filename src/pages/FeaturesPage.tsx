import React, { useState } from 'react';
import { FeatureTab } from '../types';
import { Layers, Cpu, Share2, Smartphone, CheckCircle2, Copy, Check, Database, Code, ArrowRight, ShieldCheck, Terminal, Download, Sparkles } from 'lucide-react';

interface FeaturesPageProps {
  selectedTab: FeatureTab;
  setSelectedTab: (tab: FeatureTab) => void;
  onOpenQuickstart: () => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({
  selectedTab,
  setSelectedTab,
  onOpenQuickstart
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeLayoutFramework, setActiveLayoutFramework] = useState<'react' | 'vue' | 'svelte' | 'json'>('react');
  const [searchQuery, setSearchQuery] = useState('ergonomic chair');

  const copySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const pimSqlSnippet = `-- Whoobe Native PostgreSQL 16 JSONB & Trigram Schema
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE whoobe_data_classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(64) UNIQUE NOT NULL,
  definition JSONB NOT NULL,
  version INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE whoobe_entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  class_slug VARCHAR(64) REFERENCES whoobe_data_classes(slug),
  data JSONB NOT NULL,
  tsv TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(data->>'title', '') || ' ' || coalesce(data->>'sku', ''))
  ) STORED,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Fast GIN & Trigram Fuzzy Indexing (No Elasticsearch needed)
CREATE INDEX idx_entities_gin ON whoobe_entities USING GIN (data);
CREATE INDEX idx_entities_trgm ON whoobe_entities USING GIN ((data->>'title') gin_trgm_ops);
CREATE INDEX idx_entities_tsv ON whoobe_entities USING GIN (tsv);`;

  const layoutTreeSnippet = `{
  "$schema": "https://whoobe.io/schemas/v2/layout.json",
  "id": "block_hero_9918",
  "type": "Container",
  "props": {
    "padding": "3rem 1.5rem",
    "theme": "dark"
  },
  "children": [
    {
      "id": "block_heading_11",
      "type": "Heading",
      "props": {
        "level": 1,
        "content": "Unify your stack.",
        "boundSource": "entity.product.title"
      }
    },
    {
      "id": "block_price_badge",
      "type": "PriceBadge",
      "props": {
        "amount": 249.00,
        "currency": "EUR",
        "boundSource": "gateway.hubspot.deal_value"
      }
    }
  ]
}`;

  const reactSdksnippet = `import React from 'react';
import { WhoobeRenderer, useEntity } from '@whoobe-cms/react';

export default function ProductLandingPage({ slug }: { slug: string }) {
  // Deterministic SSR / ISR Hydration with TypeScript safety
  const { layout, entity, loading } = useEntity('products', slug);

  if (loading) return <div>Hydrating layout...</div>;

  return (
    <main className="min-h-screen bg-[#0F1115]">
      <WhoobeRenderer 
        layoutTree={layout} 
        dataSource={entity}
        customComponents={{
          PriceBadge: CustomBadgeComponent
        }}
      />
    </main>
  );
}`;

  const mobileOfflineQueueSnippet = `// Capacitor 6 + SQLite Offline Write Queue
import { CapStorage } from '@capacitor/storage';
import { Network } from '@capacitor/network';

export interface QueuedMutation {
  id: string;
  endpoint: string;
  method: 'POST' | 'PUT' | 'DELETE';
  payload: Record<string, unknown>;
  timestamp: number;
}

export class OfflineWriteQueue {
  private queue: QueuedMutation[] = [];

  async enqueue(mutation: Omit<QueuedMutation, 'id' | 'timestamp'>) {
    const status = await Network.getStatus();
    const item: QueuedMutation = {
      ...mutation,
      id: crypto.randomUUID(),
      timestamp: Date.now()
    };

    if (status.connected) {
      try {
        return await this.sendToServer(item);
      } catch (err) {
        // Fallback to local queue on server failure
      }
    }

    this.queue.push(item);
    await CapStorage.set({ key: 'whoobe_write_queue', value: JSON.stringify(this.queue) });
    return { queued: true, localId: item.id };
  }

  async flush() {
    // Process queue with exponential backoff on reconnection
  }
}`;

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C3AED] font-mono mb-3">
            <span>Engineering Architecture</span>
            <span>·</span>
            <span>Platform Core</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Features & Technical Specifications
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore the four pillars of the Whoobe platform: dynamic data models, recursive visual layout trees, zero-code federated API gateways, and native mobile compilation.
          </p>
        </div>

        {/* Feature Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10 scrollbar-none">
          <button
            onClick={() => setSelectedTab('pim-mdm')}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedTab === 'pim-mdm'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Dynamic PIM/MDM</span>
          </button>

          <button
            onClick={() => setSelectedTab('visual-builder')}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedTab === 'visual-builder'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Visual Builder & AI Authoring</span>
          </button>

          <button
            onClick={() => setSelectedTab('api-gateway')}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedTab === 'api-gateway'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Federated API Gateway</span>
          </button>

          <button
            onClick={() => setSelectedTab('mobile-factory')}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedTab === 'mobile-factory'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Native Mobile Factory</span>
          </button>
        </div>

        {/* Tab 1: Dynamic PIM / MDM */}
        {selectedTab === 'pim-mdm' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0891B2]">Subsystem: core-api</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    PostgreSQL JSONB Runtime Data Classes
                  </h2>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Unlike legacy systems that force risky SQL `ALTER TABLE` DDL migrations whenever marketing adds a new attribute, Whoobe translates Data Classes directly into JSONB documents indexed via PostgreSQL GIN structures.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12151B] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Built-in Trigram Fuzzy Search</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Native <code className="text-cyan-300">pg_trgm</code> and <code className="text-cyan-300">tsvector</code> indexes deliver typo-tolerant instant search without running a separate 4GB Elasticsearch JVM container.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12151B] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">One-Click Pimcore MySQL ETL Pipeline</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Built-in CLI migration tool extracts legacy Pimcore MySQL relational schemas, converts complex inheritance trees into clean JSONB, and loads records directly into Whoobe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12151B] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">100% ACID Sovereignty</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Retain full transaction isolation, foreign-key safety, and point-in-time recovery on your own private cloud or on-premise hardware under MIT license.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Fuzzy Search Tester */}
                <div className="p-4 rounded-xl bg-[#0B0D11] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-300">Test pg_trgm Typo Tolerance</span>
                    <span className="text-[10px] font-mono text-cyan-400">Similarity &gt; 0.35</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Try 'ergnomic chair' or 'chari'..."
                      className="flex-1 bg-[#1A1D24] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Query: <span className="text-cyan-300">SELECT id, data-&gt;&gt;'title' FROM whoobe_entities WHERE data-&gt;&gt;'title' % '{searchQuery}'</span>
                  </div>
                </div>
              </div>

              {/* Code viewer for PostgreSQL Schema */}
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono bg-[#1A1D24] px-4 py-2.5 rounded-t-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    schema.postgres.sql
                  </span>
                  <button
                    onClick={() => copySnippet('pim-sql', pimSqlSnippet)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copiedCode === 'pim-sql' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode === 'pim-sql' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-b-xl bg-[#090B0E] border-x border-b border-white/10 text-xs font-mono text-slate-300 overflow-x-auto max-h-[460px] leading-relaxed">
                  {pimSqlSnippet}
                </pre>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Visual Builder & AI Authoring */}
        {selectedTab === 'visual-builder' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C3AED]">Subsystem: visual-canvas</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    Drag-and-Drop with Recursive Zod Layout Trees
                  </h2>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Whoobe does not generate messy static HTML or vendor-trapped CSS blobs. The visual editor serializes components into recursive, Zod-guarded JSON trees that hydrate deterministically on any modern JavaScript framework.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#12151B] border border-white/5 space-y-1">
                    <div className="font-semibold text-white">Figma Token Import</div>
                    <div className="text-slate-400">Import Figma styles and layout variables directly into the canvas.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#12151B] border border-white/5 space-y-1">
                    <div className="font-semibold text-white">AI Authoring Assistant</div>
                    <div className="text-slate-400">Synthesize layout sections, responsive variants, and copy on the fly.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#12151B] border border-white/5 space-y-1">
                    <div className="font-semibold text-white">Multi-Framework Native</div>
                    <div className="text-slate-400">First-class SDKs for React, Next.js, Vue 3, Nuxt, and Svelte 5.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#12151B] border border-white/5 space-y-1">
                    <div className="font-semibold text-white">Zero Runtime Lock-in</div>
                    <div className="text-slate-400">Output is raw clean JSON; render with your own design system.</div>
                  </div>
                </div>

                {/* Framework Switcher Preview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Select Client Consumption Target:</span>
                    <div className="flex items-center gap-1 bg-[#1A1D24] p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => setActiveLayoutFramework('react')}
                        className={`px-2.5 py-1 rounded ${activeLayoutFramework === 'react' ? 'bg-[#7C3AED] text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                      >
                        React 19 / Next.js
                      </button>
                      <button
                        onClick={() => setActiveLayoutFramework('json')}
                        className={`px-2.5 py-1 rounded ${activeLayoutFramework === 'json' ? 'bg-[#7C3AED] text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                      >
                        Raw Zod JSON Tree
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Viewer */}
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono bg-[#1A1D24] px-4 py-2.5 rounded-t-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 text-[#A78BFA]" />
                    {activeLayoutFramework === 'react' ? 'ProductLandingPage.tsx' : 'layout.tree.zod.json'}
                  </span>
                  <button
                    onClick={() => copySnippet('layout-code', activeLayoutFramework === 'react' ? reactSdksnippet : layoutTreeSnippet)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copiedCode === 'layout-code' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode === 'layout-code' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-b-xl bg-[#090B0E] border-x border-b border-white/10 text-xs font-mono text-cyan-300/90 overflow-x-auto max-h-[460px] leading-relaxed">
                  {activeLayoutFramework === 'react' ? reactSdksnippet : layoutTreeSnippet}
                </pre>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Federated Full-CRUD API Gateway */}
        {selectedTab === 'api-gateway' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0891B2]">Subsystem: apps/gateway</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    Zero-Code Federated REST & OpenAPI Proxy
                  </h2>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Connectors live in declarative JSON schemas inside <code className="text-cyan-300">@whoobe-cms/connectors</code>. Point the gateway to any vendor or microservice, and Whoobe takes care of credentials, caching, token refresh, and Zod validation.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#12151B] border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">AES-256-GCM Credential Isolation</span>
                      <span className="text-[10px] font-mono text-emerald-400">Zero-Trust</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Tokens are encrypted at rest with hardware-accelerated AES-256-GCM. Public client bundles never receive corporate API secrets.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#12151B] border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Full-CRUD Mutation Handling</span>
                      <span className="text-[10px] font-mono text-cyan-400">GET, POST, PUT, DELETE</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Submit lead forms, trigger email automation campaigns, or process order status changes with built-in rate-limiting and audit logging.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0D11] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-slate-300 font-semibold">Active Declarative Presets:</div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/30">
                      hubspot.preset.json (CRM)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#0891B2]/20 text-cyan-300 border border-[#0891B2]/30">
                      brevo.preset.json (Marketing)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                      stripe.preset.json (Billing)
                    </span>
                  </div>
                </div>
              </div>

              {/* Code visual */}
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono bg-[#1A1D24] px-4 py-2.5 rounded-t-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                    apps/gateway/presets/hubspot.json
                  </span>
                  <button
                    onClick={() => copySnippet('preset-code', `{
  "id": "hubspot-crm",
  "name": "HubSpot Deals & Contacts",
  "auth": {
    "type": "oauth2",
    "tokenUrl": "https://api.hubapi.com/oauth/v1/token",
    "encryptedSecretKey": "enc_aes256_8892fbc9"
  },
  "routes": {
    "getDeals": {
      "method": "GET",
      "path": "/crm/v3/objects/deals",
      "cacheTtlSeconds": 60
    },
    "createContact": {
      "method": "POST",
      "path": "/crm/v3/objects/contacts",
      "rateLimit": { "windowMs": 60000, "max": 100 }
    }
  }
}`)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copiedCode === 'preset-code' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode === 'preset-code' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-b-xl bg-[#090B0E] border-x border-b border-white/10 text-xs font-mono text-purple-300/90 overflow-x-auto max-h-[460px] leading-relaxed">
{`{
  "id": "hubspot-crm",
  "name": "HubSpot Deals & Contacts",
  "auth": {
    "type": "oauth2",
    "tokenUrl": "https://api.hubapi.com/oauth/v1/token",
    "encryptedSecretKey": "enc_aes256_8892fbc9"
  },
  "routes": {
    "getDeals": {
      "method": "GET",
      "path": "/crm/v3/objects/deals",
      "cacheTtlSeconds": 60
    },
    "createContact": {
      "method": "POST",
      "path": "/crm/v3/objects/contacts",
      "rateLimit": { "windowMs": 60000, "max": 100 }
    }
  }
}`}
                </pre>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: Native Mobile Factory (Capacitor) */}
        {selectedTab === 'mobile-factory' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C3AED]">Subsystem: mobile-factory</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    Native iOS & Android Binary Generation
                  </h2>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Why build and maintain two separate applications? Whoobe compiles the exact same structured JSON layout asset tree directly into native Capacitor binaries (.apk for Android and .ipa for iOS) with device hardware access.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#12151B] border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Offline Write Queue (SQLite + Backoff)</span>
                      <span className="text-[10px] font-mono text-cyan-400">Zero Data Loss</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      When users are offline in the field, updates and form submissions queue safely inside local SQLite storage and flush automatically with exponential backoff once network connectivity returns.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#12151B] border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Direct Hardware & Sensor Bridge</span>
                      <span className="text-[10px] font-mono text-emerald-400">Capacitor 6</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Full access to camera for barcode/QR product scanning, biometric Face ID/touch authentication, and background geolocation without Cordova bloat.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={onOpenQuickstart}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Run Mobile Build in Sandbox</span>
                  </button>
                </div>
              </div>

              {/* Code viewer for Offline Write Queue */}
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono bg-[#1A1D24] px-4 py-2.5 rounded-t-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-[#7C3AED]" />
                    OfflineWriteQueue.ts
                  </span>
                  <button
                    onClick={() => copySnippet('queue-code', mobileOfflineQueueSnippet)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copiedCode === 'queue-code' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode === 'queue-code' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-b-xl bg-[#090B0E] border-x border-b border-white/10 text-xs font-mono text-cyan-300/90 overflow-x-auto max-h-[460px] leading-relaxed">
                  {mobileOfflineQueueSnippet}
                </pre>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
