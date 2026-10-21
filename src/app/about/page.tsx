import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Crown, Eye, Quote, Target } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";
import { clients, site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 2013 Brainstorm Communications has delivered garments accessories, printing and packaging solutions from Dhaka, Bangladesh.",
};

const milestones = [
  { year: "2003", title: "Partner roots", text: "Our associate Article Label & Accessories Ltd. (R.P.H. Group) is founded in Dhaka, building the manufacturing base we rely on." },
  { year: "2013", title: "Brainstorm is born", text: "Started with a vision to become a trusted name in the garments accessories industry, as an associate of The Uniter Limited and Article Label & Accessories Ltd." },
  { year: "2020", title: "Certified supply chain", text: "Partner facilities achieved OEKO-TEX®, FSC and GRS certifications, opening doors to global retailers." },
  { year: "Today", title: "Think ahead, act smart", text: "Today we keep turning ideas into quality solutions and building lasting partnerships worldwide." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Brainstorm"
        title={<>Turning ideas into <span className="text-brand">quality solutions</span> since {site.founded}</>}
        text="It takes vision, experience and passion to become an equal performer. That vision continues to grow, turning ideas into quality solutions and building lasting partnerships."
        image="/images/think-tank.jpg"
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Let's brainstorm" title={<>Our <span className="text-brand">story</span></>} />
            <Reveal delay={100} className="mt-6 space-y-5 text-lg leading-relaxed text-steel">
              <p>
                In 2013, Brainstorm Communications, an associate of <strong className="text-ink">The Uniter Limited</strong> and{" "}
                <strong className="text-ink">Article Label & Accessories Ltd.</strong>, began with a vision to become a trusted name in the
                garments accessories industry through quality, reliable service and excellence in production.
              </p>
              <p>
                This vision was inspired and driven by years of industry experience and the expertise of{" "}
                <strong className="text-ink">Shekh Imran Hosen</strong>, whose passion for garments accessories and commitment to excellence
                laid the foundation for Brainstorm&apos;s journey.
              </p>
              <p>
                At home and abroad, we offer simple yet effective solutions for business success to corporate, industrial,
                readymade garments and accessories clients. Our creative team races against time to provide specialised and
                customised quality items, colours and finishes, while maintaining a very strong commitment to eco-efficiency and sustainability.
              </p>
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image src="/images/letterpress.jpg" alt="Printing heritage" fill className="object-cover" sizes="(min-width:1024px) 45vw, 100vw" />
            </div>
            <div className="absolute -bottom-8 -left-4 flex items-center gap-4 rounded-3xl bg-brand p-6 text-white shadow-2xl sm:-left-10">
              <Image src="/images/brain-white.png" alt="" width={60} height={61} className="h-14 w-auto" />
              <div>
                <p className="font-display text-xl font-bold">Think Ahead,</p>
                <p className="font-display text-xl font-bold">Act Smart.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / vision */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <Image src="/images/horizon.jpg" alt="" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading light center eyebrow="Horizon is the limit" title="Our mission & vision" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, t: "Mission", d: "We see after what has been seen. Side by side with introducing world-class products, our expert workforce makes sure that every millimetre is accurate." },
              { icon: Eye, t: "Vision", d: "To be one of the leading trading and manufacturing companies in Bangladesh, exploring overseas markets and creating milestones for successful business deals." },
              { icon: Compass, t: "Values", d: "Quality, punctuality and long-term relationships. Our strength depends on our clients' satisfaction, and every action we take is smart." },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 120} className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1 hover:ring-brand">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand"><Icon className="h-7 w-7" /></span>
                <h3 className="mt-6 text-2xl font-bold">{t}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {[
            {
              title: "What our MD thinks",
              who: "Shekh Imran Hosen",
              role: "Managing Director",
              text: "We walk through the intersection of perfection and trend. Bangladesh has a glorious history of readymade garments items. Through our uncompromising excellence we look forward to being a part of the history yet to be written. At Brainstorm Communications, we offer the complete package, from initial visuals produced from your design brief through to finished fabric products. Accompanied by our 13 years' experience, our services never miss client satisfaction. We are among the market leaders in printing, packaging, brand identity design & printing, promotional items alongside all kinds of garments accessories.",
            },
            {
              title: "Thoughts from the Chairman",
              who: "Mahida Islam Soma",
              role: "Chairman",
              text: "Every action of us is an outcome of innovation and experience. We believe in excellence. Difference is what really makes us different! In the era of globalization, we know that there is no alternative for a perfect mixture of value and timely outcome in the industry. That's what sets our motto. Rather than considering a surprising client, we prefer maintaining a long-term corporate relationship with you. Our strength depends on our clients' satisfaction. Having every action smart, our thoughts are always guided towards the path of making footprints to guide the others!",
            },
          ].map((m, i) => (
            <Reveal key={m.who} delay={i * 120} className="relative overflow-hidden rounded-[2rem] bg-mist p-8 sm:p-12">
              <div aria-hidden className="rings absolute -top-20 -right-20 h-60 w-60 text-brand/20" />
              <Quote className="relative h-12 w-12 text-brand" />
              <h3 className="relative mt-4 text-2xl font-bold text-ink">{m.title}</h3>
              <p className="relative mt-4 leading-relaxed text-steel">{m.text}</p>
              <div className="relative mt-8 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                  {m.who.split(" ").map((w) => w[0]).slice(-2).join("")}
                </span>
                <div>
                  <p className="font-semibold text-ink">{m.who}</p>
                  <p className="text-sm text-brand">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="The think tanks"
            title={<>Talents who find recreation in <span className="text-brand">making difference</span></>}
            text="An energetic and enthusiastic team running operations with adequate know-how about diversified categories and classes of national and overseas clients."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className="group rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative mx-auto h-28 w-28">
                  <div aria-hidden className="rings absolute -inset-4 text-brand/25 transition group-hover:text-brand/50" />
                  <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark font-display text-3xl font-bold text-white">
                    {p.name.split(" ").map((w) => w[0]).slice(-2).join("")}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-bold text-ink">{p.name}</h3>
                <p className="text-sm font-semibold text-brand">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel">{p.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Our journey" title="Milestones" />
          <div className="relative mt-16">
            <div aria-hidden className="absolute top-0 bottom-0 left-6 w-0.5 bg-brand/20 md:left-1/2" />
            {milestones.map((m, i) => (
              <Reveal key={m.year} className={`relative mb-12 pl-16 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"}`}>
                <span className={`absolute top-1 left-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand ring-8 ring-brand/15 ${i % 2 ? "md:-left-[18px]" : "md:right-[-18px] md:left-auto"}`}>
                  <Crown className="h-4 w-4 text-white" />
                </span>
                <p className="font-display text-3xl font-extrabold text-brand">{m.year}</p>
                <h3 className="mt-1 text-xl font-bold text-ink">{m.title}</h3>
                <p className="mt-2 text-steel">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Our thoughtful clients" title="Companies that trust us" />
          <Reveal className="mt-12 overflow-hidden rounded-3xl bg-white p-4 shadow-xl sm:p-6">
            <Image src="/images/clients.jpg" alt="Brainstorm clients" width={1690} height={1176} className="h-auto w-full" sizes="(min-width:1280px) 1200px, 100vw" />
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span key={c} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">{c}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
