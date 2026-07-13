import { MessageCircle, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { BookingForm } from "@/components/BookingForm";
import { AreasMarquee } from "@/components/AreasMarquee";
import { AboutSection } from "@/components/AboutSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CoursePackageCard } from "@/components/CoursePackageCard";
import { SuccessGallery } from "@/components/SuccessGallery";
import { GoogleReviewBand } from "@/components/GoogleReviewBand";
import { FaqSection } from "@/components/FaqSection";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { coursePackages, faqs } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Booking form (overlaps the hero) ----------------------------- */}
      <div
        id="book"
        className="relative z-20 -mt-32 mb-16 scroll-mt-28 sm:-mt-36 sm:mb-20"
      >
        <div className="container-x">
          <BookingForm />
        </div>
      </div>

      <AreasMarquee />
      <AboutSection />

      {/* Pricing ------------------------------------------------------ */}
      <section id="pricing" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Simple, honest pricing"
            subtitle="Code 8 and Code 10 courses. Every full course includes free vehicle hire for your test."
          />
          <RevealGroup className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {coursePackages.map((pkg) => (
              <RevealItem key={pkg.id} className="h-full">
                <CoursePackageCard pkg={pkg} />
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-6 text-center text-sm text-neutral-500">
            Prefer to pay as you go? Single lessons are available. Just ask on
            WhatsApp.
          </p>
        </div>
      </section>

      {/* Gallery ------------------------------------------------------ */}
      <section id="gallery" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            align="left"
            title="Gallery"
            subtitle="Our students, licensed and driving. Real learners who passed their test with us."
            className="max-w-2xl"
          />
          <div className="mt-14">
            <SuccessGallery />
          </div>
        </div>
      </section>

      {/* Google rating ------------------------------------------------ */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-x">
          <GoogleReviewBand />
        </div>
      </section>

      {/* FAQ ---------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <FaqSection items={faqs} />
        </div>
      </section>

      {/* Contact CTA -------------------------------------------------- */}
      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl bg-brand-500 p-10 text-center text-white sm:p-14">
            <h2 className="font-display text-[2rem] font-bold sm:text-[2.5rem]">
              Ready to start driving?
            </h2>
            <p className="mt-3 max-w-md text-white/90">
              Book your first lesson on WhatsApp, or get in touch and we'll help
              you choose the right course.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                as="a"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
              <Button to="/contact" variant="white" size="lg">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
