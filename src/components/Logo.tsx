import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 shadow-[var(--shadow-glow)]">
        <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden>
          <path
            d="M14 42l2.9-10.4A6 6 0 0 1 22.7 27h18.6a6 6 0 0 1 5.8 4.6L50 42"
            fill="none"
            stroke="#fff"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="12" y="40" width="40" height="10" rx="4" fill="#fff" />
          <circle cx="21" cy="50" r="4" fill="#ef4444" />
          <circle cx="43" cy="50" r="4" fill="#ef4444" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold tracking-tight",
            light ? "text-white" : "text-ink",
          )}
        >
          Jacques
        </span>
        <span
          className={cn(
            "text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
            light ? "text-white/70" : "text-brand-500",
          )}
        >
          Driving Academy
        </span>
      </span>
    </span>
  );
}
