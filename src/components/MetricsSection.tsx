import React, { useState } from 'react';
import { Copy, Check, Terminal, ExternalLink, ArrowRight, Zap, Clock, ShieldCheck, Smartphone } from 'lucide-react';

interface MetricsSectionProps {
  onOpenQuickstart: () => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ onOpenQuickstart }) => {
  const [copied, setCopied] = useState(false);
  const dockerCmd = `git clone https://github.com/whoobe/whoobe.git && cd whoobe && docker compose up -d --build`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dockerCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const metrics = [
    {
      value: '-92%',
      metric: 'Time-to-Market',
      baseline: '14 hrs → 1 hr',
      label: 'On interactive page layouts and promotional campaigns (from 14 engineering hours down to 1 hour of visual composition).',
      icon: Clock,
      color: 'text-cyan-400',
    },
    {
      value: '-85%',
      metric: 'Integration Overhead',
      baseline: 'Zero custom glue code',
      label: 'On mapping remote web endpoints through automated Zod schema detection and declarative proxy guards.',
      icon: Zap,
      color: 'text-[#A78BFA]',
    },
    {
      value: '-80%',
      metric: 'Mobile Delivery Lifecycle',
      baseline: 'Shared JSON layout tree',
      label: 'Compiling native iOS/Android binaries via Capacitor using the exact same web layout asset tree and offline write queue.',
      icon: Smartphone,
      color: 'text-purple-400',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.metric}
                className="rounded-2xl bg-[#12151B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {item.metric}
                    </span>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>

                  <div className={`text-5xl sm:text-6xl font-black font-mono tracking-tight ${item.color} mb-2`}>
                    {item.value}
                  </div>

                  <div className="text-xs font-mono text-slate-400 mb-4 bg-white/5 py-1 px-2.5 rounded inline-block">
                    {item.baseline}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spin Up Locally Snippet Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#171A23] via-[#1A1D28] to-[#171A23] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C3AED] font-mono mb-2">
              <span>Docker Quickstart</span>
              <span>·</span>
              <span>Production Ready</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
              Spin up the complete Whoobe stack in 60 seconds.
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Launches PostgreSQL 16 with JSONB & pg_trgm, MinIO local S3 storage, the full-CRUD API Gateway, and the Admin visual canvas on your local workstation.
            </p>
          </div>

          {/* Terminal Copy Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#0B0D11] border border-white/10 p-2.5 rounded-xl">
            <div className="flex items-center gap-2 px-3 text-slate-500 font-mono text-sm shrink-0">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>$</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto whitespace-nowrap py-1 px-1 flex-1">
              {dockerCmd}
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Command</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono">Ports: 3000 (UI) · 3001 (Gateway) · 3002 (DAM) · 3006 (Canvas)</span>
              <span>·</span>
              <span className="text-emerald-400">Default Seed: admin@example.com / admin123</span>
            </div>

            <button
              onClick={onOpenQuickstart}
              className="flex items-center gap-1.5 text-xs text-[#A78BFA] hover:text-white font-semibold transition-colors"
            >
              <span>Explore Deployment Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
