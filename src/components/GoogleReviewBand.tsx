import { Stars } from "./ui/Stars";
import { Reveal } from "./ui/Reveal";
import { site } from "@/lib/site";

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7A21.99 21.99 0 0 0 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.2 13.2 0 0 1 11 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.94 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"
      />
    </svg>
  );
}

export function GoogleReviewBand() {
  return (
    <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:gap-6 sm:p-9 sm:text-left">
      <GoogleMark className="h-12 w-12 shrink-0" />
      <div className="flex-1">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <span className="text-4xl font-extrabold leading-none text-ink">
            {site.googleRating}
          </span>
          <Stars rating={5} size={20} />
        </div>
        <p className="mt-2 text-sm text-neutral-500">
          <span className="font-semibold text-ink">Trusted by learners</span>{" "}
          across Mdantsane and East London.
        </p>
      </div>
    </Reveal>
  );
}
