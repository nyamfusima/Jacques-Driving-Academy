import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageHero({
  title,
  subtitle,
  crumbs,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-neutral-50 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-100/60 blur-[90px]" />
      <div className="container-x relative">
        {crumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-center gap-1.5 text-sm text-neutral-400"
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.to ? (
                  <Link to={c.to} className="hover:text-brand-600">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-neutral-600">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="text-balance text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-500"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
