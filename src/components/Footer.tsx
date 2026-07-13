import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { SocialLinks } from "./SocialLinks";
import { navItems, site, telLink, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      {/* Top band */}
      <div className="container-x grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
            A registered driving school serving Mdantsane and greater East London.
            Code 8 &amp; Code 10 lessons, learner's licence assistance and free
            vehicle hire for your test.
          </p>
          <SocialLinks />

        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
            Explore
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-neutral-500 transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
            Areas Served
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5">
            {site.areas.slice(0, 6).map((area) => (
              <li key={area} className="text-sm text-neutral-500">
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
            Get In Touch
          </h3>
          <ul className="mt-4 flex flex-col gap-3.5 text-sm text-neutral-500">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>
                {site.addressLine}, {site.city}
              </span>
            </li>
            <li>
              <a href={telLink} className="flex items-center gap-3 hover:text-brand-600">
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 hover:text-brand-600"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>Open weekdays 8am to 5pm, Saturdays 8am to 1pm</span>
            </li>
          </ul>
          <Button
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="sm"
            className="mt-5"
          >
            <MessageCircle className="h-4 w-4" />
            Book on WhatsApp
          </Button>
        </div>
      </div>

      {/* Bottom band */}
      <div className="border-t border-neutral-200">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs font-semibold text-neutral-500">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
