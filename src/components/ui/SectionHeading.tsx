import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: Props) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "text-balance text-[2rem] font-bold leading-[1.15] sm:text-[2.5rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-[1.7]",
            light ? "text-white/80" : "text-neutral-500",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
