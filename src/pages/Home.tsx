import { MessageCircle, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { BookingForm } from "@/components/BookingForm";
import { WhyChoose } from "@/components/WhyChoose";
import { AboutSection } from "@/components/AboutSection";
import { AreasMarquee } from "@/components/AreasMarquee";
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

      {/* Trust features ----------------------------------------------- */}
      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Why choose Jacques Driving Academy"
            subtitle="A registered local driving school focused on getting you safely licensed."
          />
          <div className="mt-14">
            <WhyChoose />
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Pricing ------------------------------------------------------ */}
      <section id="pricing" className="scroll-mt-24 bg-sand-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Simple, honest pricing"
            subtitle="Full courses include free vehicle hire for your test."
          />
          <RevealGroup className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {coursePackages.map((pkg) => (
              <RevealItem key={pkg.id} className="h-full">
                <CoursePackageCard pkg={pkg} />
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-6 text-center text-sm text-neutral-500">
            Need flexibility? Pay-per-lesson options are available.
          </p>
        </div>
      </section>

      {/* Student gallery (prominent) ---------------------------------- */}
      <section id="gallery" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Celebrating our successful learners"
            subtitle="Real students. Real passes. Real results."
          />
          <div className="mt-14">
            <SuccessGallery />
          </div>
        </div>
      </section>

      {/* Reviews ------------------------------------------------------ */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-x">
          <GoogleReviewBand />
        </div>
      </section>

      {/* Areas served ------------------------------------------------- */}
      <section className="py-14 sm:py-16">
        <div className="container-x mb-8 text-center">
          <h2 className="font-display text-[2rem] font-bold text-ink sm:text-[2.5rem]">
            Areas we serve
          </h2>
          <p className="mt-3 text-neutral-500">
            Driving lessons across Mdantsane and greater East London.
          </p>
        </div>
        <AreasMarquee />
      </section>

      {/* FAQ ---------------------------------------------------------- */}
      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="container-x">
          <FaqSection items={faqs} />
        </div>
      </section>

      {/* Final CTA ---------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl bg-brand-500 p-10 text-center text-white sm:p-14">
            <h2 className="font-display text-[2rem] font-bold sm:text-[2.5rem]">
              Ready to start driving?
            </h2>
            <p className="mt-3 max-w-md text-white/90">
              Contact us today and let's get you on the road.
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
