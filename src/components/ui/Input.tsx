import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** "dark" adapts the field for use over a dark/coloured background. */
  variant?: "light" | "dark";
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, variant = "light", type, ...props },
  ref,
) {
  const palette =
    variant === "dark"
      ? "border-white/25 bg-white/10 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/20 backdrop-blur-sm"
      : "border-neutral-200 bg-white text-ink placeholder:text-neutral-400 focus:border-brand-400 focus:ring-brand-500/15";

  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-12 w-full rounded-xl border px-4 text-sm shadow-sm outline-none transition-colors focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60",
        palette,
        className,
      )}
      {...props}
    />
  );
});
