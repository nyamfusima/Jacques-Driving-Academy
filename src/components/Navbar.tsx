import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { navItems } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200/70 bg-white/85 backdrop-blur-lg shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link to="/" aria-label={"Jacques Driving Academy home"}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-brand-600"
                      : "text-neutral-600 hover:text-ink",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop social links */}
        <div className="hidden items-center lg:flex">
          <SocialLinks size="sm" />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-neutral-200 bg-white text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 top-16 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 top-16 z-40 origin-top border-b border-neutral-200 bg-white p-5 shadow-xl lg:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold",
                          isActive
                            ? "bg-brand-50 text-brand-600"
                            : "text-ink hover:bg-neutral-50",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-5">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Follow us
                </span>
                <SocialLinks size="sm" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
