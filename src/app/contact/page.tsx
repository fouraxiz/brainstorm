import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PageHero, Reveal } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Brainstorm Communications, 191 KY Plaza, Fakirapool, Motijheel C/A, Dhaka 1000. Call +880 1715 373159.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=16&output=embed`;
  const cards = [
    { icon: MapPin, title: "Visit us", lines: [site.address.line1, `${site.address.line2}, ${site.address.country}`], href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}` },
    { icon: Phone, title: "Call us", lines: site.phones, href: `tel:${site.phones[0].replace(/\s/g, "")}` },
    { icon: Mail, title: "Email us", lines: [site.email, site.altEmail], href: `mailto:${site.email}` },
    { icon: Clock, title: "Available", lines: ["24/7 support", "We're just a phone call away"], href: undefined },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Do you think alike? <span className="text-brand">Let&apos;s talk.</span></>}
        text="If you are thinking about your business, we are the one-stop solution for success. Reach out any time and we will make it done."
        image="/images/handshake.jpg"
      />

      <section className="relative bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ icon: Icon, title, lines, href }, i) => {
              const content = (
                <>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30 transition group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="mt-1 break-words text-sm text-steel">{l}</p>
                  ))}
                </>
              );
              return (
                <Reveal key={title} delay={i * 80}>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group block h-full rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                      {content}
                    </a>
                  ) : (
                    <div className="group h-full rounded-3xl bg-white p-7 shadow-sm">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <Suspense fallback={<div className="h-[640px] rounded-3xl bg-white shadow-xl" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-2">
              <div className="h-full min-h-[420px] overflow-hidden rounded-3xl bg-white p-2 shadow-xl">
                <iframe
                  title="Brainstorm Communications location"
                  src={mapSrc}
                  className="h-full min-h-[420px] w-full rounded-[1.25rem] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
