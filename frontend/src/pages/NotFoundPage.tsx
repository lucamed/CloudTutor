import { Link } from "react-router-dom";
import { CloudOff } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
        <CloudOff className="w-12 h-12 text-primary" />
      </div>
      <h1 className="text-5xl font-extrabold text-foreground mb-3">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 font-medium">
        Page not found
      </p>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
        Looks like this cloud endpoint doesn't exist. Head back to the study path.
      </p>
      <Link
        to="/study-path"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
      >
        Go to Study Path →
      </Link>
    </div>
  );
}
