import type { Week } from "./types";

export const weeks: Week[] = [
  {
    id: "week-1",
    number: 1,
    title: "Cloud foundations",
    description: "IaaS, PaaS, SaaS and the virtualization layer (VMs, containers) that makes the cloud possible.",
    intro:
      "Week 1 establishes the vocabulary you'll reuse for the rest of the path. You will learn the three service models, see how they map to developer responsibility, and understand the difference between virtual machines and containers — the two abstractions that underpin almost every cloud workload.",
    status: "available",
    conceptSlugs: ["iaas", "paas", "saas", "virtual-machines", "containers"],
  },
  {
    id: "week-2",
    number: 2,
    title: "Regions, Zones & Networking",
    description: "Where your data lives and how it travels: regions, AZs, VPCs, subnets and load balancers.",
    intro:
      "Week 2 is about geography and topology. You'll learn why every cloud has multiple regions, how availability zones give you fault tolerance, and how VPCs, subnets and load balancers shape the network your applications actually run on.",
    status: "available",
    conceptSlugs: ["regions", "availability-zones", "vpc", "subnets", "load-balancer"],
  },
  {
    id: "week-3",
    number: 3,
    title: "IAM & Basic Security",
    description: "Identity is the new perimeter: users, roles, policies and the principle of least privilege.",
    intro:
      "Week 3 covers the security primitives that gate every resource in a cloud account. You'll learn the difference between users, groups and roles, how to express permissions as policies, and why least-privilege is the single most important habit in cloud security.",
    status: "available",
    conceptSlugs: ["iam", "principle-of-least-privilege", "identity-vs-role", "secrets-management"],
  },
  {
    id: "week-4",
    number: 4,
    title: "Storage, Routing & CDN",
    description: "Move bytes efficiently: object vs block vs file storage, smart routing and edge caching.",
    intro:
      "Week 4 is about data in motion and at rest. You'll learn the three shapes of cloud storage, how route tables and gateways steer packets, and how a CDN puts your content physically closer to your users.",
    status: "available",
    conceptSlugs: ["object-storage", "block-storage", "file-storage", "routing", "cdn"],
  },
  {
    id: "week-5",
    number: 5,
    title: "Containers & Serverless",
    description: "Two modern deployment models: portable container images and event-driven functions.",
    intro:
      "Week 5 contrasts the two dominant deployment models in modern cloud apps. You'll learn what containers actually package, what serverless functions actually run, and how to choose between them based on workload shape.",
    status: "available",
    conceptSlugs: ["container-orchestration", "serverless", "containers-vs-serverless"],
  },
  {
    id: "week-6",
    number: 6,
    title: "Monitoring & Cost Awareness",
    description: "Observability and FinOps: know what is running, why, and what it costs you.",
    intro:
      "Week 6 closes the loop: you can't operate what you can't see, and you can't scale what you can't price. You'll learn the three pillars of observability and the habits that keep your cloud bill predictable.",
    status: "available",
    conceptSlugs: ["monitoring", "logging", "cost-awareness"],
  },
];

/** O(1) lookup by week id (e.g. "week-3") */
export const weeksById: Record<string, Week> = Object.fromEntries(
  weeks.map((w) => [w.id, w]),
);
