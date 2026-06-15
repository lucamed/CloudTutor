import React from "react";
import { CloudRain } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: "How it works", to: "/how-it-works" },
  { label: "Study Path", to: "/study-path" },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                <CloudRain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight">CloudTutor</span>
            </Link>

            <nav className="flex items-center gap-2 sm:gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to ||
                  (link.to !== "/" && location.pathname.startsWith(link.to));
                return (
                  <Link
                    key={link.to + link.label}
                    to={link.to}
                    className={`hidden sm:inline-block text-sm font-medium transition-colors ${isActive
                        ? "text-primary"
                        : "text-gray-600 dark:text-gray-300 hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-card py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CloudTutor. Personal Study Laboratory.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built with React &amp; Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
