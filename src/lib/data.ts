import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarClock,
  Car,
  Truck,
  GraduationCap,
  ShieldCheck,
  Clock,
  HeartHandshake,
  PhoneCall,
  CalendarCheck,
  Route,
  Trophy,
  Sparkles,
  KeyRound,
  Wallet,
  ClipboardCheck,
  Star,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Company copy                                                      */
/* ------------------------------------------------------------------ */
export const company = {
  intro:
    "Jacques Driving Academy is a registered driving school offering professional Code 8 and Code 10 training, helping learners become safe, confident and responsible drivers.",
  mission:
    "To help every student gain the skills and confidence they need to drive independently and safely on South African roads.",
  vision:
    "To be the best driving school in the region and to produce many safe, responsible drivers who help improve road safety.",
};

/* ------------------------------------------------------------------ */
/*  Trust badges (hero)                                               */
/* ------------------------------------------------------------------ */
export type Feature = { icon: LucideIcon; label: string };

export const trustBadges: Feature[] = [
  { icon: GraduationCap, label: "Learner's Licence Assistance" },
  { icon: CalendarClock, label: "Flexible Lesson Times" },
  { icon: KeyRound, label: "Vehicle Hire for Testing" },
  { icon: Trophy, label: "High Success Rate" },
];

/* ------------------------------------------------------------------ */
/*  Highlights (real differentiators, no vanity metrics)              */
/* ------------------------------------------------------------------ */
export type Highlight = { icon: LucideIcon; title: string; desc: string };

export const highlights: Highlight[] = [
  {
    icon: ShieldCheck,
    title: "Registered & Compliant",
    desc: "A fully registered driving school you can trust.",
  },
  {
    icon: Car,
    title: "Code 8 & Code 10",
    desc: "Training for cars and trucks.",
  },
  {
    icon: GraduationCap,
    title: "Learner's Licence Help",
    desc: "We prepare and help you with your learner's.",
  },
  {
    icon: KeyRound,
    title: "Free Vehicle for Tests",
    desc: "Free car or truck hire with every full course.",
  },
];

/* ------------------------------------------------------------------ */
/*  Why choose us                                                     */
/* ------------------------------------------------------------------ */
export const whyChoose: Feature[] = [
  { icon: HeartHandshake, label: "Friendly, patient instructors" },
  { icon: ShieldCheck, label: "Registered and compliant driving school" },
  { icon: GraduationCap, label: "Learner's licence assistance" },
  { icon: KeyRound, label: "Free vehicle hire for your test*" },
  { icon: Clock, label: "Flexible lesson times" },
];

/* ------------------------------------------------------------------ */
/*  Services                                                          */
/* ------------------------------------------------------------------ */
export const services: Highlight[] = [
  {
    icon: GraduationCap,
    title: "Learner's Licence",
    desc: "We help you prepare for and pass your learner's licence, covering road signs, the rules of the road and vehicle controls.",
  },
  {
    icon: Car,
    title: "Driving Lessons",
    desc: "Structured Code 8 and Code 10 lessons with patient, experienced instructors, at a pace that suits you.",
  },
  {
    icon: BadgeCheck,
    title: "Driving Licence Test",
    desc: "Full test preparation, plus free car or truck hire for your test with every full course.",
  },
];

/* ------------------------------------------------------------------ */
/*  Course packages / pricing (Code 8, 10, 14)                        */
/* ------------------------------------------------------------------ */
export type PriceTier = { label: string; price: string; sub?: string };

export type CoursePackage = {
  id: string;
  code: string;
  vehicle: string;
  icon: LucideIcon;
  tagline: string;
  headlinePrice: string;
  headlineNote: string;
  tiers: PriceTier[];
  features: string[];
  popular?: boolean;
  ctaMessage: string;
};

export const coursePackages: CoursePackage[] = [
  {
    id: "code-8",
    code: "Code 8",
    vehicle: "Cars & light vehicles",
    icon: Car,
    tagline: "The everyday driver's licence for cars and bakkies.",
    headlinePrice: "R3,500",
    headlineNote: "full course",
    popular: true,
    tiers: [
      { label: "Full Course", price: "R3,500" },
      { label: "Half Course", price: "R2,000" },
      { label: "Single Lesson", price: "R200", sub: "per hour" },
      { label: "Car Hire (test)", price: "R500" },
    ],
    features: [
      "Learner's assistance",
      "K53 preparation",
      "Free test vehicle",
      "Flexible lessons",
      "Pay-per-lesson option",
    ],
    ctaMessage:
      "Hi Jacques Driving Academy! 👋 I'm interested in Code 8 lessons. Could you share availability and get me started?",
  },
  {
    id: "code-10",
    code: "Code 10",
    vehicle: "Trucks & heavy vehicles",
    icon: Truck,
    tagline: "Step up to trucks and heavy vehicles with expert coaching.",
    headlinePrice: "R4,500",
    headlineNote: "full course",
    tiers: [
      { label: "Full Course", price: "R4,500" },
      { label: "Half Course", price: "R2,500" },
      { label: "Single Lesson", price: "R250", sub: "per hour" },
      { label: "Truck Hire (test)", price: "R750" },
    ],
    features: [
      "Heavy vehicle lessons",
      "K53 preparation",
      "Free test vehicle",
      "Flexible lessons",
      "Pay-per-lesson option",
    ],
    ctaMessage:
      "Hi Jacques Driving Academy! 👋 I'd like to book Code 10 (truck) lessons. Please share available times and pricing.",
  },
];

