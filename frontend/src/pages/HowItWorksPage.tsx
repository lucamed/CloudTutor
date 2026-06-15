import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  Database,
  Eye,
  FlaskConical,
  Layers,
  Lightbulb,
  Map,
  MousePointerClick,
  Network,
  PlayCircle,
  Rocket,
  Route as RouteIcon,
  Server,
  Shield,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from "lucide-react";

/**
 * Detailed "How it works" page.
 *
 * Explains the full learning experience step-by-step:
 *  1. Hero / landing
 *  2. The 6-week guided study path
 *  3. Concept deep-dive pages
 *  4. The architecture sandbox
 *  5. Tech stack & how to run it locally
 *  6. Learning philosophy
 */
export function HowItWorksPage() {
  return (
    <div className="relative">
      {/* ════════════════════════════════════════════════════════════════════
          1) PAGE HERO
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 -z-10 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 -z-10 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16 text-center">


          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            From absolute zero to{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              cloud-fluent
            </span>
            ,
            <br className="hidden sm:block" />
            in six deliberate weeks.
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            CloudTutor is an interactive, browser-based learning laboratory for
            cloud computing. You don&apos;t just read about IaaS, PaaS, SaaS,
            networking, storage and serverless — you open the lab, click
            around, and watch a real architecture take shape under your
            fingers. No AWS account, no credit card, no &quot;it works on my
            machine&quot;.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/study-path"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Rocket className="w-4 h-4" />
              Start the 6-week path
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#learning-loop"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              See the learning loop
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2) THE 4-STEP LEARNING LOOP
         ════════════════════════════════════════════════════════════════════ */}
      <section
        id="learning-loop"
        className="relative py-16 sm:py-20 border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              Every concept follows the same four-step loop.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              You don&apos;t jump straight into Terraform or the AWS console.
              Instead, every topic moves you through{" "}
              <strong>context → concept → example → trade-off</strong>. By the
              time you finish a concept, you can explain it to someone else and
              defend your choice of when to use it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningLoop.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-primary tracking-wider">
                      STEP {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3) THE 6-WEEK STUDY PATH
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 border-t border-border bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              Six weeks, six themes, twenty-five concepts.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              The path is sequenced the way a working cloud engineer actually
              thinks: foundations first, then geography &amp; networking, then
              identity, then data, then deployment models, and finally the
              observability &amp; cost habits that keep production sane.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {weeksOverview.map((week) => {
              const Icon = week.icon;
              return (
                <div
                  key={week.number}
                  className="group relative bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                      {week.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          Week {week.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {week.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {week.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {week.topics.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15 text-primary text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/study-path"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all"
            >
              Open the full study path
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4) INSIDE A CONCEPT PAGE
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              Every concept page is structured the same way.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Once you&apos;ve seen one, you&apos;ve seen them all. Click any
              card in the path to open the canonical six-block template below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {conceptAnatomy.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className={`relative bg-card rounded-2xl p-6 shadow-sm border ${block.border} hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${block.iconBg} ${block.iconColor} border ${block.iconBorder}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {block.description}
                  </p>
                  <div className="text-xs font-mono text-gray-500 dark:text-gray-500 bg-muted/40 rounded-lg p-3 border border-border">
                    {block.snippet}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5) THE ARCHITECTURE SANDBOX
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 border-t border-border bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              Build, break, and compare real architectures.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Reading about a load balancer is one thing. Dragging one between
              a public subnet and a private subnet, watching traffic fail, and
              then fixing it yourself is another. The sandbox is where the
              reading turns into muscle memory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: feature list */}
            <div className="space-y-4">
              {sandboxFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                  >
                    <div className="shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {f.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: ASCII-style diagram */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-gray-500">architecture.yaml</span>
              </div>
              <pre className="text-gray-700 dark:text-gray-300 leading-relaxed overflow-x-auto whitespace-pre">{`# You build this by drag-and-drop
region: eu-central-1
azs:    [a, b, c]

vpc:
  cidr: 10.0.0.0/16

subnets:
  - name: web
    cidr: 10.0.1.0/24
    az:  a
    type: public
  - name: api
    cidr: 10.0.2.0/24
    az:  a
    type: private

services:
  - type: load-balancer
    listens: 443
    targets: [web]
  - type: container
    image:  api:v3
    in:     api
    replicas: 3

cost_estimate:  $187 / month
availability:    99.95%`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6) HOW TO USE IT — STEP BY STEP
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              Your first 10 minutes in CloudTutor.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              The fastest way to know whether this works for you is to actually
              walk through it. Here&apos;s the exact path we recommend on day
              one.
            </p>
          </div>

          <ol className="relative border-l-2 border-border pl-6 space-y-8">
            {walkthrough.map((step) => (
              <li key={step.n} className="relative">
                <span className="absolute -left-[33px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold ring-4 ring-background">
                  {step.n}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7) UNDER THE HOOD — TECH STACK
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 border-t border-border bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              A boring, modern, fast web stack.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              CloudTutor is intentionally built with tools you already know.
              There is no exotic runtime, no proprietary DSL, no magic. If you
              can read a React component, you can read the whole codebase in an
              afternoon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-foreground">{t.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-primary" />
              Run it locally
            </h3>
            <pre className="text-sm font-mono text-gray-700 dark:text-gray-300 bg-muted/40 rounded-lg p-4 border border-border overflow-x-auto">{`# clone
git clone https://github.com/your-user/cloudtutor.git
cd cloudtutor

# install
cd frontend
npm install

# start the dev server
npm run dev    # → http://localhost:5173`}</pre>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          8) LEARNING PHILOSOPHY
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              Built around how adults actually learn.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              CloudTutor is opinionated. It assumes you have finite time, that
              you don&apos;t want to be patronized, and that you&apos;d rather
              understand ten things deeply than skim a hundred.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="relative bg-card rounded-2xl p-6 shadow-sm border border-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          9) FINAL CTA
         ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 border-t border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Enough reading. Time to build.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
            You now know exactly what CloudTutor does, how it&apos;s organized,
            and what you&apos;ll see on the other side. The fastest way to
            decide whether this works for you is to start week one.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/study-path"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Compass className="w-4 h-4" />
              Open the study path
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Back to the home page
              <span aria-hidden>↑</span>
            </Link>
          </div>
          <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            No login required · Free · Runs in your browser
          </p>
        </div>
      </section>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────

const learningLoop = [
  {
    icon: Eye,
    title: "1. Frame the problem",
    description:
      "Each concept opens with a real-world scenario: a startup migrating off a single VPS, a team that just got paged at 3am, a feature launch that needs to survive a HN hug-of-death.",
  },
  {
    icon: Lightbulb,
    title: "2. Explain the idea",
    description:
      "Plain-English first, jargon second. You'll see the mental model before you see the term, so the vocabulary sticks to a picture instead of floating in the air.",
  },
  {
    icon: FlaskConical,
    title: "3. Show real examples",
    description:
      "Every concept points to two or three real cloud services that implement it, so you can map what you just learned to the dashboards you'll use at work.",
  },
  {
    icon: CheckCircle2,
    title: "4. Surface the trade-offs",
    description:
      "Every concept ends with an honest pros/cons list. Cloud is full of 'it depends' — you'll learn what it depends on, not just the marketing answer.",
  },
];

const weeksOverview = [
  {
    number: 1,
    title: "Cloud foundations",
    description:
      "The vocabulary you'll reuse for the rest of the path: IaaS, PaaS, SaaS, virtual machines, containers.",
    topics: ["IaaS", "PaaS", "SaaS", "VMs", "Containers"],
    icon: Layers,
  },
  {
    number: 2,
    title: "Regions, Zones & Networking",
    description:
      "Where your data lives and how it travels: regions, AZs, VPCs, subnets, load balancers.",
    topics: ["Regions", "AZs", "VPC", "Subnets", "Load Balancer"],
    icon: Network,
  },
  {
    number: 3,
    title: "IAM & basic security",
    description:
      "Identity is the new perimeter: users, roles, policies, least privilege, secrets management.",
    topics: ["IAM", "Least privilege", "Roles", "Secrets"],
    icon: Shield,
  },
  {
    number: 4,
    title: "Storage, routing & CDN",
    description:
      "Move bytes efficiently: object vs block vs file storage, route tables, edge caching.",
    topics: ["Object", "Block", "File", "Routing", "CDN"],
    icon: Database,
  },
  {
    number: 5,
    title: "Containers & serverless",
    description:
      "Two modern deployment models: portable container images and event-driven functions.",
    topics: ["Orchestration", "Lambda", "Pick the right one"],
    icon: Server,
  },
  {
    number: 6,
    title: "Monitoring & cost awareness",
    description:
      "Observability and FinOps: know what is running, why, and what it costs you every month.",
    topics: ["Metrics", "Logs", "FinOps"],
    icon: Eye,
  },
];

const conceptAnatomy = [
  {
    title: "What it is",
    description:
      "A 2–3 paragraph plain-English definition. The mental model, not the Wikipedia article.",
    snippet: "A load balancer is a managed\nreverse proxy that distributes\nincoming traffic across a pool\nof healthy backend instances.",
    icon: BookOpen,
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    iconBorder: "border-primary/20",
  },
  {
    title: "Real-world examples",
    description:
      "Two or three named services that implement this concept, with a sentence on what they actually do.",
    snippet: "• AWS Application LB\n• GCP Cloud Load Balancing\n• Azure Application Gateway",
    icon: FlaskConical,
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    iconBorder: "border-blue-500/20",
  },
  {
    title: "When to use it",
    description:
      "Bulleted, opinionated list of the situations where this concept is the right tool for the job.",
    snippet: "✔ More than one backend\n✔ Traffic is spiky\n✔ You need zero-downtime deploys",
    icon: Lightbulb,
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    iconBorder: "border-emerald-500/20",
  },
  {
    title: "Pros & cons",
    description:
      "An honest two-column list. What this concept gives you, and what it costs you in return.",
    snippet: "Pros: scalable, managed\nCons: vendor lock-in, debugging\n      happens at the provider layer",
    icon: ArrowRight,
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    iconBorder: "border-violet-500/20",
  },
  {
    title: "Summary diagram",
    description:
      "A short ASCII or text block that fits on a single screen. Great for the night-before-the-interview review.",
    snippet: "client → DNS → LB → [web, web]\n                  → [api, api]\n                  → cache → DB",
    icon: Sparkles,
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    iconBorder: "border-amber-500/20",
  },
  {
    title: "Prev / next concept",
    description:
      "Linear navigation inside the week, plus a button to jump back to the week overview. No dead ends.",
    snippet: "← Principle of least privilege\nNext: Secrets management →",
    icon: Map,
    border: "border-slate-500/20",
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-500",
    iconBorder: "border-slate-500/20",
  },
];

const sandboxFeatures = [
  {
    icon: MousePointerClick,
    title: "Drag-and-drop building blocks",
    description:
      "VPCs, subnets, load balancers, containers, queues, databases — placed on a visual canvas the way you'd sketch them on a whiteboard.",
  },
  {
    icon: Zap,
    title: "Live cost & availability estimates",
    description:
      "Every change recomputes a rough monthly bill and an availability number, so you feel the trade-off between redundancy and price in real time.",
  },
  {
    icon: Shield,
    title: "Misconfiguration detector",
    description:
      "Put a database in a public subnet, forget an IAM role, leave a security group wide open — the sandbox tells you, and explains how to fix it.",
  },
  {
    icon: Wrench,
    title: "Exportable as YAML",
    description:
      "When you're happy with a design, export it. The same file is the contract you'd hand to a real Terraform module or a cloud architect.",
  },
];

const walkthrough = [
  {
    n: 1,
    title: "Land on the home page",
    description:
      "The hero tells you the headline promise and the three numbers that matter: 6 weeks, 20+ concepts, an architecture sandbox. From there you can either jump straight into the path or read this page first.",
  },
  {
    n: 2,
    title: "Open the Study Path",
    description:
      "You'll see six week cards. Each card tells you what theme it covers, how many concepts are inside, and whether the content is available or coming soon. Pick the first one.",
  },
  {
    n: 3,
    title: "Pick a concept card",
    description:
      "Inside a week, concepts are ordered from foundational to advanced. Hovering shows the short description; clicking opens the deep-dive page.",
  },
  {
    n: 4,
    title: "Read the six blocks",
    description:
      "What it is → real-world examples → when to use it → pros & cons → summary → next. Skim or deep-read, your call. The browser remembers your scroll position.",
  },
  {
    n: 5,
    title: "Open the architecture sandbox",
    description:
      "Once you've covered at least weeks 1–2, open the sandbox. Build a tiny web stack: a VPC, a public subnet for a load balancer, a private subnet for two API containers. Watch the cost and availability change as you edit.",
  },
  {
    n: 6,
    title: "Break it on purpose",
    description:
      "Put the database in a public subnet. Remove the IAM role. Delete an availability zone. The sandbox will surface what fails and why. This is where the reading becomes intuition.",
  },
  {
    n: 7,
    title: "Export and reflect",
    description:
      "When a design is good, export the YAML. Compare it to the summary diagram in the matching concept page. If they match, you've understood the concept — not just memorized it.",
  },
];

const techStack = [
  {
    name: "React + TypeScript",
    description:
      "Every page is a typed component. No hidden runtime magic, no surprise props.",
    icon: Code2,
  },
  {
    name: "Vite",
    description:
      "Sub-second dev server, instant HMR. The whole project boots in under a second on a laptop.",
    icon: Zap,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first styling. The visual language is consistent across every page and easy to tweak.",
    icon: Sparkles,
  },
  {
    name: "React Router",
    description:
      "Client-side routing for /, /study-path, /study-path/:weekId and /concepts/:slug. Deep links just work.",
    icon: RouteIcon,
  },
];

const principles = [
  {
    icon: Target,
    title: "Concepts over certifications",
    description:
      "We don't teach you to pass a multiple-choice test. We teach you to read a cloud bill, a Terraform plan, or a production incident and know what it's telling you.",
  },
  {
    icon: Layers,
    title: "Sequenced, not encyclopedic",
    description:
      "The order matters. Each week builds on the mental models from the previous one, so you're never dropped into a topic cold.",
  },
  {
    icon: Wrench,
    title: "Build while you read",
    description:
      "Every concept is paired with a sandbox you can poke at. Reading without building is how you forget in a week.",
  },
  {
    icon: Brain,
    title: "Trade-offs, not rules",
    description:
      "Cloud engineering is a stack of 'it depends'. We tell you what it depends on, give you the heuristic, and let you make the call.",
  },
];
