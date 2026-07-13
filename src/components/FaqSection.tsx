import { SectionHeading } from "./ui/SectionHeading";
import { Accordion } from "./ui/Accordion";
import type { Faq } from "@/lib/data";

export function FaqSection({
  items,
  title = "Frequently asked questions",
  subtitle,
}: {
  items: Faq[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="mt-12">
        <Accordion items={items} />
      </div>
    </div>
  );
}
