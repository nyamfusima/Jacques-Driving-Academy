import { forwardRef } from "react";
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "whatsapp" | "outline" | "ghost" | "white" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/30 " +
  "disabled:opacity-60 disabled:pointer-events-none select-none whitespace-nowrap active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[var(--shadow-glow)] hover:bg-brand-600 hover:-translate-y-0.5",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_14px_34px_-12px_rgba(37,211,102,0.6)] hover:bg-[#1ebe5b] hover:-translate-y-0.5",
  outline:
    "border-2 border-neutral-200 bg-white text-ink hover:border-brand-300 hover:text-brand-600 hover:-translate-y-0.5 shadow-sm",
  ghost: "text-ink hover:bg-neutral-100",
  white:
    "bg-white text-ink shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-lg",
  dark: "bg-ink text-white hover:bg-neutral-800 hover:-translate-y-0.5 shadow-lg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: "button";
    to?: undefined;
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: "a";
    href: string;
    to?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<LinkProps, keyof CommonProps> & {
    to: string;
    as?: undefined;
    href?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref,
) {
  const classes = cn(base, variants[variant], sizes[size], className);

  // Internal navigation (react-router)
  if ("to" in props && props.to !== undefined) {
    const { as: _as, ...rest } = props as ButtonAsLink & { as?: undefined };
    void _as;
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // External / mailto / tel anchor
  if (props.as === "a") {
    const { as: _as, ...rest } = props;
    void _as;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, ...rest } = props as ButtonAsButton;
  void _as;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...rest}>
      {children}
    </button>
  );
});
