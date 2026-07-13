import { Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-24">
      <div className="flex max-w-md flex-col items-center text-center">
        <p className="font-display text-7xl font-extrabold text-brand-500">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
          Looks like you took a wrong turn
        </h1>
        <p className="mt-3 text-neutral-500">
          The page you're looking for doesn't exist, but we can still get you on
          the road.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/" variant="primary" size="lg">
            <Home className="h-5 w-5" />
            Back to home
          </Button>
          <Button
            as="a"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            Book a lesson
          </Button>
        </div>
      </div>
    </section>
  );
}
