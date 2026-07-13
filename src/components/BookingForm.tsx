import { useState } from "react";
import type { FormEvent } from "react";
import { CalendarCheck } from "lucide-react";
import { Button } from "./ui/Button";
import { site, whatsappLink } from "@/lib/site";

const experiences = ["Beginner", "Some Experience", "Test Preparation"];
const vehicles = ["Code 8", "Code 10"];

const fieldClass =
  "h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: experiences[0],
    vehicle: vehicles[0],
    date: "",
    time: "",
  });
  const [error, setError] = useState(false);

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError(true);
      return;
    }
    const msg =
      `Hi ${site.name}! 👋 I'd like to book a driving lesson.\n\n` +
      `Name: ${form.name}\n` +
      (form.phone ? `Phone: ${form.phone}\n` : "") +
      (form.email ? `Email: ${form.email}\n` : "") +
      `Experience: ${form.experience}\n` +
      `Vehicle: ${form.vehicle}\n` +
      (form.date ? `Preferred date: ${form.date}\n` : "") +
      (form.time ? `Preferred time: ${form.time}\n` : "");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-black/5 sm:p-8 lg:p-10">
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
        Book your driving lesson
      </h2>
      <p className="mt-2 text-neutral-500">
        Fill in your details and we'll confirm your booking via WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="mt-7" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="bf-name">
              Your Name
            </label>
            <input
              id="bf-name"
              value={form.name}
              onChange={set("name")}
              placeholder="e.g. Thabo Mokoena"
              className={fieldClass}
            />
            {error && (
              <p className="mt-1.5 text-xs font-medium text-brand-600">
                Please enter your name
              </p>
            )}
          </div>

          <div>
            <label className={labelClass} htmlFor="bf-email">
              Your Email
            </label>
            <input
              id="bf-email"
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@email.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="bf-phone">
              Phone Number
            </label>
            <input
              id="bf-phone"
              inputMode="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="e.g. 082 123 4567"
              className={fieldClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="bf-exp">
              Your Experience
            </label>
            <select
              id="bf-exp"
              value={form.experience}
              onChange={set("experience")}
              className={fieldClass}
            >
              {experiences.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="bf-vehicle">
              Vehicle Type
            </label>
            <select
              id="bf-vehicle"
              value={form.vehicle}
              onChange={set("vehicle")}
              className={fieldClass}
            >
              {vehicles.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass} htmlFor="bf-date">
                Date
              </label>
              <input
                id="bf-date"
                type="date"
                value={form.date}
                onChange={set("date")}
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="bf-time">
                Time
              </label>
              <input
                id="bf-time"
                type="time"
                value={form.time}
                onChange={set("time")}
                className={fieldClass}
              />
            </div>
          </div>
        </div>

        <Button variant="whatsapp" size="lg" type="submit" className="mt-7 w-full sm:w-auto sm:min-w-[16rem]">
          <CalendarCheck className="h-5 w-5" />
          Book Lesson
        </Button>
      </form>
    </div>
  );
}
