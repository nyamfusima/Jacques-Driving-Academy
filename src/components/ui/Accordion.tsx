import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white transition-colors",
              isOpen ? "border-brand-200 shadow-[var(--shadow-soft)]" : "border-neutral-200",
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink sm:text-lg">
                {item.q}
              </span>
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                  isOpen ? "rotate-180 bg-brand-500 text-white" : "bg-neutral-100 text-neutral-500",
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: EASE }}
                >
                  <p className="px-5 pb-5 text-[0.975rem] leading-relaxed text-neutral-500 sm:px-6 sm:pb-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
