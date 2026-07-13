import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll behaviour for the SPA:
 * - navigating to a "#id" hash scrolls that section into view (works when
 *   coming from another page too, once the section has rendered),
 * - any other navigation resets to the top.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // Wait a frame so the target section has mounted after route change.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0, left: 0 });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}
