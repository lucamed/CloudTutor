import { Cloud, Server, Database, Network, Shield, Zap, Cpu } from "lucide-react";

/**
 * Decorative illustration for the hero.
 * Pure CSS gradient + abstract cloud icons + connection lines (SVG).
 * No real image — keeps the bundle small and theme-aware.
 */
export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-xl mx-auto">
      {/* Ambient gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent dark:from-primary/25 dark:via-primary/10"
      />
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-400/10 via-transparent to-teal-400/10 blur-2xl"
      />

      {/* Main glass card */}
      <div className="relative h-full w-full rounded-3xl border border-border bg-card/70 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5" />

        {/* Top cloud node */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 shadow-sm">
            <Cloud className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <span className="mt-2 text-xs font-mono text-gray-500 dark:text-gray-400">cloud</span>
        </div>

        {/* Connection lines (SVG) */}
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g className="text-primary" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none">
            <path d="M200,90 L120,180" />
            <path d="M200,90 L200,200" />
            <path d="M200,90 L280,180" />
            <path d="M120,250 L200,320" />
            <path d="M280,250 L200,320" />
            <path d="M200,200 L200,320" />
          </g>
        </svg>

        {/* Middle service nodes */}
        <div className="absolute top-[42%] left-[18%] -translate-y-1/2 flex flex-col items-center">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <Server className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
          </div>
          <span className="mt-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">IaaS</span>
        </div>

        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <Cpu className="w-6 h-6 text-purple-500" strokeWidth={1.5} />
          </div>
          <span className="mt-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">PaaS</span>
        </div>

        <div className="absolute top-[42%] right-[18%] -translate-y-1/2 flex flex-col items-center">
          <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
            <Zap className="w-6 h-6 text-green-500" strokeWidth={1.5} />
          </div>
          <span className="mt-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">SaaS</span>
        </div>

        {/* Bottom nodes */}
        <div className="absolute bottom-10 left-[20%] flex flex-col items-center">
          <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <Database className="w-6 h-6 text-yellow-500" strokeWidth={1.5} />
          </div>
          <span className="mt-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">storage</span>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20">
            <Network className="w-6 h-6 text-teal-500" strokeWidth={1.5} />
          </div>
          <span className="mt-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">network</span>
        </div>

        <div className="absolute bottom-10 right-[20%] flex flex-col items-center">
          <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20">
            <Shield className="w-6 h-6 text-red-500" strokeWidth={1.5} />
          </div>
          <span className="mt-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">iam</span>
        </div>
      </div>


    </div>
  );
}