/** Rows for the side-by-side pricing table on the Pricing page. */
export const pricingRows: { label: string; values: string[] }[] = [
  { label: "Full Course", values: ["R3,500", "R4,500"] },
  { label: "Half Course", values: ["R2,000", "R2,500"] },
  { label: "Single Lesson (per hour)", values: ["R200", "R250"] },
  { label: "Vehicle Hire for test", values: ["R500", "R750"] },
];

/* ------------------------------------------------------------------ */
/*  Student success photos (real, supplied by the client)             */
/* ------------------------------------------------------------------ */
export type SuccessStory = { caption: string };

export const successStories: SuccessStory[] = [
  { caption: "Licensed with Jacques! 🎉" },
  { caption: "Passed & proud 🚗" },
  { caption: "Another happy driver" },
  { caption: "Dreams achieved ⭐" },
  { caption: "On the road at last!" },
];

/* ------------------------------------------------------------------ */
/*  Process                                                           */
/* ------------------------------------------------------------------ */
export type Step = { icon: LucideIcon; title: string; desc: string };

export const processSteps: Step[] = [
  {
    icon: PhoneCall,
    title: "Get In Touch",
    desc: "Message us on WhatsApp or give us a call. Tell us which code you need and we'll point you to the right course.",
  },
  {
    icon: CalendarCheck,
    title: "Book Your Lessons",
    desc: "Choose lesson times that fit your schedule. We have flexible weekday and Saturday slots.",
  },
  {
    icon: Route,
    title: "Learn & Prepare",
    desc: "Master the controls and your K53 with a patient instructor, plus full preparation for your test.",
  },
  {
    icon: Trophy,
    title: "Pass Your Test 🚗",
    desc: "Use our free test vehicle and drive away with your licence, safe and confident.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Which driving codes do you offer?",
    a: "We offer full training for Code 8 (light motor vehicles and cars) and Code 10 (heavy vehicles and trucks). We also help you with your learner's licence.",
  },
  {
    q: "Do you provide the vehicle for my test?",
    a: "Yes. Free car or truck hire for your test is included with every full course. You can also hire the vehicle on its own (R500 for Code 8, R750 for Code 10).",
  },
  {
    q: "Do you help with the learner's licence?",
    a: "Absolutely. Learner's licence assistance is one of our main services. We help you prepare for the learner's test, covering road signs, the rules of the road and vehicle controls.",
  },
  {
    q: "Which areas do you cover?",
    a: "We operate across Mdantsane and greater East London, including Beacon Bay, Gonubie, Scenery Park, Cambridge, Amalinda, Nahoon and the surrounding areas.",
  },
  {
    q: "Can I pay per lesson instead of a full course?",
    a: "Yes. Single lessons are R200 an hour for Code 8 and R250 an hour for Code 10. You can also choose a half course, or a full course for the best value, which includes free vehicle hire for your test.",
  },
  {
    q: "How do I book?",
    a: "The easiest way is to message us on WhatsApp or call 065 851 8981. We'll confirm availability, answer your questions and get you booked in.",
  },
];

export const packageFaqs: Faq[] = [
  {
    q: "What's the difference between a full and half course?",
    a: "A full course is complete training from your first lesson to test ready, and it includes free vehicle hire for your test. A half course has fewer lessons and suits learners who already have some driving experience.",
  },
  {
    q: "Is vehicle hire really free for my test?",
    a: "Yes. Free car or truck hire for your test is included with every full course. If you only need the vehicle, hire is R500 for Code 8 or R750 for Code 10.",
  },
  {
    q: "Can I upgrade from a half course to a full course?",
    a: "Of course. If you start with a half course and want more lessons, we credit what you've already paid toward the full course, so you never lose value.",
  },
  {
    q: "Do you assist with the learner's licence?",
    a: "Yes. We help you prepare for and pass your learner's licence before you start your driving lessons.",
  },
];

/* ------------------------------------------------------------------ */
/*  Values (about)                                                   */
/* ------------------------------------------------------------------ */
export const values: Step[] = [
  {
    icon: HeartHandshake,
    title: "Patience First",
    desc: "Everyone learns at their own pace. We never rush you and we never make you feel judged.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Always",
    desc: "We teach you the road rules and safe driving habits that protect you and everyone else on the road.",
  },
  {
    icon: BadgeCheck,
    title: "Registered & Compliant",
    desc: "We're a fully registered, compliant driving school, so you get proper training you can rely on.",
  },
  {
    icon: Sparkles,
    title: "Confident Drivers",
    desc: "Our goal is independence. Learners who leave us able to drive safely and confidently on their own.",
  },
];

/* ------------------------------------------------------------------ */
/*  Why students trust us (About): honest talking points              */
/* ------------------------------------------------------------------ */
export const trustPoints: Feature[] = [
  { icon: ShieldCheck, label: "Registered and compliant" },
  { icon: Star, label: "5.0 rating on Google" },
  { icon: Car, label: "Code 8 & Code 10 training" },
  { icon: GraduationCap, label: "Learner's licence assistance" },
  { icon: KeyRound, label: "Free vehicle hire for testing" },
  { icon: Wallet, label: "Pay per lesson if you prefer" },
];

export const learnersLicencePerks: Feature[] = [
  { icon: ClipboardCheck, label: "Road signs and rules of the road" },
  { icon: Car, label: "Vehicle controls explained simply" },
  { icon: CalendarCheck, label: "Booking and preparation guidance" },
];
