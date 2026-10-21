import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-dark px-8 py-16 text-white shadow-2xl shadow-brand/30 sm:px-16">
          <div aria-hidden className="rings animate-spin-slow absolute -top-24 -right-24 h-96 w-96 text-white/20" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-5xl">Do you think alike?</h2>
              <p className="mt-4 max-w-2xl text-lg text-white/85">
                If you are thinking about your business, we are the one-stop solution for success.
                Contact us 24/7 at {site.phones[0]}.
              </p>
            </div>
            <Link href="/contact" className="group inline-flex items-center gap-2 justify-self-start rounded-full bg-white px-8 py-4 font-semibold text-brand shadow-xl transition hover:-translate-y-0.5 lg:justify-self-end">
              Please contact! <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
