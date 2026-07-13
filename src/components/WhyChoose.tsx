import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  UserCheck,
  FileText,
  CarFront,
  CalendarDays,
  Truck,
} from "lucide-react";
import { RevealGroup, RevealItem } from "./ui/Reveal";

type Reason = { icon: LucideIcon; title: string; desc: string };

const reasons: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Registered & compliant",
    desc: "A fully registered school you can trust.",
  },
  {
    icon: UserCheck,
    title: "Patient instructors",
    desc: "We teach at a pace that suits you.",
  },
  {
    icon: FileText,
    title: "Learner's licence help",
    desc: "We prepare you from scratch.",
  },
  {
    icon: CarFront,
    title: "Free vehicle for your test",
    desc: "Free car or truck hire, every full course.",
  },
  {
    icon: CalendarDays,
    title: "Flexible lesson times",
    desc: "Weekday and Saturday slots.",
  },
  {
    icon: Truck,
    title: "Code 8 & Code 10",
    desc: "Training for cars and trucks.",
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
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {r.title}
                </h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-neutral-600">
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
