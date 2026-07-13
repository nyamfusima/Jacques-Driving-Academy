import { MessageCircle, Trophy } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SuccessGallery } from "@/components/SuccessGallery";
import { GoogleReviewBand } from "@/components/GoogleReviewBand";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { highlights } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export default function StudentSuccess() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", to: "/" }, { label: "Success Stories" }]}
        title={
          <>
            Real Learners,{" "}
            <span className="text-gradient-brand">Real Licences</span> 🎉
          </>
        }
        subtitle="Here are some of the learners who trusted Jacques Driving Academy to get them on the road."
      />

      {/* Gallery */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="Congratulations To Our Students 🎉"
            subtitle="Fresh licences and big smiles at the Jacques Driving Academy car."
          />
          <div className="mt-14">
            <SuccessGallery />
          </div>
        </div>
      </section>

      {/* Google review */}
      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="container-x">
          <GoogleReviewBand />
        </div>
      </section>

      {/* Why students succeed */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            title="What Sets Our Learners Up To Pass"
            subtitle="It comes down to patient teaching, proper preparation and genuine care."
          />
          <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <RevealItem key={h.title} className="h-full">
                  <div className="flex h-full flex-col items-center rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-ink">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{h.desc}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Join */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center rounded-[2rem] border border-brand-100 bg-brand-50/60 p-10 text-center sm:p-14">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-[var(--shadow-glow)]">
              <Trophy className="h-8 w-8" />
            </span>
            <h2 className="mt-6 text-balance text-3xl font-extrabold text-ink sm:text-4xl">
              Join Our Success Stories
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-neutral-500">
              Your photo could be on this wall next. Book your first lesson today
              and let's get you that licence.
            </p>
            <Button
              as="a"
              href={whatsappLink(
                "Hi Jacques Driving Academy! 👋 I'd love to become one of your success stories. Can we book my first lesson?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              className="mt-8"
            >
              <MessageCircle className="h-5 w-5" />
              Start My Success Story
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
