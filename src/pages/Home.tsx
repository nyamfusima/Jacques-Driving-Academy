import {
  ArrowRight,
  Check,
  MessageCircle,
  Sparkles,
  CarFront,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CoursePackageCard } from "@/components/CoursePackageCard";
import { SuccessGallery } from "@/components/SuccessGallery";
import { GoogleReviewBand } from "@/components/GoogleReviewBand";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { CTASection } from "@/components/CTASection";
import {
  highlights,
  whyChoose,
  services,
  coursePackages,
  processSteps,
  faqs,
} from "@/lib/data";
import { images } from "@/lib/images";
import { whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------------- */}
      {/*  Highlights                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <RevealGroup className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <RevealItem key={h.title} className="h-full">
                  <div className="flex h-full flex-col items-center rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-7">
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

      {/* ---------------------------------------------------------------- */}
      {/*  About / Why choose                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <ImageWithFallback
                src={images.about}
                alt="A Jacques Driving Academy student with their licence"
                className="aspect-[4/5] w-full rounded-[2rem] shadow-[var(--shadow-card)] ring-1 ring-black/5"
              />
              {/* floating card */}
              <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-card)] ring-1 ring-black/5 sm:-right-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white">
                  <CarFront className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-lg font-extrabold leading-none text-ink">
                    Registered
                  </p>
                  <p className="text-xs text-neutral-500">&amp; compliant school</p>
                </div>
              </div>
              <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-2xl bg-brand-100" />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              title={
                <>
                  Why Learn With{" "}
                  <span className="text-gradient-brand">Jacques Driving Academy?</span>
                </>
              }
              subtitle="We help nervous new drivers become calm and capable behind the wheel."
            />

            <RevealGroup className="mt-8 flex flex-col gap-3">
              {whyChoose.map((item) => {
                const Icon = item.icon;
                return (
                  <RevealItem key={item.label}>
                    <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-soft)]">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-ink">{item.label}</span>
                      <Check className="ml-auto h-5 w-5 shrink-0 text-green-500" />
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <p className="mt-4 text-xs text-neutral-400">
              *Free vehicle hire for testing is included with all full courses.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="outline" size="lg">
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Services                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Everything You Need To Get Licensed"
            subtitle="From your learner's licence right through to your driving test."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <RevealItem key={s.title} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      {s.desc}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Packages preview                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Simple, Honest Pricing"
            subtitle="Code 8 and Code 10 training with clear pricing and no hidden fees. Full courses include free vehicle hire for your test."
          />

          <RevealGroup className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {coursePackages.map((pkg) => (
              <RevealItem key={pkg.id} className="h-full">
                <CoursePackageCard pkg={pkg} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-12 flex justify-center">
            <Button to="/packages" variant="dark" size="lg">
              View Full Price List
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Student success gallery (real photos)                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title={<>Congratulations To Our Recent Students 🎉</>}
            subtitle="Real learners, real licences. These are just some of the drivers who passed with Jacques Driving Academy."
          />

          <div className="mt-14">
            <SuccessGallery />
          </div>

          <Reveal className="mt-12 flex justify-center">
            <Button to="/success" variant="outline" size="lg">
              See more success stories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Google rating                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="container-x">
          <GoogleReviewBand />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Process                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="From First Lesson To Licence"
            subtitle="Getting on the road with us is simple. Four steps and you're driving."
          />

          <div className="relative mt-16">
            {/* connecting line (desktop) */}
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

            <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <RevealItem key={step.title}>
                    <div className="relative flex flex-col items-center text-center">
                      <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand-600 shadow-[var(--shadow-soft)] ring-1 ring-neutral-200">
                        <Icon className="h-7 w-7" />
                        <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-md">
                          {i + 1}
                        </span>
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                        {step.desc}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          <Reveal className="mt-14 flex justify-center">
            <Button
              as="a"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              Message Us To Get Started
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  FAQ                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              title="Questions? We've Got Answers"
              subtitle="Everything you need to know before your first lesson. Still curious? Just message us on WhatsApp."
            />
            <div className="mt-8 hidden lg:block">
              <div className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-5">
                <Sparkles className="h-6 w-6 shrink-0 text-brand-500" />
                <p className="text-sm text-neutral-600">
                  <span className="font-semibold text-ink">Most learners book in under a minute.</span>{" "}
                  Tap the WhatsApp button and we'll take it from there.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Final CTA                                                       */}
      {/* ---------------------------------------------------------------- */}
      <CTASection />
    </>
  );
}
