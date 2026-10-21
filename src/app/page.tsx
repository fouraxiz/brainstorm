import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Leaf, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { Counter, Reveal, SectionHeading } from "@/components/ui";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBand from "@/components/CtaBand";
import { brands, clients, services, site, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white pt-20">
        <div aria-hidden className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] bg-brand lg:block [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
        <div aria-hidden className="rings animate-spin-slow absolute -top-48 -left-48 -z-10 h-[520px] w-[520px] text-brand/15" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[min(calc(100vh-5rem),820px)] lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
              <Sparkles className="h-4 w-4" /> Garments Accessories · Printing · Packaging
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl xl:text-7xl">
              Think Ahead.
              <br />
              <span className="text-gradient">Act Smart.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
              Brainstorm Communications crafts woven labels, printed labels, hang tags, patches, heat
              transfers and packaging for apparel brands at home and abroad, with seamless,
              on-time service since {site.founded}.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-xl shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Explore Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 px-7 py-4 font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                <PhoneCall className="h-5 w-5" /> Get a Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-ink/80">
              {["OEKO-TEX® partner facility", "EU & USA compliant", "24/7 support"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square">
              <div aria-hidden className="rings absolute inset-0 text-brand/25 lg:text-white/25" />
              <div className="absolute inset-[12%] overflow-hidden rounded-full border-[10px] border-white shadow-2xl">
                <Image src="/images/woven-labels.jpg" alt="Premium woven labels" fill priority className="object-cover" sizes="(min-width:1024px) 40vw, 80vw" />
              </div>
              <div className="animate-float absolute top-[4%] -left-2 w-36 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:w-44">
                <Image src="/images/care-labels.jpg" alt="Care labels and leather patches" width={400} height={480} className="h-auto w-full" />
              </div>
              <div className="animate-float absolute right-0 bottom-[2%] w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl [animation-delay:1.5s] sm:w-48">
                <Image src="/images/production-items.jpg" alt="Hang tags" width={400} height={580} className="h-auto w-full" />
              </div>
              <div className="absolute bottom-[10%] -left-2 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="font-display text-3xl font-extrabold text-brand">
                  <Counter value={13} suffix="+" />
                </p>
                <p className="text-sm font-medium text-steel">Years of excellence</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="marquee overflow-hidden border-y border-black/5 bg-mist py-6">
        <div className="marquee-track flex w-max gap-14">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="font-display text-xl font-bold tracking-wide whitespace-nowrap text-ink/30 uppercase">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/images/handshake.jpg" alt="Partnership handshake" fill className="object-cover object-[60%_center]" sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div className="absolute -right-4 -bottom-8 rounded-3xl bg-ink p-6 text-white shadow-2xl sm:-right-8">
              <p className="text-sm text-white/60">Started in</p>
              <p className="font-display text-5xl font-extrabold text-brand">{site.founded}</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Let's get introduced"
              title={<>It&apos;s an art to think ahead and <span className="text-brand">smartly act.</span></>}
              text="At Brainstorm Communications, we strive to keep crafting success stories with our seamless and up-to-the-mark services. Since 2013 we have been blending our services with the thoughts of our clients and delivering in-time service while maintaining outstanding quality."
            />
            <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, t: "On-time delivery", d: "In-time solutions, every order." },
                { icon: ShieldCheck, t: "Quality assured", d: "International quality standards." },
                { icon: Leaf, t: "Eco-conscious", d: "Biodegradable & recycled options." },
                { icon: Sparkles, t: "Creative team", d: "From brief to finished product." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{t}</p>
                    <p className="text-sm text-steel">{d}</p>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={200}>
              <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand">
                More about us <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-mist py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={<>Every trim your garment needs, <span className="text-brand">under one roof.</span></>}
            />
            <Reveal>
              <Link href="/services" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-brand">
                All services <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 90}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(min-width:1024px) 25vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg transition group-hover:rotate-6">
                      <ServiceIcon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="absolute top-4 right-4 font-display text-sm font-bold text-white/80">0{i + 1}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-ink transition group-hover:text-brand">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-brand py-20 text-white">
        <div aria-hidden className="rings absolute -top-40 -right-32 h-[460px] w-[460px] text-white/15" />
        <Image src="/images/brain-white.png" alt="" width={381} height={388} aria-hidden className="absolute -bottom-10 -left-10 w-64 opacity-10" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="font-display text-5xl font-extrabold sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-medium text-white/80">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="relative mt-10 text-center text-xs text-white/60">* Including our associate manufacturing partners</p>
      </section>

      {/* ON-TIME */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="The on-time solution"
              title={<>In-time service, <span className="text-brand">no sunset</span> on our work.</>}
              text="Feel free to knock us anytime for your need and we will make it done. We are just a phone call away! Share your thoughts and allow us to show the magic of splendid service. In the ever-changing world, we keep pace with trend and offer on-time solutions for your business deal."
            />
            <Reveal delay={100} className="mt-10 space-y-5">
              {[
                ["Share your brief", "Send your design, artwork or idea. We help even if you only have a sketch."],
                ["Sample & approve", "Our creative team prepares visuals and samples for approval."],
                ["Produce & deliver", "Bulk production with strict QC, delivered on schedule."],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand font-display text-lg font-bold text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-ink">{t}</p>
                    <p className="text-steel">{d}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal className="relative order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image src="/images/on-time.jpg" alt="Service bell" fill className="object-cover" sizes="(min-width:1024px) 40vw, 90vw" />
            </div>
            <div aria-hidden className="rings absolute -top-10 -right-6 -z-10 h-64 w-64 text-brand/30" />
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div aria-hidden className="absolute inset-0 bg-[url('/images/world-map.svg')] bg-[length:110%_auto] bg-center bg-no-repeat opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            center
            eyebrow="Our associates"
            title={<>Backed by strong <span className="text-brand">manufacturing partners</span></>}
            text="Brainstorm Communications is an associate of The Uniter Limited and Article Label & Accessories Ltd., giving our clients direct access to modern, certified production capacity."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <Link href="/partners#article-label" className="group block overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition hover:ring-brand">
                <div className="relative h-60 overflow-hidden">
                  <Image src="/images/al-building.jpg" alt="Article Label & Accessories factory" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold tracking-widest text-brand uppercase">R.P.H. Group</p>
                  <h3 className="mt-2 text-2xl font-bold">Article Label & Accessories Ltd.</h3>
                  <p className="mt-3 text-white/70">
                    100% computerized woven label, printed label, offset & all kinds of garments accessories.
                    OEKO-TEX®, FSC & GRS certified with 400+ skilled workforce.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">
                    View profile <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/partners#the-uniter" className="group block overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition hover:ring-brand">
                <div className="relative h-60 overflow-hidden">
                  <Image src="/images/al-narrow-floor.jpg" alt="The Uniter Limited production" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold tracking-widest text-brand uppercase">Associate</p>
                  <h3 className="mt-2 text-2xl font-bold">The Uniter Limited</h3>
                  <p className="mt-3 text-white/70">
                    A trusted associate supporting Brainstorm&apos;s journey in the garments accessories industry
                    through quality, reliable service and production excellence.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">
                    View profile <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="The insightful production"
            title={<>Labels & tags for <span className="text-brand">global fashion</span> brands</>}
            text="A glimpse of hang tags, labels and packaging we have produced for international retailers."
          />
          <Reveal className="mt-14 overflow-hidden rounded-3xl border border-black/5 bg-white p-4 shadow-xl sm:p-8">
            <Image src="/images/product-grid.jpg" alt="Hang tags and labels produced by Brainstorm" width={1690} height={1176} className="h-auto w-full" sizes="(min-width:1280px) 1200px, 100vw" />
          </Reveal>
          <div className="mt-10 text-center">
            <Link href="/products" className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-dark">
              View product gallery <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Our thoughtful clients" title="Trusted by leading companies" />
          <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span key={c} className="rounded-full border border-black/5 bg-white px-5 py-2.5 font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
                {c}
              </span>
            ))}
            <span className="rounded-full bg-brand px-5 py-2.5 font-medium text-white">and many more…</span>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
