import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function AreasMarquee() {
  const areas = [...site.areas, ...site.areas];
  return (
    <div className="border-y border-neutral-200 bg-white py-4">
      <div className="flex items-center gap-4 px-5">
        <span className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-ink sm:flex">
          <MapPin className="h-4 w-4 text-brand-600" />
          Areas we serve
        </span>
        <div className="mask-fade-x flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap pr-8">
            {areas.map((area, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-neutral-500"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
