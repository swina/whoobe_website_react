import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Server, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface QuickstartModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActivePage: (page: ActivePage) => void;
}

export const QuickstartModal: React.FC<QuickstartModalProps> = ({
  isOpen,
  onClose,
  setActivePage,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const quickCommand = `git clone https://github.com/whoobe/whoobe.git && cd whoobe && docker compose up -d --build`;

  const handleCopy = () => {
    navigator.clipboard.writeText(quickCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGoToDocs = () => {
    setActivePage('docs');
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-[#12151B] border border-white/10 p-6 sm:p-8 shadow-2xl relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C3AED] uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Local Evaluation Sandbox</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">
            Spin Up Whoobe Locally
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Boot the entire multi-service stack with a single command. Includes PostgreSQL 16, MinIO, the Gateway, and Admin canvas.
          </p>
        </div>

        {/* Code Snippet Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Terminal Command (Requires Docker & Compose)</span>
            <span className="text-cyan-400">Port 3000, 3001, 3002, 3006</span>
          </div>

          <div className="flex items-center gap-2 bg-[#090B0E] border border-white/10 p-3 rounded-xl font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto">
            <span className="text-slate-500 shrink-0">$</span>
            <span className="flex-1 whitespace-nowrap">{quickCommand}</span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold shrink-0 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Seeded Credentials */}
        <div className="p-4 rounded-xl bg-[#1A1D24] border border-white/5 space-y-2 text-xs">
          <div className="font-semibold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Default Seed Credentials for Local Evaluation:</span>
          </div>
          <div className="grid grid-cols-2 gap-4 font-mono text-slate-300 pt-1">
            <div>
              <span className="text-slate-400">Email:</span> admin@example.com
            </div>
            <div>
              <span className="text-slate-400">Password:</span> admin123
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleGoToDocs}
            className="flex items-center gap-1.5 text-xs text-[#A78BFA] hover:text-white font-semibold transition-colors cursor-pointer"
          >
            <span>View Full Documentation & Terminal Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
