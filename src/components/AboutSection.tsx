import { SectionHeading } from "./ui/SectionHeading";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { WhyChoose } from "./WhyChoose";
import { Reveal } from "./ui/Reveal";
import { company } from "@/lib/data";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)] ring-1 ring-black/5">
              <ImageWithFallback
                src={images.aboutStory}
                alt={`A ${site.name} student with their new licence`}
                className="aspect-[4/5] w-full"
                imgClassName="object-top"
              />
            </div>
          </Reveal>
          <Reveal direction="left">
            <SectionHeading
              align="left"
              title="A registered driving school that puts learners first"
              subtitle={company.intro}
            />
          </Reveal>
        </div>

        <div className="mt-16">
          <WhyChoose />
        </div>
      </div>
    </section>
  );
}
