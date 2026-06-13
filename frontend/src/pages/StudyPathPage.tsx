import { Link } from "react-router-dom";
import { weeks } from "../data/weeks";
import { WeekCard } from "../components/WeekCard";

export function StudyPathPage() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Background decorations */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Study Path</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            📚 Study Path
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            From zero to cloud-fluent in{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              6 weeks.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Pick a week and dive into bite-sized lessons. Click any card to explore
            all the concepts in that week.
          </p>
        </div>

        {/* Week grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeks.map((week) => (
            <WeekCard key={week.id} week={week} />
          ))}
        </div>
      </div>
    </section>
  );
}
