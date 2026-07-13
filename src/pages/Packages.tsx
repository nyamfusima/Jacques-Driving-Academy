import { Check, MessageCircle, Phone, ShieldCheck, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CoursePackageCard } from "@/components/CoursePackageCard";
import { PricingTable } from "@/components/PricingTable";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { coursePackages, packageFaqs, learnersLicencePerks } from "@/lib/data";
import { telLink, whatsappLink } from "@/lib/site";

const guarantees = [
  { title: "No hidden fees", desc: "The price you see is the price you pay. Clear and upfront." },
  { title: "Free test vehicle", desc: "Full courses include free car or truck hire for your test." },
  { title: "Pay per lesson", desc: "Prefer single lessons? Pay per hour and learn at your own pace." },
];

export default function Packages() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", to: "/" }, { label: "Courses & Pricing" }]}
        title={
          <>
            Training For{" "}
            <span className="text-gradient-brand">Code 8 &amp; Code 10</span>
          </>
        }
        subtitle="Clear pricing with everything you need to pass. Not sure which course suits you? Message us and we'll point you to the right one."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            Book on WhatsApp
          </Button>
          <Button as="a" href={telLink} variant="outline" size="lg">
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </div>
      </PageHero>

      {/* Course cards */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <RevealGroup className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {coursePackages.map((pkg) => (
              <RevealItem key={pkg.id} className="h-full">
                <CoursePackageCard pkg={pkg} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-neutral-500">
            <ShieldCheck className="h-4 w-4 shrink-0 text-green-500" />
            EFT, card and cash accepted. Learner's licence assistance available.
          </Reveal>
        </div>
      </section>

      {/* Pricing table */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Clear Pricing, Side By Side"
            subtitle="Choose a full course, a half course, or pay per single lesson."
          />
          <div className="mt-12">
            <PricingTable />
          </div>
        </div>
      </section>

      {/* Learner's licence + guarantees */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Learner's licence assistance */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-brand-100 bg-brand-50/60 p-8 sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white shadow-[var(--shadow-glow)]">
                <GraduationCap className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                Learner's Licence Assistance
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                New to driving? Start with your learner's licence. We help you
                prepare and book, so you're ready before your first lesson.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {learnersLicencePerks.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.label} className="flex items-center gap-3 text-sm font-medium text-ink">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand-600 shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                      {p.label}
                    </li>
                  );
                })}
              </ul>
              <Button
                as="a"
                href={whatsappLink(
                  "Hi Jacques Driving Academy! 👋 I need help with my learner's licence. Where do I start?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                className="mt-7 self-start"
              >
                <MessageCircle className="h-4 w-4" />
                Ask About Learner's
              </Button>
            </div>
          </Reveal>

          {/* Guarantees */}
          <RevealGroup className="grid gap-5 sm:grid-cols-1">
            {guarantees.map((g) => (
              <RevealItem key={g.title}>
                <div className="flex items-start gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-100 text-green-600">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {g.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                      {g.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Package FAQ */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-x max-w-3xl">
          <SectionHeading
            title="Common Pricing Questions"
            subtitle="Everything about courses, vehicle hire and the learner's licence."
          />
          <div className="mt-12">
            <Accordion items={packageFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Pick A Course?"
        subtitle="Send us a quick WhatsApp with the code you need (8 or 10) and your preferred days. We'll confirm your first lesson in minutes."
      />
    </>
  );
}
