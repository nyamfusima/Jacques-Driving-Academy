import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  CalendarClock,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site, telLink, whatsappLink } from "@/lib/site";
import { coursePackages } from "@/lib/data";

const interestOptions = [
  "Learner's Licence Assistance",
  ...coursePackages.map((p) => `${p.code} Driving Lessons`),
  "Not sure yet, I need advice",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pkg: interestOptions[1],
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi ${site.name}! 👋\n\n` +
      `My name is ${form.name || "(name)"}.\n` +
      `I'm interested in: ${form.pkg}.\n` +
      (form.phone ? `Phone: ${form.phone}\n` : "") +
      (form.email ? `Email: ${form.email}\n` : "") +
      (form.message ? `\n${form.message}` : "\nCould you share available times?");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-neutral-400 shadow-sm transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/15";

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        title={
          <>
            Let's Get You <span className="text-gradient-brand">On The Road</span>
          </>
        }
        subtitle="Have a question or ready to book? Send us a message and we'll reply quickly, usually within minutes on WhatsApp."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                    Almost there!
                  </h3>
                  <p className="mt-2 max-w-sm text-neutral-500">
                    We've opened WhatsApp with your message ready to send. Just hit
                    send and we'll take it from there. 🚗
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button
                      as="a"
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="whatsapp"
                      size="md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Open WhatsApp again
                    </Button>
                    <Button variant="outline" size="md" onClick={() => setSent(false)}>
                      Edit my details
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    Send us a message
                  </h2>
                  <p className="mt-1.5 text-sm text-neutral-500">
                    Fill this in and we'll continue the chat on WhatsApp.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-ink">
                          Full name
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={update("name")}
                          placeholder="e.g. Thabo Mokoena"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-ink">
                          Phone number
                        </label>
                        <input
                          value={form.phone}
                          onChange={update("phone")}
                          placeholder="e.g. 082 123 4567"
                          inputMode="tel"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-ink">
                        Email <span className="font-normal text-neutral-400">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-ink">
                        I'm interested in
                      </label>
                      <select
                        value={form.pkg}
                        onChange={update("pkg")}
                        className={inputClass}
                      >
                        {interestOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-ink">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us your experience level and preferred lesson times…"
                        className={inputClass}
                      />
                    </div>

                    <Button variant="whatsapp" size="lg" type="submit" className="mt-1">
                      <Send className="h-4 w-4" />
                      Send via WhatsApp
                    </Button>
                    <p className="text-center text-xs text-neutral-400">
                      No spam, ever. We only use your details to arrange lessons.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Info sidebar */}
          <Reveal delay={0.1} direction="up">
            <div className="flex flex-col gap-5">
              {/* Quick contact */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-lg font-bold text-ink">
                  Contact details
                </h3>
                <ul className="mt-4 flex flex-col gap-4 text-sm">
                  <li>
                    <a href={telLink} className="flex items-center gap-3 text-neutral-600 hover:text-brand-600">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-neutral-400">Call us</span>
                        <span className="font-semibold">{site.phoneDisplay}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-3 text-neutral-600 hover:text-brand-600"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-neutral-400">Email us</span>
                        <span className="font-semibold">{site.email}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-600">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-neutral-400">Find us</span>
                      <span className="font-semibold">
                        {site.addressLine}, {site.city}
                      </span>
                    </span>
                  </li>
                </ul>
                <Button
                  as="a"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="md"
                  className="mt-5 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Hours */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                  <Clock className="h-5 w-5 text-brand-500" />
                  Business hours
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-dashed border-neutral-100 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-neutral-500">{h.day}</span>
                      <span className="font-semibold text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2 text-xs font-medium text-green-700">
                  <CalendarClock className="h-4 w-4" />
                  Evening &amp; weekend slots available on request
                </p>
              </div>

              {/* Areas */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-lg font-bold text-ink">
                  Areas we serve
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.areas.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600"
                    >
                      <MapPin className="h-3 w-3 text-brand-400" />
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 sm:pb-24">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[16/10] w-full sm:aspect-[21/8]">
              {/* Stylised map surface (reliable in every environment) */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 1200 400"
                  aria-hidden
                >
                  <g stroke="#e2e5ea" strokeWidth="2" fill="none">
                    <path d="M0 90 H1200 M0 200 H1200 M0 310 H1200" />
                    <path d="M180 0 V400 M470 0 V400 M760 0 V400 M1010 0 V400" />
                  </g>
                  {/* main route */}
                  <path
                    d="M120 360 C 300 300, 380 250, 470 200 S 720 120, 900 70"
                    stroke="#ef4444"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="2 14"
                    opacity="0.7"
                  />
                  <circle cx="120" cy="360" r="7" fill="#ef4444" opacity="0.7" />
                </svg>
                {/* soft brand glow */}
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-2xl" />
              </div>

              {/* Location pin */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
                <div className="mb-2 rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-[var(--shadow-card)] ring-1 ring-black/5">
                  {site.name}
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white shadow-[var(--shadow-glow)] ring-4 ring-white">
                  <MapPin className="h-6 w-6" />
                </span>
                <span className="mt-1 h-3 w-3 rounded-full bg-brand-500/30 blur-[1px]" />
              </div>

              {/* Address card + directions */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start justify-between gap-3 rounded-2xl bg-white/95 p-4 shadow-[var(--shadow-card)] ring-1 ring-black/5 backdrop-blur sm:right-auto sm:max-w-sm">
                <div>
                  <p className="text-sm font-bold text-ink">Find us here</p>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    {site.addressLine}, {site.city}, {site.region}
                  </p>
                </div>
                <Button
                  as="a"
                  href="https://www.google.com/maps/search/?api=1&query=4+Billie+Road%2C+Mdantsane+Unit+4%2C+Mdantsane"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
