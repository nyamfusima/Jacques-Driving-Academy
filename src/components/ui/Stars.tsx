import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating = 5,
  className,
  size = 16,
}: {
  rating?: number;
  className?: string;
  size?: number;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={cn(
            i < rating ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200",
          )}
        />
      ))}
    </div>
  );
}
