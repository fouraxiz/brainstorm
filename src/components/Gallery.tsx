"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export type GalleryItem = { src: string; title: string; category: string; w: number; h: number };

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const shown = active === "All" ? items : items.filter((i) => i.category === active);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % shown.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + shown.length) % shown.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, shown.length]);

  const current = index !== null ? shown[index] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === c ? "bg-brand text-white shadow-lg shadow-brand/30" : "bg-mist text-ink hover:bg-brand/10 hover:text-brand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {shown.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-mist text-left shadow-sm transition hover:shadow-2xl"
          >
            <Image src={item.src} alt={item.title} width={item.w} height={item.h} className="h-auto w-full transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-6 opacity-0 transition group-hover:opacity-100">
              <div className="flex w-full items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-brand uppercase">{item.category}</p>
                  <p className="mt-1 text-lg font-bold text-white">{item.title}</p>
                </div>
                <Expand className="h-6 w-6 shrink-0 text-white" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur" onClick={() => setIndex(null)} role="dialog" aria-modal="true" aria-label={current.title}>
          <button type="button" className="absolute top-5 right-5 rounded-full bg-white/10 p-3 text-white hover:bg-brand" aria-label="Close" onClick={() => setIndex(null)}>
            <X className="h-6 w-6" />
          </button>
          <button type="button" className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-brand sm:left-6" aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setIndex((index! - 1 + shown.length) % shown.length); }}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.title} width={current.w} height={current.h} className="max-h-[80vh] w-auto rounded-2xl object-contain" sizes="90vw" />
            <figcaption className="mt-4 text-center text-white">
              <span className="text-brand">{current.category}</span> · {current.title}
            </figcaption>
          </figure>
          <button type="button" className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-brand sm:right-6" aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setIndex((index! + 1) % shown.length); }}>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
