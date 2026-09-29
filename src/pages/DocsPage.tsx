import React, { useState } from 'react';
import { Terminal, Copy, Check, ExternalLink, Play, CheckCircle2, RefreshCw, Server, ArrowRight, ShieldCheck, HardDrive, Cpu, Smartphone } from 'lucide-react';
import { ServiceEndpoint } from '../types';

export const DocsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guide' | 'docker-compose' | 'offline-queue'>('guide');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Interactive Terminal State
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'whoobe-sandbox:~$ # Ready to initialize stack.',
    'whoobe-sandbox:~$ # Click "Run Simulated Deployment" below to simulate booting containers.',
  ]);
  const [servicesOnline, setServicesOnline] = useState(false);

  const copyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const runSimulatedBootstrap = () => {
    setTerminalRunning(true);
    setServicesOnline(false);
    setTerminalOutput([
      'whoobe-sandbox:~$ git clone https://github.com/whoobe/whoobe.git && cd whoobe',
      'Cloning into \'whoobe\'... done.',
      'whoobe-sandbox:~/whoobe$ docker compose up -d --build',
      '[+] Building 4.8s (12/12) FINISHED',
      '[+] Running 6/6',
      ' ✔ Network whoobe_default           Created',
      ' ✔ Container whoobe-postgres-1     Healthy [Port 5432]',
      ' ✔ Container whoobe-minio-1        Started [Port 9000, 9001]',
      ' ✔ Container whoobe-core-api-1     Started [Port 3001]',
      ' ✔ Container whoobe-asset-worker-1 Started [Port 3002]',
      ' ✔ Container whoobe-canvas-1       Started [Port 3006]',
      ' ✔ Container whoobe-admin-ui-1     Started [Port 3000]',
      'whoobe-sandbox:~/whoobe$ docker compose exec minio sh -c "mc alias set whoobe http://localhost:9000 minioadmin minioadminpassword && mc mb whoobe/whoobe-cms"',
      'Bucket created successfully `whoobe/whoobe-cms`.',
      '✅ All Whoobe microservices verified and reachable on localhost.'
    ]);
    setTimeout(() => {
      setTerminalRunning(false);
      setServicesOnline(true);
    }, 1200);
  };

  const endpoints: ServiceEndpoint[] = [
    {
      port: 3000,
      name: 'Admin Dashboard Panel',
      role: 'Core Management UI & Content Studio',
      url: 'http://localhost:3000',
      status: servicesOnline ? 'active' : 'ready'
    },
    {
      port: 3001,
      name: 'Full-CRUD API Gateway',
      role: 'Federated REST / OpenAPI Proxy & Zod Engine',
      url: 'http://localhost:3001',
      status: servicesOnline ? 'active' : 'ready'
    },
    {
      port: 3002,
      name: 'Asset Processor Media Engine',
      role: 'Sharp Worker, MinIO S3 & Cloudinary Hook',
      url: 'http://localhost:3002',
      status: servicesOnline ? 'active' : 'ready'
    },
    {
      port: 3006,
      name: 'Standalone Visual Editor Instance',
      role: 'Live Component Drag-and-Drop Canvas',
      url: 'http://localhost:3006',
      status: servicesOnline ? 'active' : 'ready'
    }
  ];

  const dockerComposeCode = `version: "3.9"

services:
  # 01. PostgreSQL 16 with JSONB, GIN, and pg_trgm extensions
  postgres:
    image: postgres:16-alpine
    container_name: whoobe-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: whoobe_db
      POSTGRES_USER: whoobe_admin
      POSTGRES_PASSWORD: whoobe_secret_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./infra/postgres/init-extensions.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U whoobe_admin -d whoobe_db"]
      interval: 5s
      timeout: 5s
      retries: 5

  # 02. MinIO S3-Compatible Local Storage Vault
  minio:
    image: minio/minio:RELEASE.2024-05-10T01-41-38Z
    container_name: whoobe-minio
    restart: unless-stopped
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadminpassword
    volumes:
      - minio_data:/data
    ports:
      - "9000:9000"
      - "9001:9001"

  # 03. Core API & Federated Gateway (AES-256-GCM + Zod)
  core-api:
    build:
      context: .
      dockerfile: apps/gateway/Dockerfile
    container_name: whoobe-gateway
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      PORT: 3001
      DATABASE_URL: postgresql://whoobe_admin:whoobe_secret_password@postgres:5432/whoobe_db
      ENCRYPTION_MASTER_KEY: \${WHOOBE_AES_KEY:-0123456789abcdef0123456789abcdef}
    ports:
      - "3001:3001"

  # 04. Sharp Media Worker (Asset Processor)
  asset-processor:
    build:
      context: .
      dockerfile: apps/asset-processor/Dockerfile
    container_name: whoobe-asset-processor
    restart: unless-stopped
    environment:
      PORT: 3002
      S3_ENDPOINT: http://minio:9000
      S3_BUCKET: whoobe-cms
    ports:
      - "3002:3002"

  # 05. Admin Dashboard Panel
  admin-ui:
    build:
      context: .
      dockerfile: apps/admin/Dockerfile
    container_name: whoobe-admin
    restart: unless-stopped
    ports:
      - "3000:3000"

  # 06. Standalone Visual Editor Canvas
  visual-canvas:
    build:
      context: .
      dockerfile: apps/visual-editor/Dockerfile
    container_name: whoobe-canvas
    restart: unless-stopped
    ports:
      - "3006:3006"

volumes:
  postgres_data:
  minio_data:`;

  const offlineQueueCode = `/**
 * @whoobe-cms/capacitor-offline-queue
 * TypeScript Implementation: Offline Write Queue for Capacitor 6 & SQLite
 */
import { Preferences } from '@capacitor/preferences';
import { Network } from '@capacitor/network';

export interface QueuedMutation {
  id: string;
  endpoint: string;
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers: Record<string, string>;
  payload: Record<string, unknown>;
  retryCount: number;
  timestamp: number;
}

export class OfflineWriteQueue {
  private static STORAGE_KEY = 'whoobe_offline_mutations';
  private queue: QueuedMutation[] = [];
  private isFlushing = false;

  constructor(private gatewayBaseUrl: string) {
    this.initNetworkListener();
    this.loadFromStorage();
  }

  private async loadFromStorage(): Promise<void> {
    const { value } = await Preferences.get({ key: OfflineWriteQueue.STORAGE_KEY });
    if (value) {
      try {
        this.queue = JSON.parse(value);
      } catch (e) {
        this.queue = [];
      }
    }
  }

  private async persist(): Promise<void> {
    await Preferences.set({
      key: OfflineWriteQueue.STORAGE_KEY,
      value: JSON.stringify(this.queue)
    });
  }

  private initNetworkListener(): void {
    Network.addListener('networkStatusChange', async (status) => {
      if (status.connected && this.queue.length > 0) {
        await this.flush();
      }
    });
  }

  /**
   * Enqueue a remote mutation. If connected, attempts immediate dispatch.
   * If offline or request fails with 5xx/network error, commits to local queue.
   */
  public async mutate(
    endpoint: string,
    method: QueuedMutation['method'],
    payload: Record<string, unknown>,
    headers: Record<string, string> = {}
  ): Promise<{ queued: boolean; data?: unknown }> {
    const status = await Network.getStatus();

    if (status.connected) {
      try {
        const response = await fetch(\`\${this.gatewayBaseUrl}\${endpoint}\`, {
          method,
          headers: { 'Content-Type': 'application/json', ...headers },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const data = await response.json();
          return { queued: false, data };
        }
      } catch (networkError) {
        // Fallback to queue below
      }
    }

    // Persist mutation to SQLite / Preferences
    const mutation: QueuedMutation = {
      id: crypto.randomUUID(),
      endpoint,
      method,
      headers,
      payload,
      retryCount: 0,
      timestamp: Date.now()
    };

    this.queue.push(mutation);
    await this.persist();
    return { queued: true };
  }

  /**
   * Flushes queued mutations with exponential backoff on reconnection.
   */
  public async flush(): Promise<{ processed: number; remaining: number }> {
    if (this.isFlushing || this.queue.length === 0) {
      return { processed: 0, remaining: this.queue.length };
    }

    this.isFlushing = true;
    let processed = 0;

    while (this.queue.length > 0) {
      const item = this.queue[0];
      try {
        const res = await fetch(\`\${this.gatewayBaseUrl}\${item.endpoint}\`, {
          method: item.method,
          headers: { 'Content-Type': 'application/json', ...item.headers },
          body: JSON.stringify(item.payload)
        });

        if (res.ok) {
          this.queue.shift();
          await this.persist();
          processed++;
        } else if (res.status >= 400 && res.status < 500) {
          // Client error: remove poisoned message from queue
          this.queue.shift();
          await this.persist();
        } else {
          // Server error: pause flush and wait for next interval
          break;
        }
      } catch (err) {
        break;
      }
    }

    this.isFlushing = false;
    return { processed, remaining: this.queue.length };
  }
}`;

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C3AED] font-mono mb-3">
            <span>Developer Sandbox</span>
            <span>·</span>
            <span>VitePress & Docker Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Quickstart Documentation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Welcome to the Whoobe Sandbox deployment guide. This section details how to bootstrap the full multi-service architecture locally for evaluation and local feature design.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'guide'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Step-by-Step Setup</span>
          </button>

          <button
            onClick={() => setActiveTab('docker-compose')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'docker-compose'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <HardDrive className="w-4 h-4" />
            <span>docker-compose.yml</span>
          </button>

          <button
            onClick={() => setActiveTab('offline-queue')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'offline-queue'
                ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                : 'bg-[#161A22] text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>OfflineWriteQueue.ts (Capacitor)</span>
          </button>
        </div>

        {/* ================= TAB 1: GUIDE ================= */}
        {activeTab === 'guide' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            
            {/* Interactive Terminal Sandbox Simulator */}
            <div className="rounded-2xl bg-[#090B0E] border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-[#161922] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">bash — whoobe-docker-sandbox</span>
                </div>
                <button
                  onClick={runSimulatedBootstrap}
                  disabled={terminalRunning}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Play className={`w-3 h-3 ${terminalRunning ? 'animate-spin' : ''}`} />
                  <span>{terminalRunning ? 'Booting Containers...' : 'Run Simulated Deployment'}</span>
                </button>
              </div>

              <div className="p-4 sm:p-6 font-mono text-xs text-cyan-300/90 space-y-1 max-h-72 overflow-y-auto">
                {terminalOutput.map((line, i) => (
                  <div key={i} className={line.startsWith('✅') ? 'text-emerald-400 font-bold' : ''}>
                    {line}
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="space-y-6">
              
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-[#12151B] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold">1</span>
                    <h3 className="text-lg font-bold text-white font-heading">Clone and Environment Verification</h3>
                  </div>
                  <button
                    onClick={() => copyCode('step1', 'git clone https://github.com/whoobe/whoobe.git\ncd whoobe')}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
                  >
                    {copiedId === 'step1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'step1' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ensure you have Docker and Docker Compose installed on your host system. Verify that your local ports <code className="text-cyan-300">3000</code>, <code className="text-cyan-300">3001</code>, <code className="text-cyan-300">3002</code>, <code className="text-cyan-300">3003</code>, and <code className="text-cyan-300">3006</code> are free.
                </p>
                <pre className="p-3 rounded-lg bg-[#0B0D11] border border-white/5 text-xs font-mono text-cyan-300">
git clone https://github.com/whoobe/whoobe.git
cd whoobe
                </pre>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-[#12151B] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold">2</span>
                    <h3 className="text-lg font-bold text-white font-heading">Booting the Stack</h3>
                  </div>
                  <button
                    onClick={() => copyCode('step2', 'docker compose up -d --build')}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
                  >
                    {copiedId === 'step2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'step2' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Execute the container initialization. This compiles the Vite frontend clients inside optimized Nginx instances and starts the isolated Node services alongside PostgreSQL 16 and MinIO.
                </p>
                <pre className="p-3 rounded-lg bg-[#0B0D11] border border-white/5 text-xs font-mono text-cyan-300">
docker compose up -d --build
                </pre>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-[#12151B] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold">3</span>
                    <h3 className="text-lg font-bold text-white font-heading">Local Storage Provisioning</h3>
                  </div>
                  <button
                    onClick={() => copyCode('step3', 'docker compose exec minio sh -c "mc alias set whoobe http://localhost:9000 minioadmin minioadminpassword && mc mb whoobe/whoobe-cms"')}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
                  >
                    {copiedId === 'step3' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'step3' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Run the initialization task to configure your local S3-compatible asset buckets inside MinIO:
                </p>
                <pre className="p-3 rounded-lg bg-[#0B0D11] border border-white/5 text-xs font-mono text-cyan-300 overflow-x-auto">
docker compose exec minio sh -c "mc alias set whoobe http://localhost:9000 minioadmin minioadminpassword && mc mb whoobe/whoobe-cms"
                </pre>
              </div>

              {/* Step 4: Verification Access Links */}
              <div className="p-6 rounded-2xl bg-[#12151B] border border-[#7C3AED]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-mono text-xs font-bold">4</span>
                    <h3 className="text-lg font-bold text-white font-heading">Verification Access Links</h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded">
                    Default: admin@example.com / admin123
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {endpoints.map((ep) => (
                    <div
                      key={ep.port}
                      className="p-4 rounded-xl bg-[#0F1115] border border-white/5 flex flex-col justify-between space-y-2 hover:border-white/10 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white font-heading">{ep.name}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${ep.status === 'active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-400'}`}>
                            Port {ep.port}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">{ep.role}</p>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                        <span className="text-cyan-400">{ep.url}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================= TAB 2: DOCKER COMPOSE ================= */}
        {activeTab === 'docker-compose' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between bg-[#161922] px-4 py-2.5 rounded-t-xl border border-white/10">
              <span className="text-xs font-mono text-white flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                docker-compose.yml (Multi-Service Production Blueprint)
              </span>
              <button
                onClick={() => copyCode('compose', dockerComposeCode)}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
              >
                {copiedId === 'compose' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'compose' ? 'Copied' : 'Copy file'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-b-xl bg-[#090B0E] border-x border-b border-white/10 text-xs font-mono text-cyan-300/90 overflow-x-auto max-h-[560px] leading-relaxed">
              {dockerComposeCode}
            </pre>
          </div>
        )}

        {/* ================= TAB 3: OFFLINE WRITE QUEUE ================= */}
        {activeTab === 'offline-queue' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between bg-[#161922] px-4 py-2.5 rounded-t-xl border border-white/10">
              <span className="text-xs font-mono text-white flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-[#7C3AED]" />
                packages/mobile-sdk/src/OfflineWriteQueue.ts
              </span>
              <button
                onClick={() => copyCode('offline-queue', offlineQueueCode)}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
              >
                {copiedId === 'offline-queue' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'offline-queue' ? 'Copied' : 'Copy TypeScript'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-b-xl bg-[#090B0E] border-x border-b border-white/10 text-xs font-mono text-purple-300/90 overflow-x-auto max-h-[560px] leading-relaxed">
              {offlineQueueCode}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};
