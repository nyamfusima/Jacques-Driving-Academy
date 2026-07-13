import { BadgeCheck } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * A "wall of graduates" built from genuine student photos supplied by the
 * client. One feature photo plus a 2x2 grid keeps it premium, not gimmicky.
 */
export function SuccessGallery() {
  const photos = images.students;

  return (
    <RevealGroup className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
      {photos.map((src, i) => (
        <RevealItem
          key={src}
          className={cn(
            i === 0 &&
              "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
          )}
        >
          <figure
            className={cn(
              "group relative h-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[var(--shadow-soft)] ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]",
              i === 0 ? "aspect-[4/5] lg:aspect-auto" : "aspect-square",
            )}
          >
            <ImageWithFallback
              src={src}
              alt={`A happy ${site.name} student with their driver's licence`}
              className="h-full w-full"
              imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink shadow-[var(--shadow-soft)] backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5 text-green-600" />
              Passed
            </span>
          </figure>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
