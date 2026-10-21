import type { Metadata } from "next";
import Image from "next/image";
import { Award, Building2, Factory, Globe, Leaf, MapPin, Phone, Mail, Users, Handshake } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Partners",
  description: "Brainstorm Communications is an associate of Article Label & Accessories Ltd. (R.P.H. Group) and The Uniter Limited.",
};

const glance = [
  { icon: Building2, label: "Established", value: "1997 / 2003" },
  { icon: Factory, label: "Factory Area", value: "30,000 sft" },
  { icon: Users, label: "Total Manpower", value: "400+" },
  { icon: Globe, label: "Retailers", value: "80+" },
  { icon: Handshake, label: "Vendors", value: "200+" },
  { icon: Award, label: "Annual Revenue", value: "10M USD" },
];

const journey = [
  ["2003", "Foundation Year", "Founded under the leadership of Ms. Israt Jahan Merry and Mr. Hanif Mondal, growing from R.P.H. Label (1997)."],
  ["2005", "Woven & Printed Labels", "Introduced woven and printed label manufacturing, a major milestone in growth."],
  ["2008", "Offset Production", "German Heidelberg offset printing machines opened new possibilities for labels and accessories."],
  ["2017", "Expanded Production", "Added poly bags, narrow fabrics, leather and silicon patches and more."],
  ["2020", "Global Standards", "Achieved OEKO-TEX®, FSC and GRS certifications."],
  ["2024", "Automation & ERP", "Strengthened production and supply chain teams and introduced an ERP system."],
  ["2025", "Global Presence", "Expanded into the global market, serving customers around the world."],
];

