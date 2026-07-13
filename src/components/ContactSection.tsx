import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { site, telLink, whatsappLink } from "@/lib/site";

const mapQuery = encodeURIComponent(
  `${site.addressLine}, ${site.city}, ${site.region}`,
);
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export function ContactSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
      {/* Details */}
      <Reveal className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <ul className="flex flex-col gap-7">
          <li>
            <a href={telLink} className="group flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-neutral-500">Call us</span>
                <span className="text-lg font-semibold text-ink group-hover:text-brand-700">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>
          </li>
          <li className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
              <MapPin className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm text-neutral-500">Find us</span>
              <span className="text-lg font-semibold text-ink">
                {site.addressLine}
              </span>
              <span className="block text-neutral-600">
                {site.city}, {site.region}
              </span>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                Get directions
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
              <Clock className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block text-sm text-neutral-500">Opening hours</span>
              <span className="mt-1 flex flex-col gap-1">
                {site.hours.map((h) => (
                  <span
                    key={h.day}
                    className="flex justify-between gap-6 text-[0.95rem]"
                  >
                    <span className="text-neutral-600">{h.day}</span>
                    <span className="font-semibold text-ink">{h.time}</span>
                  </span>
                ))}
              </span>
            </span>
          </li>
        </ul>
      </Reveal>

      {/* Action panel */}
      <Reveal
        delay={0.1}
        className="flex flex-col justify-center rounded-3xl bg-sand-50 p-8 ring-1 ring-black/5 sm:p-10"
      >
        <h3 className="font-display text-2xl font-bold text-ink">
          Book your first lesson
        </h3>
        <p className="mt-3 leading-relaxed text-neutral-600">
          The quickest way to get started is on WhatsApp. Send us a message and
          we'll help you choose the right course.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <Button
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
          <Button as="a" href={telLink} variant="outline" size="lg">
            <Phone className="h-5 w-5" />
            Call {site.phoneDisplay}
          </Button>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          Serving {site.city}, East London and surrounding areas.
        </p>
      </Reveal>
      </div>

      {/* Google Maps */}
      <Reveal className="overflow-hidden rounded-3xl border border-neutral-200 shadow-[var(--shadow-soft)]">
        <iframe
          title={`${site.name} location on Google Maps`}
          src={mapEmbed}
          className="block h-[22rem] w-full sm:h-[26rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Reveal>
    </div>
  );
}
