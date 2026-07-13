import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-24">
      <div className="flex max-w-md flex-col items-center text-center">
        <p className="font-display text-7xl font-semibold text-brand-600">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-3 text-neutral-600">
          The page you're looking for doesn't exist. Let's get you back on the
          road.
        </p>
        <Button to="/" variant="primary" size="lg" className="mt-8">
          <Home className="h-5 w-5" />
          Back to home
        </Button>
      </div>
    </section>
  );
}
