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
      {light ? (
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-white">
          <img
            src="/images/logo.jpg"
            alt="Jacques Driving Academy"
            className="h-9 w-9 object-contain"
          />
        </span>
      ) : (
        <img
          src="/images/logo.jpg"
          alt="Jacques Driving Academy"
          className="h-11 w-11 object-contain mix-blend-multiply"
        />
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-tight",
            light ? "text-white" : "text-ink",
          )}
        >
          Jacques
        </span>
        <span
          className={cn(
            "text-[0.68rem] font-semibold uppercase tracking-[0.2em]",
            light ? "text-white/70" : "text-brand-600",
          )}
        >
          Driving Academy
        </span>
      </span>
    </span>
  );
}
