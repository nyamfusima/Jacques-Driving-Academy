/**
 * Tiny classnames helper that joins truthy class fragments.
 * (Lightweight stand-in for clsx so the demo has zero extra deps.)
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
