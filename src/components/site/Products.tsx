import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import vaddanam from "@/assets/product-vaddanam.jpg";
import jhumka from "@/assets/product-jhumka.jpg";
import kasulaperu from "@/assets/product-kasulaperu.jpg";
import bangles from "@/assets/product-bangles.jpg";
import silver from "@/assets/product-silver.jpg";
import hero from "@/assets/hero-jewellery.jpg";
import { waLink } from "@/lib/site";

type Tag = "Gold" | "Silver" | "Bridal" | "Andhra Traditional" | "Daily Wear";

const products: { name: string; img: string; weight: string; tags: Tag[] }[] = [
  { name: "Lakshmi Kasulaperu", img: kasulaperu, weight: "42g", tags: ["Gold", "Andhra Traditional", "Bridal"] },
  { name: "Bridal Vaddanam", img: vaddanam, weight: "165g", tags: ["Gold", "Bridal", "Andhra Traditional"] },
  { name: "Temple Jhumkas", img: jhumka, weight: "18g", tags: ["Gold", "Andhra Traditional"] },
  { name: "Royal Gold Bangles", img: bangles, weight: "78g", tags: ["Gold", "Daily Wear"] },
  { name: "Signature Choker", img: hero, weight: "55g", tags: ["Gold", "Bridal"] },
  { name: "Silver Bangle Pair", img: silver, weight: "62g", tags: ["Silver", "Daily Wear"] },
  { name: "Gundla Haram", img: kasulaperu, weight: "92g", tags: ["Gold", "Andhra Traditional", "Bridal"] },
  { name: "Mango Mala", img: hero, weight: "48g", tags: ["Gold", "Andhra Traditional"] },
  { name: "Pearl Drop Jhumkas", img: jhumka, weight: "14g", tags: ["Gold", "Daily Wear"] },
  { name: "Antique Vaddanam", img: vaddanam, weight: "180g", tags: ["Gold", "Bridal", "Andhra Traditional"] },
  { name: "Silver Anklets", img: silver, weight: "85g", tags: ["Silver", "Daily Wear"] },
  { name: "Heritage Necklace", img: hero, weight: "60g", tags: ["Gold", "Andhra Traditional"] },
];

const filters: ("All" | Tag)[] = ["All", "Gold", "Silver", "Bridal", "Andhra Traditional", "Daily Wear"];

export const Products = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const gridRef = useRef<HTMLDivElement>(null);

  const list = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.tags.includes(active as Tag))),
    [active]
  );

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-product]");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: false },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === gridRef.current && t.kill());
  }, [active]);

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Featured</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Signature <span className="text-gradient-gold">Pieces</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide border transition-all ${
                active === f
                  ? "bg-[hsl(var(--gold))] text-[hsl(var(--bg-dark))] border-transparent shadow-[var(--shadow-gold)]"
                  : "border-[hsl(var(--gold)/0.4)] text-silver/80 hover:text-gold-light hover:border-[hsl(var(--gold-light))]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((p, i) => (
            <article
              key={`${p.name}-${i}`}
              data-product
              className="group luxury-card rounded-2xl overflow-hidden gold-border hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-navy-dark">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase bg-[hsl(var(--bg-dark)/0.7)] text-gold-light border border-[hsl(var(--gold)/0.4)] backdrop-blur">
                  BIS Hallmarked
                </span>
                <button
                  onClick={() => setLiked((s) => ({ ...s, [p.name + i]: !s[p.name + i] }))}
                  aria-label="Wishlist"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center bg-[hsl(var(--bg-dark)/0.7)] backdrop-blur border border-[hsl(var(--gold)/0.3)] transition hover:scale-110"
                >
                  <Heart
                    size={16}
                    className={liked[p.name + i] ? "fill-[hsl(var(--rose-gold))] text-[hsl(var(--rose-gold))]" : "text-silver"}
                  />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-silver">{p.name}</h3>
                <p className="text-xs text-silver/55 mt-1 tracking-wide">Approx. {p.weight}</p>
                <a
                  href={waLink(`Hi Srivatsala Silver House, I'd like to enquire about: ${p.name}`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-gold-light group/link"
                >
                  Enquire on WhatsApp
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
