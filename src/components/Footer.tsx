import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* World map background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/images/world-map.svg')] bg-[length:1400px_auto] bg-center bg-no-repeat opacity-25 md:bg-[length:120%_auto]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/90 via-transparent to-ink/90"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand" />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-block rounded-2xl bg-white px-5 py-4">
              <Image src="/images/logo.svg" alt={site.name} width={180} height={62} className="h-12 w-auto" />
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              Since {site.founded}, crafting success stories for apparel brands with labels, trims,
              printing and packaging delivered on time, every time.
            </p>
            <p className="mt-4 font-display text-lg font-semibold tracking-wide text-brand">
              {site.tagline}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Company</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/80 transition hover:text-brand">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.webmailUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 transition hover:text-brand">
                  Webmail
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-white/80 transition hover:text-brand">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>
                  {site.address.line1},<br />
                  {site.address.line2}, {site.address.country}
                </span>
              </li>
              {site.phones.map((p) => (
                <li key={p} className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand">{p}</a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-brand">{site.email}</a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-brand hover:bg-brand"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Dhaka, Bangladesh · Serving brands worldwide</p>
        </div>
      </div>
    </footer>
  );
}
