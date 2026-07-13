import { Target, Eye, MessageCircle, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { CTASection } from "@/components/CTASection";
import { company, values, services, trustPoints } from "@/lib/data";
import { images } from "@/lib/images";
import { whatsappLink } from "@/lib/site";

export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        title={
          <>
            Steering Success,{" "}
            <span className="text-gradient-brand">One Lesson At A Time</span>
          </>
        }
        subtitle="Jacques Driving Academy is a professional, registered driving school helping learners across Mdantsane and East London become safe, confident drivers."
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <ImageWithFallback
                src={images.aboutStory}
                alt="A happy Jacques Driving Academy student with their licence"
                className="aspect-[4/5] w-full rounded-[2rem] shadow-[var(--shadow-card)] ring-1 ring-black/5"
              />
              <div className="absolute -bottom-6 -left-3 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] ring-1 ring-black/5 sm:-left-6">
                <p className="text-2xl font-extrabold text-brand-500">5.0★</p>
                <p className="text-xs font-medium text-neutral-500">Rated on Google</p>
              </div>
            </div>
          </Reveal>

          <div>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              A registered driving school that puts learners first
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-neutral-500">
              <p>{company.intro}</p>
              <p>
                Being registered and compliant means you learn the right way, with
                proper road rules, safe habits and the skills you need to drive on
                your own. Before you ever take the wheel, we make sure you
                understand the rules of the road.
              </p>
              <p>
                From your learner's licence to your test, our friendly instructors
                stay with you the whole way. They're patient, professional and
                they want to see you pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-500">
                {company.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-500">
                {company.vision}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="What We Stand For"
            subtitle="The principles behind every lesson we teach."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <RevealItem key={v.title} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      {v.desc}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            title="Our Services"
            subtitle="Everything you need on the journey to your licence."
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

      {/* Why trust us */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Quote className="h-9 w-9 text-brand-200" />
                <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  Why students trust Jacques Driving Academy
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-500">
                  We treat every learner like a person, not a booking. You get
                  patience, honest advice and instructors who genuinely want to
                  see you pass.
                </p>
                <Button
                  as="a"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="lg"
                  className="mt-8"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Your First Lesson
                </Button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {trustPoints.map((t) => {
                  const Icon = t.icon;
                  return (
                    <li
                      key={t.label}
                      className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4 text-sm font-medium text-ink"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-600 shadow-sm">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      {t.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
