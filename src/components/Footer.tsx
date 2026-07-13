import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { navItems, site, telLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1.2fr] md:py-16">
        {/* Brand */}
        <div className="flex flex-col items-start gap-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            A registered driving school offering Code 8 and Code 10 lessons across
            Mdantsane and greater East London.
          </p>
          <SocialLinks variant="onBrand" size="sm" />
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Explore
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Get in touch
          </h3>
          <ul className="mt-4 flex flex-col gap-4 text-sm text-white/75">
            <li>
              <a href={telLink} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                {site.addressLine}, {site.city}, {site.region}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
