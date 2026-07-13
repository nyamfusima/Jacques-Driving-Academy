import { Check, MessageCircle } from "lucide-react";
import type { CoursePackage } from "@/lib/data";
import { Button } from "./ui/Button";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CoursePackageCard({ pkg }: { pkg: CoursePackage }) {
  const popular = pkg.popular;

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-white p-7 transition-shadow duration-300 sm:p-8",
        popular
          ? "border-brand-200 shadow-[var(--shadow-card)]"
          : "border-neutral-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)]",
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">
            {pkg.code}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{pkg.vehicle}</p>
        </div>
        {popular && (
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Most popular
          </span>
        )}
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-tight text-ink">
          {pkg.headlinePrice}
        </span>
        <span className="text-sm text-neutral-500">{pkg.headlineNote}</span>
      </div>

      <div className="my-6 h-px w-full bg-neutral-100" />

      <ul className="flex flex-1 flex-col gap-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[0.95rem] text-neutral-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-neutral-500">
        {pkg.tiers.slice(1).map((t) => (
          <span key={t.label}>
            <span className="text-neutral-400">{t.label}:</span>{" "}
            <span className="font-semibold text-ink">{t.price}</span>
            {t.sub ? ` ${t.sub}` : ""}
          </span>
        ))}
      </div>

      <Button
        as="a"
        href={whatsappLink(pkg.ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        variant={popular ? "whatsapp" : "outline"}
        size="lg"
        className="mt-7 w-full"
      >
        <MessageCircle className="h-4 w-4" />
        Chat on WhatsApp
      </Button>
    </div>
  );
}
