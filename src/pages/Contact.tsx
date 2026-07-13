import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";
import { AreasMarquee } from "@/components/AreasMarquee";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <>
      <PageHeader
        current="Contact"
        title="Get in touch"
        subtitle="Chat on WhatsApp, give us a call, or visit us in Mdantsane. We usually reply within minutes."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <ContactSection />
        </div>
      </section>

      {/* Areas served */}
      <section className="pb-8">
        <div className="container-x">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Proudly serving {site.city}, East London &amp; surrounds
          </p>
        </div>
        <AreasMarquee />
      </section>
    </>
  );
}
