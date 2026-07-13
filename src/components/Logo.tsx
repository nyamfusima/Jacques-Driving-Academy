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
      <img
        src="/images/logo.jpg"
        alt="Jacques Driving Academy"
        className="h-11 w-11 rounded-xl bg-white object-contain shadow-sm ring-1 ring-black/5"
      />
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
