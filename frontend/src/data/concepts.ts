import type { Concept } from "./types";

export const concepts: Concept[] = [
  // ---------- Week 1 ----------
  {
    slug: "iaas",
    name: "Infrastructure as a Service (IaaS)",
    shortDescription:
      "Rent raw compute, storage and networking on demand. You own the OS and the runtime.",
    icon: "Server",
    weekId: "week-1",
  },
  {
    slug: "paas",
    name: "Platform as a Service (PaaS)",
    shortDescription:
      "Push code, not servers. The platform handles scaling, patching and runtime concerns for you.",
    icon: "Layers",
    weekId: "week-1",
  },
  {
    slug: "saas",
    name: "Software as a Service (SaaS)",
    shortDescription:
      "Consume finished software over the browser. Think Gmail, Salesforce, Notion.",
    icon: "Cloud",
    weekId: "week-1",
  },
  {
    slug: "virtual-machines",
    name: "Virtual Machines (VMs)",
    shortDescription:
      "A hypervisor carves one physical server into many isolated OS instances, each with its own kernel.",
    icon: "Cpu",
    weekId: "week-1",
  },
  {
    slug: "containers",
    name: "Containers",
    shortDescription:
      "Lightweight, OS-level isolation that packages an app and its dependencies into a portable image.",
    icon: "Container",
    weekId: "week-1",
  },

  // ---------- Week 2 ----------
  {
    slug: "regions",
    name: "Regions",
    shortDescription:
      "A geographic area (e.g. eu-central-1) containing one or more isolated data centers.",
    icon: "Globe",
    weekId: "week-2",
  },
  {
    slug: "availability-zones",
    name: "Availability Zones (AZs)",
    shortDescription:
      "One or more discrete data centers within a region, designed to be independent from each other.",
    icon: "Building2",
    weekId: "week-2",
  },
  {
    slug: "vpc",
    name: "Virtual Private Cloud (VPC)",
    shortDescription:
      "Your private, logically isolated network inside a cloud provider, with your own IP range and routing.",
    icon: "Network",
    weekId: "week-2",
  },
  {
    slug: "subnets",
    name: "Subnets",
    shortDescription:
      "Slices of a VPC IP range tied to a single AZ. You mark them as public or private.",
    icon: "GitBranch",
    weekId: "week-2",
  },
  {
    slug: "load-balancer",
    name: "Load Balancer",
    shortDescription:
      "A managed reverse proxy that distributes traffic across a pool of healthy backend instances.",
    icon: "Scale",
    weekId: "week-2",
  },

  // ---------- Week 3 ----------
  {
    slug: "iam",
    name: "Identity & Access Management (IAM)",
    shortDescription:
      "The system that defines who can do what on which resource, using users, roles and policies.",
    icon: "Shield",
    weekId: "week-3",
  },
  {
    slug: "principle-of-least-privilege",
    name: "Principle of Least Privilege",
    shortDescription:
      "Grant only the permissions required to do the job — nothing more, nothing less.",
    icon: "ShieldCheck",
    weekId: "week-3",
  },
  {
    slug: "identity-vs-role",
    name: "Identity vs Role",
    shortDescription:
      "An identity is \"who\"; a role is a set of permissions assumable by that identity (or a service).",
    icon: "UserCog",
    weekId: "week-3",
  },
  {
    slug: "secrets-management",
    name: "Secrets Management",
    shortDescription:
      "Centralized, audited storage and rotation of API keys, passwords and certificates.",
    icon: "KeyRound",
    weekId: "week-3",
  },

  // ---------- Week 4 ----------
  {
    slug: "object-storage",
    name: "Object Storage",
    shortDescription:
      "Flat namespace of blobs addressed by key. Cheap, infinitely scalable, ideal for assets and backups.",
    icon: "Database",
    weekId: "week-4",
  },
  {
    slug: "block-storage",
    name: "Block Storage",
    shortDescription:
      "Raw disk volumes attached to a single VM. Fast, low-latency, but tied to one instance.",
    icon: "HardDrive",
    weekId: "week-4",
  },
  {
    slug: "file-storage",
    name: "File Storage",
    shortDescription:
      "A managed NFS-style shared file system mountable from many instances at once.",
    icon: "FolderOpen",
    weekId: "week-4",
  },
  {
    slug: "routing",
    name: "Routing in the Cloud",
    shortDescription:
      "Route tables, internet gateways and NAT gateways that decide how packets leave your VPC.",
    icon: "Route",
    weekId: "week-4",
  },
  {
    slug: "cdn",
    name: "Content Delivery Network (CDN)",
    shortDescription:
      "A global cache layer that serves your static content from the edge, close to the user.",
    icon: "Zap",
    weekId: "week-4",
  },

  // ---------- Week 5 ----------
  {
    slug: "container-orchestration",
    name: "Container Orchestration",
    shortDescription:
      "A control plane (e.g. Kubernetes) that schedules, scales and heals containerized workloads.",
    icon: "Boxes",
    weekId: "week-5",
  },
  {
    slug: "serverless",
    name: "Serverless Functions",
    shortDescription:
      "Run code in response to events, scale to zero, pay only for execution time.",
    icon: "Zap",
    weekId: "week-5",
  },
  {
    slug: "containers-vs-serverless",
    name: "Containers vs Serverless",
    shortDescription:
      "How to pick between a long-running container and an event-driven function for your workload.",
    icon: "GitCompare",
    weekId: "week-5",
  },

  // ---------- Week 6 ----------
  {
    slug: "monitoring",
    name: "Monitoring (Metrics)",
    shortDescription:
      "Time-series measurements of your systems: CPU, latency, error rate, saturation.",
    icon: "Activity",
    weekId: "week-6",
  },
  {
    slug: "logging",
    name: "Logging",
    shortDescription:
      "Structured, queryable event records that explain what happened inside your services.",
    icon: "FileText",
    weekId: "week-6",
  },
  {
    slug: "cost-awareness",
    name: "Cost Awareness (FinOps)",
    shortDescription:
      "Tagging, budgets and pricing models that keep your cloud bill predictable.",
    icon: "CircleDollarSign",
    weekId: "week-6",
  },
];

/** O(1) lookup by slug */
export const conceptsBySlug: Record<string, Concept> = Object.fromEntries(
  concepts.map((c) => [c.slug, c]),
);
