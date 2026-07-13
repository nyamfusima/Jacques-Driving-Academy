import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  current,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  current: string;
}) {
  return (
    <section className="border-b border-neutral-200 bg-sand-50 pt-28 pb-14 sm:pt-32 sm:pb-16">
      <div className="container-x">
        <nav
          className="mb-4 flex items-center gap-1.5 text-sm text-neutral-500"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-brand-700">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-ink">{current}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-[1.7] text-neutral-600">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
