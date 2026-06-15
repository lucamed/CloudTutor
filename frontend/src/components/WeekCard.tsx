import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { Week } from "../data/types";

interface WeekCardProps {
  week: Week;
}

const weekAccents: Record<number, { bg: string; border: string; text: string; dot: string }> = {
  1: { bg: "bg-blue-500/10",   border: "border-blue-500/20",   text: "text-blue-500",   dot: "bg-blue-500" },
  2: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-500", dot: "bg-violet-500" },
  3: { bg: "bg-emerald-500/10",border: "border-emerald-500/20",text: "text-emerald-500",dot: "bg-emerald-500" },
  4: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-500", dot: "bg-orange-500" },
  5: { bg: "bg-pink-500/10",   border: "border-pink-500/20",   text: "text-pink-500",   dot: "bg-pink-500" },
  6: { bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   text: "text-cyan-500",   dot: "bg-cyan-500" },
};

/**
 * WeekCard — navigates to the week detail page on click.
 * Shows title, description, concept count, and status.
 */
export function WeekCard({ week }: WeekCardProps) {
  const isAvailable = week.status === "available";
  const accent = weekAccents[week.number] ?? weekAccents[1];

  const cardContent = (
    <article
      className={`group relative bg-card rounded-2xl border border-border shadow-sm transition-all duration-300 overflow-hidden ${
        isAvailable
          ? "hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 cursor-pointer"
          : "opacity-70 cursor-not-allowed"
      }`}
    >
      {/* Ambient hover gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="relative p-6">
        {/* Week badge + status */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${accent.bg} ${accent.border} border font-bold text-base ${accent.text}`}
            >
              {week.number}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Week {week.number}
            </span>
          </div>


        </div>

        {/* Title + description */}
        <h2 className="text-lg font-bold text-foreground mb-2 leading-snug">
          {week.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 line-clamp-3">
          {week.description}
        </p>

        {/* Concepts count pill */}
        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-card border border-border text-xs text-gray-500 dark:text-gray-400 font-medium">
            📖 {week.conceptSlugs.length} concepts
          </span>
        </div>

        {/* CTA */}
        <div
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
            isAvailable
              ? "text-primary group-hover:gap-3"
              : "text-gray-400"
          }`}
        >
          {isAvailable ? "Open week" : "Notify me"}
          {isAvailable && (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </article>
  );

  if (!isAvailable) {
    return cardContent;
  }

  return (
    <Link to={`/study-path/${week.id}`} className="block">
      {cardContent}
    </Link>
  );
}
