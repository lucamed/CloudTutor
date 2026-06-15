import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 -z-10 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: copy + CTA */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Your interactive{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Cloud Computing
              </span>{" "}
              lab.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
              A hands-on playground to learn{" "}
              <span className="font-semibold text-foreground">IaaS, PaaS, SaaS</span>,
              networking, storage and serverless. Build, break and compare real
              architectures — no cloud bill, no setup.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <button
                type="button"
                id="hero-get-started"
                onClick={() => navigate("/study-path")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate("/how-it-works")}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                How it works
                <span aria-hidden>→</span>
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              No login required · Free · Runs in your browser
            </p>
          </div>

          {/* RIGHT: illustration */}
          <div className="relative">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
