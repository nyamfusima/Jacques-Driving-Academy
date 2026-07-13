import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { whatsappLink, site } from "@/lib/site";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16.04 4C9.42 4 4.05 9.37 4.05 15.99c0 2.11.55 4.16 1.6 5.98L4 28l6.2-1.62a11.9 11.9 0 0 0 5.83 1.49h.01c6.62 0 11.99-5.37 11.99-11.99C28.03 9.37 22.66 4 16.04 4Zm0 21.86h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.96.98-3.59-.24-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.83 9.83 0 0 1 2.9 7.02c0 5.47-4.45 9.86-9.97 9.86Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 900);
    const t2 = setTimeout(() => setShowTip(true), 2200);
    const t3 = setTimeout(() => setShowTip(false), 9000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex items-end gap-2 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-1 hidden max-w-[15rem] rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-card)] ring-1 ring-neutral-200 sm:block"
          >
            <button
              onClick={() => setShowTip(false)}
              className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-ink text-white"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm font-semibold text-ink">
              👋 Ready to book a lesson?
            </p>
            <p className="mt-0.5 text-xs text-neutral-500">
              Chat with {site.shortName} on WhatsApp. We usually reply in minutes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={mounted ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-8px_rgba(37,211,102,0.7)] sm:h-16 sm:w-16"
        onMouseEnter={() => setShowTip(false)}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.4s]" />
        <WhatsAppGlyph className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </motion.a>
    </div>
  );
}
