import { Check, MessageCircle, Sparkles } from "lucide-react";
import type { CoursePackage } from "@/lib/data";
import { Button } from "./ui/Button";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CoursePackageCard({ pkg }: { pkg: CoursePackage }) {
  const Icon = pkg.icon;
  const popular = pkg.popular;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7",
        popular
          ? "border-brand-200 shadow-[var(--shadow-card)] ring-1 ring-brand-100"
          : "border-neutral-200 shadow-[var(--shadow-soft)] hover:border-brand-200 hover:shadow-[var(--shadow-card)]",
      )}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-[var(--shadow-glow)]">
          <Sparkles className="h-3.5 w-3.5" />
          Most Popular
        </span>
      )}

      <div className="flex items-center gap-3">
        <span
          className={cn(
            "grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors",
            popular
              ? "bg-brand-500 text-white"
              : "bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white",
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-ink">{pkg.code}</h3>
          <p className="truncate text-xs font-semibold uppercase tracking-wide text-brand-500">
            {pkg.vehicle}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-500">{pkg.tagline}</p>

      <div className="mt-5 flex items-end gap-1.5">
        <span className="text-4xl font-extrabold tracking-tight text-ink">
          {pkg.headlinePrice}
        </span>
        <span className="mb-1 text-sm text-neutral-400">{pkg.headlineNote}</span>
      </div>

      <div className="my-6 h-px w-full bg-neutral-100" />

      <ul className="flex flex-col gap-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-600">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-100 text-green-600">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Pricing tiers */}
      <div className="mt-6 grid grid-cols-2 gap-2">
        {pkg.tiers.map((t) => (
          <div
            key={t.label}
            className="rounded-xl bg-neutral-50 px-3 py-2 ring-1 ring-neutral-100"
          >
            <p className="text-[0.7rem] font-medium text-neutral-400">{t.label}</p>
            <p className="text-sm font-bold text-ink">
              {t.price}
              {t.sub && (
                <span className="ml-1 text-[0.65rem] font-normal text-neutral-400">
                  {t.sub}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <Button
        as="a"
        href={whatsappLink(pkg.ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        variant={popular ? "whatsapp" : "outline"}
        size="md"
        className="mt-7 w-full"
      >
        <MessageCircle className="h-4 w-4" />
        Book {pkg.code}
      </Button>
    </div>
  );
}