const why = [
  "Certified Company", "Modern Machineries", "Dedicated Customer Service", "Innovative Design",
  "Eco-friendly Technology", "BGAPMEA Member", "Cost-effective Operation", "Creative Marketing",
  "Strong Banking Support", "Strategic Supply Chain", "Business Ethics",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our associates"
        title={<>Stronger <span className="text-brand">together</span></>}
        text="Brainstorm Communications is an associate of Article Label & Accessories Ltd. and The Uniter Limited, combining creative service with certified, high-capacity manufacturing."
        image="/images/al-narrow-floor.jpg"
      />

      {/* ARTICLE LABEL */}
      <section id="article-label" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="R.P.H. Group · Sister concern"
                title={<>Article Label & <span className="text-brand">Accessories Ltd.</span></>}
                text="100% computerized woven label, printed label, offset paper items and all kinds of garments accessories manufacturer, supplier and exporter."
              />
              <Reveal delay={100} className="mt-6 space-y-4 leading-relaxed text-steel">
                <p>
                  Article Label & Accessories Ltd., R.P.H. Label & Accessories and Article Printing & Packaging are proud sister
                  concerns of R.P.H. Group, a leading garments accessories manufacturer based in Dhaka, Bangladesh, producing
                  premium-quality trims and packaging for local and international apparel brands since 2003.
                </p>
                <p>
                  Environmental responsibility is a core principle: the group strictly complies with Bangladesh&apos;s environmental
                  regulations and prioritizes eco-friendly materials and sustainable production practices. It is an active member
                  of BGAPMEA and of the Dhaka Chamber of Commerce & Industry (DCCI) since 2018.
                </p>
              </Reveal>
            </div>
            <Reveal className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image src="/images/al-factory.jpg" alt="Article Label factory building" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3 rounded-2xl bg-white p-4 text-center shadow-xl">
                {["OEKO-TEX®", "FSC®", "GRS"].map((c) => (
                  <div key={c} className="flex flex-col items-center gap-1">
                    <Leaf className="h-5 w-5 text-brand" />
                    <span className="text-sm font-bold text-ink">{c}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Leadership */}
          <div className="mt-24 grid gap-6 md:grid-cols-2">
            {[
              { name: "Israt Jahan Merry", role: "Chairman", text: "Founding Chairman whose vision and dedication laid the foundation for one of Bangladesh's most trusted garment accessories companies, admired for integrity, leadership and commitment to sustainability." },
              { name: "Md. Hanif Mondal", role: "Managing Director", text: "A dynamic leader who transformed the company into a modern, customer-focused organization, introducing advanced technologies, eco-friendly practices and quality-driven production lines." },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className="flex gap-6 rounded-3xl bg-mist p-8">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand font-display text-xl font-bold text-white">
                  {p.name.replace("Md. ", "").split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                  <p className="text-sm font-semibold text-brand">{p.role}</p>
                  <p className="mt-3 leading-relaxed text-steel">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* At a glance */}
          <div className="mt-24">
            <SectionHeading center eyebrow="We at a glance" title="Numbers that speak" />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {glance.map(({ icon: Icon, label, value }, i) => (
                <Reveal key={label} delay={i * 60} className="rounded-3xl border border-black/5 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                  <Icon className="mx-auto h-8 w-8 text-brand" />
                  <p className="mt-4 font-display text-2xl font-extrabold text-ink">{value}</p>
                  <p className="mt-1 text-sm text-steel">{label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div aria-hidden className="absolute inset-0 bg-[url('/images/world-map.svg')] bg-[length:110%_auto] bg-center bg-no-repeat opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading light center eyebrow="Journey to success" title="Two decades of growth" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map(([y, t, d], i) => (
              <Reveal key={y} delay={(i % 4) * 80} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 transition hover:ring-brand">
                <p className="font-display text-4xl font-extrabold text-brand">{y}</p>
                <h3 className="mt-3 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why + certifications */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Why Article Label" title={<>Certified, modern & <span className="text-brand">responsible</span></>}
              text="Products pass COSTCO screening tests, comply with California Proposition 65, and are lead-free, azo-free and phthalate-free. The company is working towards ISO 9001:2015, WRAP, GOTS, SEDEX and amfori BSCI certifications." />
            <Reveal delay={100} className="mt-8 flex flex-wrap gap-3">
              {why.map((w) => (
                <span key={w} className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink">{w}</span>
              ))}
            </Reveal>
          </div>
          <Reveal className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl">
            <Image src="/images/al-certificates.jpg" alt="Certificates" width={985} height={1234} className="h-auto w-full rounded-2xl" sizes="(min-width:1024px) 45vw, 100vw" />
          </Reveal>
        </div>
      </section>

      {/* Buyers */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Business partners" title="Esteemed global partners" />
          <Reveal className="mt-12 overflow-hidden rounded-3xl bg-white p-4 shadow-xl sm:p-8">
            <Image src="/images/al-buyers.jpg" alt="Global buyers of Article Label" width={1406} height={956} className="h-auto w-full" sizes="(min-width:1280px) 1100px, 100vw" />
          </Reveal>
          <Reveal className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <MapPin className="h-6 w-6 text-brand" />
              <p className="mt-3 font-semibold text-ink">Corporate Office</p>
              <p className="text-sm text-steel">KA-86/C, Kuril Bishwa Road, Vatara, Dhaka-1230</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Factory className="h-6 w-6 text-brand" />
              <p className="mt-3 font-semibold text-ink">Factories</p>
              <p className="text-sm text-steel">Unit-01: 16/D, Chanpara, Uzampur, Uttarkhan, Uttara, Dhaka-1230<br />Unit-02: 149/5, Arambagh, Motijheel, Dhaka-1000</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Phone className="h-6 w-6 text-brand" />
              <p className="mt-3 font-semibold text-ink">Contact</p>
              <p className="text-sm text-steel">Mr. Mohiuddin Masud (Shakil), Advisor<br />+880 17070 82158</p>
              <a href="mailto:shakil@articlelabelbd.com" className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand"><Mail className="h-4 w-4" /> shakil@articlelabelbd.com</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE UNITER */}
      <section id="the-uniter" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image src="/images/meeting.jpg" alt="The Uniter Limited team" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div aria-hidden className="rings absolute -top-10 -left-10 -z-10 h-56 w-56 text-brand/25" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Associate" title={<>The <span className="text-brand">Uniter</span> Limited</>}
              text="The Uniter Limited is an associate of Brainstorm Communications. Together we share a vision to become a trusted name in the garments accessories industry through quality, reliable service and excellence in production." />
            <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Garments accessories sourcing", "Quality-focused production", "Reliable, on-time delivery", "Long-term partnerships"].map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-2xl bg-mist px-5 py-4 font-medium text-ink">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand" /> {t}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
