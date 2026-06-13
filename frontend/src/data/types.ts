// Domain types for CloudTutor content.
// All content is static, hardcoded in data/*.ts for now.

export type WeekStatus = "available" | "coming-soon";

export interface Week {
  /** slug used in URL: week-1, week-2, ... */
  id: string;
  /** 1-based week number */
  number: number;
  title: string;
  /** Short description shown on the study-path card */
  description: string;
  /** One-line intro shown on the week detail page */
  intro: string;
  status: WeekStatus;
  /** Ordered list of concept slugs in this week */
  conceptSlugs: string[];
}

export interface Concept {
  /** URL slug: iaas, paas, saas, virtual-machines, containers, ... */
  slug: string;
  /** Display name: "Infrastructure as a Service (IaaS)" */
  name: string;
  /** 1-2 sentence short description (used on cards) */
  shortDescription: string;
  /** icon hint (lucide icon name) for the card */
  icon: string;
  /** Concept slugs that come before this one (within the same week) for prev/next */
  weekId: string;
}

/** Extended content for the concept detail page */
export interface ConceptContent {
  slug: string;
  /** 1-3 sentence clear definition */
  whatItIs: string;
  /** 2-3 named real-world services (descriptions only, no integration) */
  examples: { name: string; description: string }[];
  /** Typical use cases */
  whenToUse: string[];
  /** Trade-offs */
  pros: string[];
  cons: string[];
  /** Optional textual "diagram" / summary box (ASCII or pseudo-code) */
  summary?: string;
}
