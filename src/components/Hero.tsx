import { motion } from "framer-motion";
import { MessageCircle, Phone, Star, KeyRound, Car } from "lucide-react";
import { Button } from "./ui/Button";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { trustBadges } from "@/lib/data";
import { images } from "@/lib/images";
import { site, telLink, whatsappLink } from "@/lib/site";
import { EASE } from "@/lib/motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32">
      {/* Background flourishes */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-100/70 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-rose-100/60 blur-[110px]" />

      <div className="container-x relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur"
          >
            <span className="flex -space-x-2">
              {images.students.slice(0, 3).map((src) => (
                <ImageWithFallback
                  key={src}
                  src={src}
                  alt="Happy student"
                  className="h-7 w-7 rounded-full ring-2 ring-white"
                />
              ))}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-ink">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Rated {site.googleRating} on Google
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.04] text-ink sm:text-5xl lg:text-[3.75rem]"
          >
            Learn To Drive With{" "}
            <span className="text-gradient-brand">Confidence</span> 🚗
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-neutral-500"
          >
            Professional driving lessons for Code 8 &amp; Code 10. Our experienced
            instructors help learners become safe, confident drivers. We also help
            you with your learner's licence.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
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
              Call {site.phoneDisplay}
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6"
          >
            {trustBadges.map((b) => {
              const Icon = b.icon;
              return (
                <li key={b.label} className="flex items-center gap-2 text-sm font-medium text-neutral-600">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-100 text-green-600">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {b.label}
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)] ring-1 ring-black/5">
            <ImageWithFallback
              src={images.heroMain}
              alt="A happy Jacques Driving Academy student with their new licence"
              className="aspect-[4/5] w-full"
              fallbackIcon={Car}
              fallbackClassName="from-brand-500 via-brand-600 to-brand-800"
              iconClassName="text-white/85"
              loading="eager"
            />
            {/* scrim for depth so the floating cards pop over the photo */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            {/* decorative inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/30" />
          </div>

          {/* Floating card: Google rating */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-[var(--shadow-card)] ring-1 ring-black/5 backdrop-blur sm:-left-6"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-100 text-amber-500">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-none text-ink">
                {site.googleRating}
              </p>
              <p className="text-xs text-neutral-500">Rated on Google</p>
            </div>
          </motion.div>

          {/* Floating card: free test vehicle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="absolute -bottom-5 right-1 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-[var(--shadow-card)] ring-1 ring-black/5 backdrop-blur sm:right-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-green-100 text-green-600">
              <KeyRound className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight text-ink">
                Free test car
              </p>
              <p className="text-xs text-neutral-500">&amp; truck hire</p>
            </div>
          </motion.div>

          {/* floating brand blob behind */}
          <div className="absolute -right-6 -top-6 -z-10 h-28 w-28 rounded-full bg-brand-500/10 animate-float" />
        </motion.div>
      </div>

      {/* Marquee of areas */}
      <div className="relative border-y border-neutral-200 bg-neutral-50/60 py-4">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap pr-10">
            {[...site.areas, ...site.areas].map((area, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
