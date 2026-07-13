import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { site, telLink, whatsappLink } from "@/lib/site";

type Props = {
  title?: string;
  subtitle?: string;
  message?: string;
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export function CTASection({
  title = "Ready To Start Driving?",
  subtitle = "Book your first lesson today. Message us on WhatsApp and we'll help you choose the right course. We usually reply within minutes.",
  message,
}: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const who = name.trim() ? `My name is ${name.trim()}.` : "";
    const ask =
      message ??
      "I'd like to book driving lessons. Could you please share availability and pricing?";
    window.open(
      whatsappLink(`Hi ${site.name}! 👋 ${who} ${ask}`.replace(/\s+/g, " ").trim()),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 shadow-[var(--shadow-card)]">
          <motion.div
            className="relative z-10 grid items-center gap-8 p-8 md:grid-cols-2 md:gap-10 md:p-12 lg:p-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="text-left text-white">
              <motion.h2
                className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
                variants={item}
              >
                {title}
              </motion.h2>
              <motion.p
                className="mt-4 max-w-xl text-pretty text-lg text-white/90"
                variants={item}
              >
                {subtitle}
              </motion.p>
              <motion.p className="mt-5 text-sm text-white/75" variants={item}>
                Code 8 &amp; Code 10. Flexible lesson times. Free vehicle hire for
                testing.
              </motion.p>
            </div>

            <motion.div className="w-full" variants={item}>
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-3 sm:flex-row md:justify-end"
              >
                <Input
                  variant="dark"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="Your name"
                  className="sm:max-w-[15rem]"
                />
                <Button variant="white" size="lg" type="submit" className="shrink-0">
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                </Button>
              </form>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/85 sm:justify-end">
                <Phone className="h-4 w-4" />
                <span>or call</span>
                <a
                  href={telLink}
                  className="font-semibold text-white underline-offset-4 transition-colors hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
