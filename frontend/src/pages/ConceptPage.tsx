import { useParams, Link } from "react-router-dom";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, BookOpen, FlaskConical, ChevronLeft } from "lucide-react";
import { conceptsBySlug } from "../data/concepts";
import { getConceptContent } from "../data/conceptContent";
import { weeksById } from "../data/weeks";

export function ConceptPage() {
  const { slug } = useParams<{ slug: string }>();
  const concept = slug ? conceptsBySlug[slug] : undefined;
  const content = slug ? getConceptContent(slug) : undefined;

  if (!concept || !content) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Concept not found</h1>
        <p className="text-gray-500 mb-8">
          The concept you're looking for doesn't exist yet.
        </p>
        <Link
          to="/study-path"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          ← Back to Study Path
        </Link>
      </div>
    );
  }

  const week = weeksById[concept.weekId];

  // Get sibling concepts for prev/next navigation
  const weekConceptSlugs = week?.conceptSlugs ?? [];
  const currentIdx = weekConceptSlugs.indexOf(concept.slug);
  const prevSlug = currentIdx > 0 ? weekConceptSlugs[currentIdx - 1] : null;
  const nextSlug = currentIdx < weekConceptSlugs.length - 1 ? weekConceptSlugs[currentIdx + 1] : null;

  return (
    <article className="relative py-16 sm:py-20">
      {/* Background decorations */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 right-0 -z-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/study-path" className="hover:text-primary transition-colors">Study Path</Link>
          {week && (
            <>
              <span>/</span>
              <Link
                to={`/study-path/${week.id}`}
                className="hover:text-primary transition-colors"
              >
                Week {week.number}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-foreground font-medium truncate">{concept.name}</span>
        </nav>

        {/* Back button */}
        {week && (
          <Link
            to={`/study-path/${week.id}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Week {week.number}
          </Link>
        )}

        {/* Page header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {week && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                📅 Week {week.number} – {week.title}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            {concept.name}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            {concept.shortDescription}
          </p>
        </header>

        {/* ─── What it is ─── */}
        <section className="mb-10" id="what-it-is">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">What it is</h2>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.whatItIs}
            </p>
          </div>
        </section>

        {/* ─── Real-world examples ─── */}
        <section className="mb-10" id="examples">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <FlaskConical className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Real-world examples</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.examples.map((ex) => (
              <div
                key={ex.name}
                className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-primary/30 transition-colors"
              >
                <p className="font-bold text-foreground mb-1">{ex.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ex.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── When to use it ─── */}
        <section className="mb-10" id="when-to-use">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <Lightbulb className="w-5 h-5 text-emerald-500" />
            </div>
            <h2 className="text-xl font-bold text-foreground">When to use it</h2>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <ul className="space-y-3">
              {content.whenToUse.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── Pros & Cons ─── */}
        <section className="mb-10" id="pros-cons">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <ArrowRight className="w-5 h-5 text-violet-500" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Pros &amp; Cons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pros */}
            <div className="bg-card border border-emerald-500/20 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-3">
                ✅ Pros
              </p>
              <ul className="space-y-2">
                {content.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {pro}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Cons */}
            <div className="bg-card border border-red-500/20 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-3">
                ❌ Cons
              </p>
              <ul className="space-y-2">
                {content.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Summary / diagram box (optional) ─── */}
        {content.summary && (
          <section className="mb-10" id="summary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <BookOpen className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Summary</h2>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {content.summary}
              </pre>
            </div>
          </section>
        )}

        {/* ─── Prev / Next concept navigation ─── */}
        {(prevSlug || nextSlug) && (
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
            {prevSlug ? (
              <Link
                to={`/concepts/${prevSlug}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Previous concept
              </Link>
            ) : (
              <div />
            )}
            {nextSlug && (
              <Link
                to={`/concepts/${nextSlug}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
              >
                Next concept
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
