import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Icon shown if the remote image fails to load. */
  fallbackIcon?: LucideIcon;
  /** Gradient used for the fallback surface. */
  fallbackClassName?: string;
  /** Colour of the fallback icon (defaults to a soft brand tint). */
  iconClassName?: string;
  loading?: "lazy" | "eager";
};

/**
 * Renders an image but degrades gracefully to an on-brand gradient
 * placeholder if it fails to load, so the page never shows a
 * broken-image icon.
 */
export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  fallbackIcon: Icon = ImageIcon,
  fallbackClassName = "from-brand-100 via-brand-50 to-white",
  iconClassName = "text-brand-400/70",
  loading = "lazy",
}: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-neutral-100", className)}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName,
          )}
        />
      )}

      {(failed || !loaded) && (
        <div
          className={cn(
            "absolute inset-0 grid place-items-center bg-gradient-to-br bg-grid",
            fallbackClassName,
          )}
          aria-hidden={!failed}
        >
          <Icon className={cn("h-10 w-10", iconClassName)} strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
