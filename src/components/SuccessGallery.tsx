import { BadgeCheck } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { successStories } from "@/lib/data";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

/**
 * Celebration wall of genuine student photos supplied by the client.
 * Captions are generic (no invented names) so nothing is misrepresented.
 */
export function SuccessGallery({ limit }: { limit?: number }) {
  const photos = images.students.slice(0, limit ?? images.students.length);

  return (
    <RevealGroup className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
      {photos.map((src, i) => (
        <RevealItem key={src} className="h-full">
          <figure className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
            <ImageWithFallback
              src={src}
              alt={`A happy ${site.name} student with their licence`}
              className="aspect-[3/4] w-full"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              <BadgeCheck className="h-3.5 w-3.5" />
              PASSED
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent p-4 pt-12">
              <p className="text-sm font-bold text-white">
                {successStories[i % successStories.length].caption}
              </p>
            </figcaption>
          </figure>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
