import { useParams, Link } from "react-router-dom";
import { weeksById } from "../data/weeks";
import { concepts } from "../data/concepts";
import { ConceptCard } from "../components/ConceptCard";

export function WeekPage() {
  const { weekId } = useParams<{ weekId: string }>();
  const week = weekId ? weeksById[weekId] : undefined;

  if (!week) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Week not found</h1>
        <p className="text-gray-500 mb-8">
          The week you're looking for doesn't exist.
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

  // Get the concepts for this week
  const weekConcepts = concepts.filter((c) => c.weekId === week.id);

  return (
    <section className="relative py-20 sm:py-24">
      {/* Background decorations */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/study-path" className="hover:text-primary transition-colors">Study Path</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Week {week.number}</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold text-lg">
              {week.number}
            </span>

          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
            Week {week.number} —{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              {week.title}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {week.intro}
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-gray-600 dark:text-gray-400 font-medium">
            📖 {weekConcepts.length} concepts
          </span>
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border ${
              week.status === "available"
                ? "bg-primary/10 border-primary/20 text-primary"
                : "bg-gray-100 dark:bg-slate-800 border-border text-gray-500"
            }`}
          >
            {week.status === "available" ? "✅ Available" : "🔒 Coming Soon"}
          </span>
        </div>

        {/* Concept grid */}
        {weekConcepts.length > 0 ? (
          <>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-bold text-foreground">Concepts</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {weekConcepts.map((concept, idx) => (
                <ConceptCard key={concept.slug} concept={concept} index={idx} />
              ))}
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Content for this week is coming soon.
            </p>
          </div>
        )}

        {/* Navigation between weeks */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
          {week.number > 1 && (
            <Link
              to={`/study-path/week-${week.number - 1}`}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Week {week.number - 1}
            </Link>
          )}
          <div className="flex-1" />
          {week.number < 6 && (
            <Link
              to={`/study-path/week-${week.number + 1}`}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all"
            >
              Week {week.number + 1}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
