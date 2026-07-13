import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Inline brand glyphs (lucide dropped social icons) */
const socialIcons = {
  facebook: (
    <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8.4V14h2.2v7h2.9Z" />
  ),
  instagram: (
    <path d="M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6Zm0 5.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm4.3-5.7a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM19 9.9c0-1.1-.3-2.1-1.1-2.9-.8-.8-1.8-1.1-2.9-1.1-1.2-.1-4.8-.1-6 0-1.1 0-2.1.3-2.9 1.1C5.3 7.8 5 8.8 5 9.9c-.1 1.2-.1 4.8 0 6 0 1.1.3 2.1 1.1 2.9.8.8 1.8 1.1 2.9 1.1 1.2.1 4.8.1 6 0 1.1 0 2.1-.3 2.9-1.1.8-.8 1.1-1.8 1.1-2.9.1-1.2.1-4.8 0-6Zm-1.4 7.3a2.2 2.2 0 0 1-1.3 1.3c-.9.3-3 .3-4.3.3s-3.4 0-4.3-.3a2.2 2.2 0 0 1-1.3-1.3c-.3-.9-.3-3-.3-4.3s0-3.4.3-4.3A2.2 2.2 0 0 1 7.7 7c.9-.3 3-.3 4.3-.3s3.4 0 4.3.3a2.2 2.2 0 0 1 1.3 1.3c.3.9.3 3 .3 4.3s0 3.4-.3 4.3Z" />
  ),
  tiktok: (
    <path d="M16.5 5c.3 1.6 1.2 2.9 2.7 3.4v2.4c-1-.1-2-.4-2.9-.9v4.6c0 3-2.2 5-4.9 5-2.4 0-4.4-1.7-4.4-4.2 0-2.7 2.3-4.5 5-4V14c-.3-.1-.6-.1-.9-.1-1.2 0-2 .8-2 1.9 0 1 .8 1.8 1.9 1.8 1.2 0 2-.9 2-2.1V5h3.5Z" />
  ),
  youtube: (
    <path d="M20.5 8.5c-.2-.9-.8-1.5-1.7-1.7C17.2 6.4 12 6.4 12 6.4s-5.2 0-6.8.4c-.9.2-1.5.8-1.7 1.7C3.1 10.1 3.1 12 3.1 12s0 1.9.4 3.5c.2.9.8 1.5 1.7 1.7 1.6.4 6.8.4 6.8.4s5.2 0 6.8-.4c.9-.2 1.5-.8 1.7-1.7.4-1.6.4-3.5.4-3.5s0-1.9-.4-3.5ZM10.4 14.6V9.4l4.3 2.6-4.3 2.6Z" />
  ),
};

type Props = {
  /** "light" for light backgrounds (footer/navbar); "onBrand" for the red CTA. */
  variant?: "light" | "onBrand";
  size?: "sm" | "md";
  className?: string;
};

const variants = {
  light:
    "bg-white text-neutral-500 ring-neutral-200 hover:bg-brand-500 hover:text-white hover:ring-brand-500",
  onBrand:
    "bg-white/15 text-white ring-white/25 hover:bg-white hover:text-brand-600 hover:ring-white",
};

const sizes = {
  sm: { box: "h-9 w-9", icon: "h-4 w-4" },
  md: { box: "h-11 w-11", icon: "h-5 w-5" },
};

export function SocialLinks({ variant = "light", size = "md", className }: Props) {
  return (
    <div className={cn("flex gap-2", className)}>
      {(Object.keys(socialIcons) as Array<keyof typeof socialIcons>).map((key) => (
        <a
          key={key}
          href={site.socials[key]}
          aria-label={key}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "grid place-items-center rounded-full shadow-sm ring-1 transition-all hover:-translate-y-0.5",
            sizes[size].box,
            variants[variant],
          )}
        >
          <svg viewBox="0 0 24 24" className={sizes[size].icon} fill="currentColor">
            {socialIcons[key]}
          </svg>
        </a>
      ))}
    </div>
  );
}
