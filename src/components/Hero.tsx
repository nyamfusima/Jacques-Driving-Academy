import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "./ui/Button";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { heroBg } from "@/lib/images";
import { EASE } from "@/lib/motion";

const trustBadges = [
  "Professional Instructors",
  "Flexible Scheduling",
  "High Student Success Rate",
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[42rem] flex-col items-center justify-center overflow-hidden pt-28 pb-40 text-center text-white sm:min-h-[46rem] sm:pb-44">
      {/* Background photo */}
      <div className="absolute inset-0 -z-20">
        <ImageWithFallback
          src={heroBg}
          alt=""
          className="h-full w-full"
          imgClassName="object-cover object-center"
          fallbackClassName="from-ink via-brand-950 to-ink"
          iconClassName="text-white/10"
          loading="eager"
        />
      </div>
      {/* Black overlay (~45%) for readable text */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="container-x flex flex-col items-center"
      >
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
          Pass Your Driving Test With Confidence
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
          Professional driving lessons in Mdantsane &amp; East London, helping
          learners become safe and confident drivers.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button to="/#book" variant="whatsapp" size="lg">
            <MessageCircle className="h-5 w-5" />
            Book Your Lesson
          </Button>
          <Button to="/#pricing" variant="white" size="lg">
            View Packages
          </Button>
        </div>

        {/* Trust badges */}
        <ul className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          {trustBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-2 text-[0.95rem] font-medium">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
              </span>
              {badge}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
