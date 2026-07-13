import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  KeyRound,
  CalendarClock,
  Car,
} from "lucide-react";
import { RevealGroup, RevealItem } from "./ui/Reveal";

type Reason = { icon: LucideIcon; title: string; desc: string };

const reasons: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Registered & compliant",
    desc: "A fully registered driving school you can trust.",
  },
  {
    icon: HeartHandshake,
    title: "Patient instructors",
    desc: "We teach at a pace that suits you, never rushed.",
  },
  {
    icon: GraduationCap,
    title: "Learner's licence help",
    desc: "We prepare you for your learner's from scratch.",
  },
  {
    icon: KeyRound,
    title: "Free vehicle for your test",
    desc: "Free car or truck hire with every full course.",
  },
  {
    icon: CalendarClock,
    title: "Flexible lesson times",
    desc: "Weekday and Saturday slots to fit your schedule.",
  },
  {
    icon: Car,
    title: "Code 8 & Code 10",
    desc: "Training for both cars and heavy vehicles.",
  },
];

export function WhyChoose() {
  return (
    <RevealGroup className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((r) => {
        const Icon = r.icon;
        return (
          <RevealItem key={r.title}>
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-neutral-600">
                  {r.desc}
                </p>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
