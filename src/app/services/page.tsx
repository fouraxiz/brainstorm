import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import ServiceIcon from "@/components/ServiceIcon";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Woven labels, printed & care labels, hang tags, heat transfers, leather & silicon patches, poly bags, narrow fabrics and brand identity printing.",
};

const capacity = [
  { label: "Woven Labels", value: "1M", unit: "pcs/day" },
  { label: "Printed Labels", value: "3.8M", unit: "pcs/day" },
  { label: "Offset Printing", value: "1.5M", unit: "pcs/day" },
  { label: "Poly Bags", value: "0.5M", unit: "pcs/day" },
  { label: "Lock Strings", value: "200K", unit: "pcs/day" },
  { label: "Heat Transfer", value: "100K", unit: "pcs/day" },
  { label: "Narrow Fabrics", value: "50K", unit: "yds/day" },
  { label: "Leather & Silicon", value: "25K", unit: "pcs/day each" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Specialized in <span className="text-brand">printing & packaging</span></>}
        text="We are among the global players delivering optimum service in printing and any kind of labelling. A wider collection of quality items, colours and finishes, with processes that meet the highest quality standards."
        image="/images/woven-wide.jpg"
      />

      {/* Quick nav */}
      <section className="sticky top-20 z-30 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-ink transition hover:border-brand hover:bg-brand hover:text-white">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:space-y-32 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-40 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
                  <Image src={s.image} alt={s.title} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width:1024px) 50vw, 100vw" />
                </div>
                <div aria-hidden className={`rings absolute -z-10 h-56 w-56 text-brand/25 ${i % 2 ? "-top-10 -left-10" : "-right-10 -bottom-10"}`} />
                <span className="absolute -top-6 left-6 font-display text-8xl font-extrabold text-brand/10 select-none">0{i + 1}</span>
              </Reveal>
              <Reveal delay={120}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-6 text-3xl font-bold text-ink sm:text-4xl">{s.title}</h2>
                <p className="mt-2 text-lg font-medium text-brand">{s.short}</p>
                <p className="mt-5 text-lg leading-relaxed text-steel">{s.description}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 rounded-xl bg-mist px-4 py-3 font-medium text-ink">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand">
                  Request a quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* Capacity */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div aria-hidden className="rings animate-spin-slow absolute -bottom-52 -left-52 h-[560px] w-[560px] text-brand/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading light center eyebrow="Production capacity" title={<>Scale you can <span className="text-brand">count on</span></>} text="Daily output through our associate manufacturing facilities with Vaupel, MEI, Heidelberg, Fuji and Konica Minolta machinery." />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {capacity.map((c, i) => (
              <Reveal key={c.label} delay={(i % 4) * 80} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-brand hover:ring-brand sm:p-8">
                <p className="font-display text-4xl font-extrabold sm:text-5xl">{c.value}</p>
                <p className="mt-1 text-sm text-white/60">{c.unit}</p>
                <p className="mt-4 font-semibold">{c.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
