import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";
import { brands } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Gallery of woven labels, hang tags, care labels, patches, heat transfers, poly bags and trims produced by Brainstorm Communications.",
};

const items: GalleryItem[] = [
  { src: "/images/woven-labels.jpg", title: "Premium Woven Labels", category: "Labels", w: 828, h: 1176 },
  { src: "/images/care-labels.jpg", title: "Care Labels, Heat Seals & Leather Patches", category: "Labels", w: 968, h: 1176 },
  { src: "/images/al-printed-items.jpg", title: "Printed, Care & Barcode Labels", category: "Labels", w: 1406, h: 796 },
  { src: "/images/production-items.jpg", title: "Hang Tags for Global Brands", category: "Tags & Printing", w: 802, h: 1176 },
  { src: "/images/product-grid.jpg", title: "Hang Tags, Stickers & Packaging", category: "Tags & Printing", w: 1690, h: 1176 },
  { src: "/images/al-offset-items.jpg", title: "Offset Printed Tags", category: "Tags & Printing", w: 1406, h: 1234 },
  { src: "/images/al-heat-items.jpg", title: "Heat Transfer Labels", category: "Heat Transfer", w: 1336, h: 1134 },
  { src: "/images/al-heat-transfer.jpg", title: "Heat Transfer Application", category: "Heat Transfer", w: 1344, h: 878 },
  { src: "/images/al-leather.jpg", title: "Leather Patches", category: "Patches", w: 1336, h: 836 },
  { src: "/images/al-key-products.jpg", title: "Key Product Range", category: "Patches", w: 1406, h: 1591 },
  { src: "/images/al-polybag.jpg", title: "Poly Bag Production", category: "Packaging", w: 638, h: 439 },
  { src: "/images/al-narrow-items.jpg", title: "Tapes, Drawstrings & Cords", category: "Trims", w: 1336, h: 876 },
  { src: "/images/al-narrow.jpg", title: "Narrow Fabric Machines", category: "Trims", w: 1055, h: 1023 },
  { src: "/images/al-woven-machine.jpg", title: "Vaupel Woven Label Loom", category: "Facility", w: 641, h: 499 },
  { src: "/images/al-ultrasonic.jpg", title: "Ultrasonic Cutting", category: "Facility", w: 1060, h: 795 },
  { src: "/images/al-printing.jpg", title: "Screen Printing", category: "Facility", w: 1027, h: 650 },
  { src: "/images/al-offset.jpg", title: "Offset Printing Press", category: "Facility", w: 801, h: 406 },
  { src: "/images/al-operator.jpg", title: "Label Printing Line", category: "Facility", w: 1207, h: 1642 },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="The insightful production"
        title={<>Our product <span className="text-brand">gallery</span></>}
        text="Labels, tags, patches and packaging we manufacture for local and international apparel brands, and a look inside the facilities where they are made."
        image="/images/product-grid.jpg"
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery items={items} />
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Brands served" title={<>Our trims travel with <span className="text-brand">world fashion</span></>} text="Brands for which we and our partners have produced labels, tags and accessories." />
          <Reveal className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => (
              <div key={b} className="flex h-20 items-center justify-center rounded-2xl bg-white px-3 text-center font-display font-bold tracking-wide text-ink/70 uppercase shadow-sm transition hover:-translate-y-1 hover:text-brand hover:shadow-lg">
                {b}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
