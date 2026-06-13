import { ArrowRight, Server, Layers, Cloud, Cpu, Boxes, Globe, Building2, Network, GitBranch, Scale, Shield, ShieldCheck, UserCog, KeyRound, Database, HardDrive, FolderOpen, Route, Zap, Activity, FileText, CircleDollarSign, GitCompare } from "lucide-react";
import { Link } from "react-router-dom";
import type { Concept } from "../data/types";

// Map lucide icon name strings to actual components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Layers,
  Cloud,
  Cpu,
  Boxes,
  Globe,
  Building2,
  Network,
  GitBranch,
  Scale,
  Shield,
  ShieldCheck,
  UserCog,
  KeyRound,
  Database,
  HardDrive,
  FolderOpen,
  Route,
  Zap,
  Activity,
  FileText,
  CircleDollarSign,
  GitCompare,
  Container: Boxes, // alias
};

interface ConceptCardProps {
  concept: Concept;
  index: number;
}

export function ConceptCard({ concept, index }: ConceptCardProps) {
  const IconComponent = iconMap[concept.icon] ?? Cloud;

  return (
    <Link
      to={`/concepts/${concept.slug}`}
      id={`concept-card-${concept.slug}`}
      className="group block bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="relative p-5">
        {/* Ambient hover gradient */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="relative">
          {/* Icon + index */}
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-gray-400 dark:text-gray-600 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Name */}
          <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
            {concept.name}
          </h3>

          {/* Short description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {concept.shortDescription}
          </p>

          {/* CTA */}
          <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
            Learn more
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
