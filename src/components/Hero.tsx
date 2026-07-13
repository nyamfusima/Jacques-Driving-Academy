import { motion } from "framer-motion";
import { ShieldCheck, CalendarDays, Trophy, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/Button";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { heroBg } from "@/lib/images";
import { EASE } from "@/lib/motion";

const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Registered Driving School" },
  { icon: CalendarDays, label: "Flexible Scheduling" },
  { icon: Trophy, label: "High Pass Rate" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Background photo */}
      <div className="absolute inset-0 -z-20">
        <ImageWithFallback
          src={heroBg}
          alt=""
          className="h-full w-full"
          imgClassName="object-cover object-[center_28%]"
          fallbackClassName="from-ink via-brand-950 to-ink"
          iconClassName="text-white/10"
          loading="eager"
        />
      </div>
      {/* Black overlay (~50%) for readable text */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="container-x flex min-h-[40rem] flex-col justify-center py-28 text-center sm:min-h-[44rem] sm:pb-44"
      >
        <h1 className="mx-auto max-w-4xl text-balance text-[2.6rem] font-extrabold leading-[1.07] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4rem]">
          Pass Your Driving Test With Confidence
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-[1.6] text-white/85">
          Professional Code 8 &amp; Code 10 driving lessons in Mdantsane and East
          London.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/#book" variant="whatsapp" size="lg">
            <MessageCircle className="h-5 w-5" />
            Book Your Lesson
          </Button>
          <Button to="/#pricing" variant="white" size="lg">
            View Packages
          </Button>
        </div>

        {/* Trust badges */}
        <ul className="mx-auto mt-11 flex max-w-2xl flex-wrap justify-center gap-x-7 gap-y-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-[0.95rem] font-medium"
            >
              <Icon className="h-5 w-5 text-brand-300" strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
