import type { ConceptContent } from "./types";

/**
 * Extended content for each concept detail page.
 * Indexed by concept slug. Every slug referenced in data/concepts.ts MUST have an entry here
 * (and vice-versa) — see `assertContentCoverage` below.
 */
export const conceptContent: Record<string, ConceptContent> = {
  // ====================== WEEK 1 ======================
  "iaas": {
    slug: "iaas",
    whatItIs:
      "Infrastructure as a Service is the most basic cloud service model: the provider runs the physical hardware, hypervisor, storage and network, and you rent virtual machines, disks and IP addresses by the second or hour. You choose the OS, install the runtime, patch it, and decide what runs on it.",
    examples: [
      {
        name: "Amazon EC2",
        description:
          "Resizable virtual machines with hundreds of instance types, billed by the second.",
      },
      {
        name: "Google Compute Engine (GCE)",
        description:
          "VMs on Google's global infrastructure, with live migration and custom machine types.",
      },
      {
        name: "Azure Virtual Machines",
        description:
          "Windows- and Linux-flavored VMs tightly integrated with Active Directory and Azure networking.",
      },
    ],
    whenToUse: [
      "You need full control of the OS, kernel modules or specialized hardware (GPUs, bare-metal).",
      "Your workload has long lifetimes (days/weeks) where re-paying startup cost every minute is wasteful.",
      "You're lifting-and-shifting an existing application that expects a traditional server.",
    ],
    pros: [
      "Maximum flexibility: any OS, any software stack.",
      "Granular scaling — start with 1 vCPU, end with 128.",
      "Mature ecosystem: AMIs, snapshots, custom images, dedicated hosts.",
    ],
    cons: [
      "You own patching, security, HA, scaling and backups.",
      "Idle VMs still cost money — you pay for uptime, not work done.",
      "Misconfigured networking or security groups can leak data to the internet.",
    ],
    summary:
      "┌─── You manage ───┐  ┌─── Provider manages ───┐\n│ App · Runtime    │  │ Hypervisor · Hardware   │\n│ OS · Middleware  │  │ Storage · Networking    │\n└──────────────────┘  └─────────────────────────┘",
  },

  "paas": {
    slug: "paas",
    whatItIs:
      "Platform as a Service sits one layer above IaaS: the provider also runs the OS, runtime, web server, autoscaling and patching. You push code (or a container image) and the platform takes it from source to publicly available URL.",
    examples: [
      {
        name: "Heroku",
        description:
          "Push Git, get a running app. Add-ons cover databases, caches and queues.",
      },
      {
        name: "Google App Engine",
        description:
          "Managed app platform with automatic scaling and built-in services (datastore, tasks).",
      },
      {
        name: "AWS Elastic Beanstalk",
        description:
          "Opinionated deployer on top of EC2 — you keep the underlying IaaS, the platform handles orchestration.",
      },
    ],
    whenToUse: [
      "You want to ship features, not babysit servers.",
      "Your workload fits a common shape: web app, API, scheduled job, queue worker.",
      "You're OK trading some flexibility for faster iteration.",
    ],
    pros: [
      "Drastically reduced ops surface — no OS patching, no load-balancer tuning.",
      "Built-in scaling, health checks and rollbacks.",
      "Faster onboarding for new team members.",
    ],
    cons: [
      "Less control over the runtime: you take what the platform offers.",
      "Vendor-specific APIs can create lock-in (Heroku buildpacks, App Engine services).",
      "Pricing can be opaque at scale — hidden cost of 'managed' add-ons.",
    ],
  },

  "saas": {
    slug: "saas",
    whatItIs:
      "Software as a Service is software you don't install, deploy or maintain: the provider runs the application end-to-end and you consume it over the network, usually a browser. You bring data and configuration, the provider brings the rest.",
    examples: [
      {
        name: "Google Workspace",
        description:
          "Gmail, Docs, Drive, Calendar — productivity software consumed per-seat in the browser.",
      },
      {
        name: "Salesforce",
        description:
          "Customer-relationship platform with industry-specific clouds and a vast app marketplace.",
      },
      {
        name: "Slack",
        description:
          "Messaging and integration platform replacing internal email and chat tools.",
      },
    ],
    whenToUse: [
      "The problem is a solved category (email, CRM, ticketing) and the SaaS tool fits your team.",
      "You want predictable per-seat pricing and zero ops.",
      "You need integrations the vendor has already built (SSO, audit logs, APIs).",
    ],
    pros: [
      "Zero infrastructure to manage — purely a subscription.",
      "Continuous updates with no work from your side.",
      "Built-in collaboration, sharing and admin features.",
    ],
    cons: [
      "Your data lives in someone else's system — read the security and exit clauses.",
      "Customization is limited to what the vendor exposes.",
      "Costs scale linearly with seats, so heavy usage can get expensive.",
    ],
  },

  "virtual-machines": {
    slug: "virtual-machines",
    whatItIs:
      "A virtual machine is an isolated, software-emulated computer: virtual CPU, RAM, disk, network. A hypervisor (Type 1 on bare metal, Type 2 inside an OS) carves one physical server into many VMs, each running its own kernel.",
    examples: [
      {
        name: "VMware vSphere / ESXi",
        description:
          "Type-1 hypervisor widely used in on-prem data centers and private clouds.",
      },
      {
        name: "KVM",
        description:
          "Linux kernel hypervisor powering most public-cloud IaaS.",
      },
      {
        name: "Microsoft Hyper-V",
        description:
          "Type-1 hypervisor bundled with Windows Server.",
      },
    ],
    whenToUse: [
      "You need a full OS (kernel modules, drivers, Windows) that containers cannot give you.",
      "Strong isolation between tenants is a hard requirement.",
      "You're consolidating many small workloads onto fewer physical servers.",
    ],
    pros: [
      "Full kernel + OS control, supports any OS image.",
      "Strong isolation boundary (separate kernels, hardware-assisted virtualization).",
      "Snapshots and live migration for low-downtime maintenance.",
    ],
    cons: [
      "Boot time is seconds-to-minutes; image size is GBs.",
      "Memory and disk overhead per VM (a 1 vCPU VM still reserves a full OS).",
      "Slower start-up than containers for horizontally scaling workloads.",
    ],
  },

  "containers": {
    slug: "containers",
    whatItIs:
      "A container is a process (or group of processes) whose view of the system — filesystem, network, processes — is namespaced and resource-limited by the OS kernel. The image bundles the app + dependencies, and the container runtime (containerd, CRI-O) starts it in milliseconds.",
    examples: [
      {
        name: "Docker",
        description:
          "The de-facto developer tooling for building and running container images.",
      },
      {
        name: "containerd",
        description:
          "An industry-standard runtime used by Kubernetes and many cloud services.",
      },
      {
        name: "Podman",
        description:
          "A daemonless, rootless alternative to Docker, popular in RHEL ecosystems.",
      },
    ],
    whenToUse: [
      "You want portable artifacts that run the same in dev, CI and prod.",
      "Microservices that scale horizontally and need fast cold-starts.",
      "Polyglot teams that don't want to ship a full VM per service.",
    ],
    pros: [
      "Sub-second startup, image sizes in the tens-of-MB range.",
      "Same artifact runs on a laptop, on-prem cluster, or any cloud.",
      "Encapsulates dependencies, OS libs and runtime in one immutable image.",
    ],
    cons: [
      "Weaker isolation than VMs (shared kernel; root in container ≈ root on host).",
      "Persistent storage and stateful workloads need extra care.",
      "Networking and orchestration are non-trivial — that's where Kubernetes enters.",
    ],
  },

  // ====================== WEEK 2 ======================
  "regions": {
    slug: "regions",
    whatItIs:
      "A region is a named geographic area in which a cloud provider operates one or more data centers. Each region is fully independent: a fault in us-east-1 should not affect eu-west-1. Resources (VPCs, S3 buckets, IAM) live inside a single region unless explicitly replicated.",
    examples: [
      {
        name: "AWS regions",
        description:
          "e.g. us-east-1 (N. Virginia), eu-central-1 (Frankfurt), ap-southeast-1 (Singapore).",
      },
      {
        name: "GCP regions",
        description:
          "e.g. europe-west1 (St. Ghislain), us-central1 (Iowa).",
      },
      {
        name: "Azure regions",
        description:
          "e.g. West Europe (Netherlands), East US (Virginia), paired with a 'region pair' for DR.",
      },
    ],
    whenToUse: [
      "Pick a region close to your users to minimize latency.",
      "Pick a region inside a specific legal jurisdiction for data residency.",
      "Pick a region with cheaper pricing or specific instance types you need.",
    ],
    pros: [
      "Geographic redundancy by replicating across regions.",
      "Smaller blast radius — regional outages do not take down the world.",
      "Choice of pricing, services and sustainability profile per region.",
    ],
    cons: [
      "Cross-region traffic is billed and adds latency.",
      "Not every service is available in every region.",
      "Replicating state across regions is your problem (and not free).",
    ],
  },

  "availability-zones": {
    slug: "availability-zones",
    whatItIs:
      "An Availability Zone is one or more discrete data centers inside a region, each with independent power, cooling and networking. AZs are physically close enough for synchronous replication (sub-ms RTT) but isolated enough that a single datacenter failure should not take down its peers.",
    examples: [
      {
        name: "AWS AZs",
        description:
          "us-east-1 has 6 AZs (e.g. us-east-1a, us-east-1b, ...). 'a' maps to a different physical DC per account.",
      },
      {
        name: "GCP zones",
        description:
          "Format: us-central1-a, europe-west1-b, etc. Used as a unit of failure isolation in GCP.",
      },
      {
        name: "Azure Availability Zones",
        description:
          "Enabled regions offer three or more zones; zonal services pin resources to a single zone.",
      },
    ],
    whenToUse: [
      "High-availability designs: spread compute and data across ≥2 AZs in a region.",
      "Synchronous replication of stateful data (RDS Multi-AZ, EBS snapshots between zones).",
      "Rolling deployments that need to survive a single-DC outage.",
    ],
    pros: [
      "Cheap fault tolerance — same region, no inter-region bandwidth cost.",
      "Synchronous replication is feasible thanks to low cross-AZ latency.",
      "Provider-managed failover primitives (RDS Multi-AZ, ALB cross-zone).",
    ],
    cons: [
      "Not infinite — each region has 3–6 AZs, you can't spread arbitrarily.",
      "A regional event (natural disaster, control-plane outage) can still take out all AZs.",
      "Cross-AZ traffic is cheap but not free; chatty architectures add up.",
    ],
  },

  "vpc": {
    slug: "vpc",
    whatItIs:
      "A Virtual Private Cloud is a logically isolated private network inside a cloud region. You define its IP range (a CIDR block), its subnets, route tables, gateways and security boundaries. Resources inside a VPC can talk to each other privately; egress to the internet is opt-in.",
    examples: [
      {
        name: "Amazon VPC",
        description:
          "Define a CIDR (e.g. 10.0.0.0/16), carve subnets, attach an Internet Gateway, control routing.",
      },
      {
        name: "Google VPC",
        description:
          "Global by default — subnets span regions but you can opt into regional VPCs.",
      },
      {
        name: "Azure VNet",
        description:
          "Azure's equivalent, tightly integrated with NSGs and Azure Firewall.",
      },
    ],
    whenToUse: [
      "Any non-trivial workload — every VM, container or function lives inside a VPC.",
      "Network segmentation: dev / staging / prod in separate VPCs or with peered isolation.",
      "Private connectivity to on-prem via VPN or Direct Connect.",
    ],
    pros: [
      "Strong network isolation: your traffic doesn't traverse other tenants' networks.",
      "You choose the IP space and routing topology.",
      "Native peering and transitive routing between VPCs (with caveats).",
    ],
    cons: [
      "CIDR planning is forever — overlapping ranges complicate peering later.",
      "Misconfigured security groups or NACLs can leak services to the internet.",
      "Multi-VPC topologies are easy to get wrong (N×N peering vs hub-and-spoke).",
    ],
  },

  "subnets": {
    slug: "subnets",
    whatItIs:
      "A subnet is a slice of a VPC's CIDR block tied to a single Availability Zone. The 'public' vs 'private' distinction comes from routing: a public subnet has a route to an Internet Gateway; a private subnet does not and reaches the internet only via NAT.",
    examples: [
      {
        name: "AWS subnets",
        description:
          "Public subnets host NAT gateways and ALBs; private subnets host app servers and databases.",
      },
      {
        name: "GCP subnets",
        description:
          "Subnets are regional; you can label them 'private (Google Cloud)' to block default egress.",
      },
    ],
    whenToUse: [
      "Tie one subnet = one AZ so you can spread HA across zones.",
      "Separate tiers of an app (web / app / data) into different subnets with their own route tables.",
      "Reserve CIDR room for future growth — subnets are awkward to resize later.",
    ],
    pros: [
      "Clear blast-radius boundaries: blast radius = AZ (mostly) for that tier.",
      "Granular routing and security group scope.",
      "Easy to express in diagrams and Terraform.",
    ],
    cons: [
      "Resizing subnets requires migration; overlapping ranges block future growth.",
      "Each subnet must fit in one AZ — you can't move it later.",
      "Too many subnets = operational overhead and harder debugging.",
    ],
  },

  "load-balancer": {
    slug: "load-balancer",
    whatItIs:
      "A load balancer is a managed reverse proxy in front of a pool of backend instances. It terminates connections, performs health checks, distributes traffic using a configurable algorithm (round-robin, least-connections, weighted) and offers L4 or L7 routing.",
    examples: [
      {
        name: "AWS ALB / NLB",
        description:
          "ALB is L7 (HTTP, gRPC, path/host routing). NLB is L4 (TCP/UDP, static IPs, extreme throughput).",
      },
      {
        name: "Google Cloud Load Balancing",
        description:
          "Global, anycast IP that routes to the closest healthy backend.",
      },
      {
        name: "Azure Application Gateway / Front Door",
        description:
          "Application Gateway is regional L7; Front Door is global L7 with CDN.",
      },
    ],
    whenToUse: [
      "You run more than one instance of a service and need HA + scale.",
      "You want SSL termination, sticky sessions or path-based routing.",
      "You want a single stable DNS name pointing at a changing pool of instances.",
    ],
    pros: [
      "Provider-managed: no patching, no scaling the LB itself.",
      "Built-in health checks remove bad instances from the pool automatically.",
      "Native integration with auto-scaling groups and Kubernetes Ingress.",
    ],
    cons: [
      "Per-LB-hour and per-GB pricing — many small LBs add up.",
      "Some knobs are hidden behind provider-specific config; can't tweak everything.",
      "Sticky sessions and complex routing rules are easy to misuse.",
    ],
  },

  // ====================== WEEK 3 ======================
  "iam": {
    slug: "iam",
    whatItIs:
      "Identity & Access Management is the system that defines who (identity) can do what (action) on which resource (target), and under which conditions. In a cloud account, IAM is the gate every API call passes through — no IAM allow, no API call.",
    examples: [
      {
        name: "AWS IAM",
        description:
          "Users, groups, roles, and JSON policies attached to identities or resources.",
      },
      {
        name: "Google Cloud IAM",
        description:
          "Members, roles (basic / predefined / custom) and policy bindings on the resource hierarchy.",
      },
      {
        name: "Azure RBAC",
        description:
          "Role-based access control scoped to management groups, subscriptions, resource groups or resources.",
      },
    ],
    whenToUse: [
      "Always — every account should have at least one non-root user with scoped permissions.",
      "Federating corporate identities (SSO via SAML/OIDC) into cloud roles.",
      "Granting cross-account or cross-service access via roles, not shared keys.",
    ],
    pros: [
      "Centralized audit trail of who did what via CloudTrail / Audit Logs.",
      "Fine-grained authorization without changing application code.",
      "Role assumption avoids long-lived service-account keys.",
    ],
    cons: [
      "Policy sprawl: thousands of inline policies become un-auditable.",
      "Confusing precedence rules (explicit deny wins, but only for that policy).",
      "Wildcards ('*') are easy to type and dangerous in production.",
    ],
  },

  "principle-of-least-privilege": {
    slug: "principle-of-least-privilege",
    whatItIs:
      "The principle of least privilege (PoLP) says: an identity should have exactly the permissions it needs to do its job — and no more. It's the single most important operational habit in cloud security and the cheapest way to limit blast radius when something goes wrong.",
    examples: [
      {
        name: "Scoped service roles",
        description:
          "A Lambda function's execution role grants s3:GetObject on exactly one bucket prefix, nothing else.",
      },
      {
        name: "Break-glass admin",
        description:
          "Daily work runs as a low-privilege role; admin is a separate, auditable role activated on demand.",
      },
      {
        name: "Just-in-time elevation",
        description:
          "Tools like AWS IAM Identity Center grant temporary elevated roles for a time-boxed window.",
      },
    ],
    whenToUse: [
      "Every new IAM policy — start with zero permissions and add only what tests need.",
      "Service accounts: prefer workload identity (no keys) with minimal roles.",
      "Humans: prefer federated SSO + role assumption over shared admin accounts.",
    ],
    pros: [
      "Limits blast radius of compromised credentials.",
      "Forces deliberate, reviewable decisions about access.",
      "Reduces accidental damage from `rm -rf` typed in the wrong account.",
    ],
    cons: [
      "More roles to manage, more policies to review.",
      "Developers sometimes hit permission errors and get frustrated — pair PoLP with good docs.",
      "Requires discipline: 'just give me admin' is a constant social pressure.",
    ],
  },

  "identity-vs-role": {
    slug: "identity-vs-role",
    whatItIs:
      "An identity is \"who\" — a person, a service, an application. A role is a bundle of permissions that an identity can assume, often temporarily. Roles are how you avoid embedding permissions directly into a user (or, worse, into an API key).",
    examples: [
      {
        name: "AWS IAM roles",
        description:
          "Assumable by users (via SSO) or by services (EC2 instance profiles, Lambda execution roles).",
      },
      {
        name: "GCP service accounts",
        description:
          "Identities for services, often granted IAM roles on specific resources.",
      },
    ],
    whenToUse: [
      "Workloads running in the cloud should use instance profiles / workload identity, not access keys.",
      "Cross-account access is almost always modeled as a role + trust policy.",
      "Humans should federate into roles, not log in with IAM users.",
    ],
    pros: [
      "No long-lived secrets: roles return temporary STS tokens.",
      "Same identity can have different roles in different contexts (dev vs prod).",
      "Easier to audit: 'who assumed what role, when' is a clean log line.",
    ],
    cons: [
      "Trust policies are tricky to get right (who can assume this role?).",
      "Confused-deputy attacks: a role trusted by too many principals becomes a privilege escalator.",
      "Role chaining adds latency to the first call in a session.",
    ],
  },

  "secrets-management": {
    slug: "secrets-management",
    whatItIs:
      "Secrets management is the practice of storing, accessing, rotating and auditing sensitive values (API keys, database passwords, certificates) in a dedicated, hardened system — not in environment variables, source code or config files.",
    examples: [
      {
        name: "AWS Secrets Manager",
        description:
          "Managed secret store with automatic rotation for RDS and audit via CloudTrail.",
      },
      {
        name: "HashiCorp Vault",
        description:
          "Open-source secrets engine with dynamic secrets, leases and PKI.",
      },
      {
        name: "GCP Secret Manager",
        description:
          "Versioned secrets with IAM-controlled access and audit logs.",
      },
    ],
    whenToUse: [
      "Any credential that, if leaked, would let someone impersonate you or your service.",
      "Third-party API keys (Stripe, GitHub, OpenAI) — fetch at startup, never bake into the image.",
      "TLS private keys, database passwords, OAuth client secrets.",
    ],
    pros: [
      "Centralized audit: 'who read which secret, when' is a single log line.",
      "Rotation becomes a workflow, not a fire drill.",
      "Removes secrets from git history and container images.",
    ],
    cons: [
      "A new dependency: if the secret store is down, your app can't start.",
      "Cost at scale (per-secret per-month, per-API-call).",
      "Misconfigured IAM on the store is now a single point of compromise.",
    ],
  },

  // ====================== WEEK 4 ======================
  "object-storage": {
    slug: "object-storage",
    whatItIs:
      "Object storage is a flat namespace of opaque blobs identified by a key, with metadata and HTTP-friendly access. You don't mount it like a disk — you PUT and GET over an API. It scales to billions of objects and is the cheapest storage tier in any cloud.",
    examples: [
      {
        name: "Amazon S3",
        description:
          "The canonical object store, with storage classes (Standard, IA, Glacier) and 11 9s of durability.",
      },
      {
        name: "Google Cloud Storage",
        description:
          "S3-compatible API, with strong consistency and uniform bucket-level access.",
      },
      {
        name: "Azure Blob Storage",
        description:
          "Hot, Cool and Archive tiers; integrates with Azure Data Lake for analytics.",
      },
    ],
    whenToUse: [
      "Static assets: images, videos, JS bundles, downloads.",
      "Backups, logs, analytics data lakes.",
      "Big files shared via presigned URLs.",
    ],
    pros: [
      "Effectively infinite scale and extremely high durability.",
      "Cheap — a fraction of a cent per GB-month for cold tiers.",
      "HTTP-native, versioned, and easy to expose via signed URLs.",
    ],
    cons: [
      "Not a file system — no random write, no in-place update, no directory locking.",
      "Eventual consistency in some legacy modes (though modern S3 is strongly consistent).",
      "Egress costs: serving from the wrong region can dwarf storage costs.",
    ],
  },

  "block-storage": {
    slug: "block-storage",
    whatItIs:
      "Block storage presents a raw disk volume to a single instance. The cloud provider manages the underlying durability and replication; the OS sees a normal block device it can format with ext4, xfs, NTFS, etc.",
    examples: [
      {
        name: "Amazon EBS",
        description:
          "Network-attached SSDs (gp3, io2) attached to one EC2 instance, with point-in-time snapshots to S3.",
      },
      {
        name: "Google Persistent Disk",
        description:
          "Regional PD replicates synchronously across two zones; can be attached read-only to multiple VMs.",
      },
      {
        name: "Azure Disks",
        description:
          "Premium SSD, Standard SSD, Standard HDD tiers with different latency/throughput.",
      },
    ],
    whenToUse: [
      "Boot volume of a VM and any data that needs single-digit-ms latency.",
      "Databases that need direct disk access (RDBMS, some NoSQL).",
      "Stateful applications with their own filesystem layout.",
    ],
    pros: [
      "Low latency, predictable IOPS and throughput (especially on provisioned tiers).",
      "Snapshots are cheap and incremental.",
      "Familiar model for ops teams used to local disks.",
    ],
    cons: [
      "Tied to one AZ (and usually one VM) — no native multi-instance attach.",
      "You pay for provisioned capacity and IOPS separately.",
      "No native sharing — every instance needs its own copy.",
    ],
  },

  "file-storage": {
    slug: "file-storage",
    whatItIs:
      "File storage is a managed NFS/SMB-style shared file system that many compute instances can mount at once. It gives you a real directory tree with POSIX permissions, but with the elasticity of a cloud service.",
    examples: [
      {
        name: "Amazon EFS",
        description:
          "Elastic NFS for Linux, scales to petabytes, pay per GB used.",
      },
      {
        name: "Amazon FSx",
        description:
          "Managed Windows File Server, Lustre and NetApp ONTAP.",
      },
      {
        name: "Azure Files",
        description:
          "SMB and NFS shares backed by Azure storage accounts.",
      },
    ],
    whenToUse: [
      "Legacy apps that need a shared file system (CMS uploads, build artifacts, ML datasets).",
      "Lift-and-shift of on-prem workloads that depend on file shares.",
      "Content management where many users need to read/write the same tree.",
    ],
    pros: [
      "Familiar POSIX model — works with most apps unchanged.",
      "Shared: many instances can mount the same volume concurrently.",
      "Decoupled from any single instance — no SPOF.",
    ],
    cons: [
      "Higher latency than local block storage.",
      "Usually more expensive per GB than object storage.",
      "Performance often scales with size (bigger = more throughput), not always intuitive.",
    ],
  },

  "routing": {
    slug: "routing",
    whatItIs:
      "Routing in the cloud is the set of rules that decide how a packet leaves a VPC. Route tables map destinations (CIDR blocks) to targets (local, internet gateway, NAT gateway, transit gateway, VPC peering, virtual private gateway).",
    examples: [
      {
        name: "AWS route tables",
        description:
          "Each subnet is associated with one route table; the most specific prefix wins.",
      },
      {
        name: "GCP Cloud Router",
        description:
          "Manages dynamic BGP routes between VPCs and on-prem via Cloud Interconnect.",
      },
    ],
    whenToUse: [
      "Sending private subnets to the internet via NAT without exposing them inbound.",
      "Routing traffic between peered VPCs or via a transit gateway.",
      "Sending site-to-site VPN traffic to your on-prem network.",
    ],
    pros: [
      "Centralized control: change one route, move a whole subnet.",
      "Mix dynamic (BGP) and static routes in the same table.",
      "Provider-managed gateways remove most ops burden.",
    ],
    cons: [
      "Asymmetric routing can break stateful firewalls.",
      "Most-specific-prefix wins — easy to leave a shadow route behind.",
      "Troubleshooting 'why is this traffic going out that way' requires reading the whole path.",
    ],
  },

  "cdn": {
    slug: "cdn",
    whatItIs:
      "A Content Delivery Network is a global layer of edge caches that serve your content from the location physically closest to the user. The origin stays in one region; the edges absorb reads and reduce latency and origin cost.",
    examples: [
      {
        name: "Cloudflare",
        description:
          "Massive anycast network, sits in front of most of the public internet.",
      },
      {
        name: "Amazon CloudFront",
        description:
          "AWS's CDN, integrated with S3, ALB, MediaStore and Lambda@Edge.",
      },
      {
        name: "Fastly",
        description:
          "Edge cloud with VCL/WASM compute and instant purges, popular with media companies.",
      },
    ],
    whenToUse: [
      "Static assets: JS, CSS, images, fonts, video files.",
      "Public APIs with geographically distributed users.",
      "Anything where time-to-first-byte dominates user-perceived latency.",
    ],
    pros: [
      "Lower latency and higher throughput for end users.",
      "Offloads the origin — your origin sees a fraction of the traffic.",
      "DDoS protection and TLS termination at the edge come for free.",
    ],
    cons: [
      "Cache invalidation is its own discipline (purge, surrogate-keys, version paths).",
      "Dynamic content needs careful cache-control headers or edge compute.",
      "Egress from origin to CDN can be billed both ways — watch the cost line.",
    ],
  },

  // ====================== WEEK 5 ======================
  "container-orchestration": {
    slug: "container-orchestration",
    whatItIs:
      "Container orchestration is the control plane that schedules containers across a fleet of machines, keeps them running, scales them up and down, and rolls out new versions safely. Kubernetes is the de-facto standard.",
    examples: [
      {
        name: "Kubernetes",
        description:
          "Open-source orchestrator with a vast ecosystem (Helm, ArgoCD, Istio).",
      },
      {
        name: "Amazon ECS",
        description:
          "AWS-native orchestrator, deeply integrated with IAM, ALB and CloudWatch.",
      },
      {
        name: "Google GKE",
        description:
          "Managed Kubernetes on GCP with autopilot and release channels.",
      },
    ],
    whenToUse: [
      "You run multiple services across many machines and need consistent deployments.",
      "You want self-healing (restart on crash), rolling updates and horizontal autoscaling.",
      "Your team needs a portable, declarative deployment target.",
    ],
    pros: [
      "Declarative — desired state converges to actual state automatically.",
      "Self-healing, rolling updates, and rich deployment strategies out of the box.",
      "Portable: same manifests run on EKS, GKE, AKS, on-prem.",
    ],
    cons: [
      "Steep learning curve: pods, services, ingress, network policies, CRDs…",
      "Operational overhead even when managed — control plane upgrades, node pools, DNS.",
      "Easy to over-engineer — sometimes a single VM and systemd is the right answer.",
    ],
  },

  "serverless": {
    slug: "serverless",
    whatItIs:
      "Serverless computing runs your code in response to events, scaling to zero when idle and bursting to thousands of concurrent executions when traffic spikes. You pay only for execution time and invocations — there is no server for you to size, patch or scale.",
    examples: [
      {
        name: "AWS Lambda",
        description:
          "Event-driven functions with up to 15-minute runs and 10 GB of memory.",
      },
      {
        name: "Google Cloud Functions / Cloud Run jobs",
        description:
          "Functions for HTTP/event triggers, Cloud Run jobs for batch serverless workloads.",
      },
      {
        name: "Azure Functions",
        description:
          "Event-driven with durable functions for stateful orchestrations.",
      },
    ],
    whenToUse: [
      "Event handlers: image resize on upload, webhook receivers, queue consumers.",
      "Sporadic, bursty APIs where paying for idle capacity is wasteful.",
      "Glue code between managed services (insert into DB, publish to topic, call API).",
    ],
    pros: [
      "Zero ops: no servers, no patching, no idle cost.",
      "Scales to traffic spikes automatically — no capacity planning.",
      "Per-millisecond billing makes it cheap for low-traffic APIs.",
    ],
    cons: [
      "Cold starts add latency to the first request after idle.",
      "Resource limits (time, memory, /tmp) constrain what you can run.",
      "Local development and debugging are less natural than a long-lived process.",
    ],
  },

  "containers-vs-serverless": {
    slug: "containers-vs-serverless",
    whatItIs:
      "Containers and serverless are the two dominant deployment models in modern cloud apps. The choice comes down to workload shape: long-running services vs sporadic, event-driven work, and how much control you need over the runtime.",
    examples: [
      {
        name: "Web API",
        description:
          "A long-running HTTP API with steady traffic fits a container (or a PaaS). Cold starts of serverless would hurt.",
      },
      {
        name: "Image processing",
        description:
          "A function triggered by an object upload fits serverless — pay only when an image actually arrives.",
      },
    ],
    whenToUse: [
      "Pick containers when: long-lived processes, predictable traffic, custom runtimes, stateful services.",
      "Pick serverless when: event-driven, sporadic traffic, glue code, short jobs (<15 min).",
      "Pick both: containers for the core API, serverless for cron jobs and event glue.",
    ],
    pros: [
      "Right tool for the right job: better cost and latency when chosen well.",
      "Mixing both is normal — most mature systems do.",
    ],
    cons: [
      "Two deployment pipelines, two observability stacks, two security models.",
      "Decisions are sticky — migrating a serverless function to a container touches a lot of code.",
      "Cost predictability: serverless bills spike with traffic; containers cost flat per hour.",
    ],
  },

  // ====================== WEEK 6 ======================
  "monitoring": {
    slug: "monitoring",
    whatItIs:
      "Monitoring is the practice of collecting numerical time-series signals about your system (CPU, latency, error rate, queue depth) and alerting when they cross thresholds. The four golden signals are latency, traffic, errors and saturation.",
    examples: [
      {
        name: "Prometheus + Grafana",
        description:
          "Pull-based metrics + dashboards. The de-facto open-source stack, especially with Kubernetes.",
      },
      {
        name: "Amazon CloudWatch",
        description:
          "AWS-native metrics, logs and alarms with pay-per-metric pricing.",
      },
      {
        name: "Datadog / New Relic",
        description:
          "SaaS APM with traces, logs, metrics and synthetics in one pane.",
      },
    ],
    whenToUse: [
      "Always — every production service needs a latency and an error-rate dashboard.",
      "Capacity planning: saturation tells you when to scale up or out.",
      "SLO reporting: track the SLI that backs your SLO and burn the error budget.",
    ],
    pros: [
      "Early warning before users feel the problem.",
      "Trends in metrics guide capacity and architecture decisions.",
      "Anomaly detection catches things static thresholds can't.",
    ],
    cons: [
      "High-cardinality data (per-user, per-tenant) is expensive.",
      "Alert fatigue: noisy alerts train humans to ignore pages.",
      "Metrics alone don't tell you why — you need logs and traces for that.",
    ],
  },

  "logging": {
    slug: "logging",
    whatItIs:
      "Logging is the practice of emitting structured, queryable event records from your services — one line per event with a consistent schema, correlated by request id, retained for a defined window. Logs answer 'what happened' when metrics tell you 'something is wrong'.",
    examples: [
      {
        name: "ELK / OpenSearch",
        description:
          "Elasticsearch + Logstash + Kibana, the long-standing open-source logging stack.",
      },
      {
        name: "Grafana Loki",
        description:
          "Log aggregation inspired by Prometheus — index labels, not full text.",
      },
      {
        name: "Cloud-native log services",
        description:
          "CloudWatch Logs, GCP Cloud Logging, Azure Monitor — tightly integrated with their IAM.",
      },
    ],
    whenToUse: [
      "Every request should emit a structured access log (method, path, status, duration, request id).",
      "Errors should include a stack trace and a request id for correlation with traces.",
      "Audit logs of admin actions are a compliance requirement in most regulated industries.",
    ],
    pros: [
      "Forensic detail: you can find the exact failing request after the fact.",
      "Cheap to retain at low query rates (S3 + Athena, or cold tiers).",
      "Powerful when correlated with traces and metrics by request id.",
    ],
    cons: [
      "High-cardinality fields and full-text indexing get expensive fast.",
      "Unstructured logs (free-form text, multi-line stack traces) are hard to query.",
      "Sensitive data in logs (PII, secrets) is a recurring compliance headache.",
    ],
  },

  "cost-awareness": {
    slug: "cost-awareness",
    whatItIs:
      "Cost awareness (FinOps) is the discipline of understanding, attributing and optimizing cloud spend. It combines tagging, budgets, pricing-model choices and engineering decisions so that finance, product and engineering share one view of the bill.",
    examples: [
      {
        name: "AWS Cost Explorer",
        description:
          "Break down spend by service, account, tag, region over time.",
      },
      {
        name: "Infracost",
        description:
          "Show the $/mo cost of a Terraform plan in the pull request.",
      },
      {
        name: "Reserved Instances / Savings Plans",
        description:
          "Commit to 1- or 3-year usage in exchange for up to ~70% discount vs on-demand.",
      },
    ],
    whenToUse: [
      "Tag every billable resource (env, team, product) — non-negotiable from day one.",
      "Set budgets with alerts at 50%, 80%, 100% of expected spend.",
      "Use reservations for steady-state baseline, on-demand for the rest.",
    ],
    pros: [
      "Predictable bills: finance stops being surprised, engineering gets guardrails.",
      "Cost becomes a non-functional requirement alongside latency and reliability.",
      "Removes zombie resources (forgotten volumes, idle load balancers).",
    ],
    cons: [
      "Requires a tagging taxonomy and discipline to maintain it.",
      "Reservations are a financial commitment — wrong forecasts cost real money.",
      "Optimization is a continuous practice, not a one-time project.",
    ],
    summary:
      "Tag → Budget → Report → Optimize → Repeat\n(on demand for variable, reserved for baseline)",
  },
};

/** Lookup helper used by the concept page. */
export function getConceptContent(slug: string): ConceptContent | undefined {
  return conceptContent[slug];
}
