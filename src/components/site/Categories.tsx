import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cats = [
  "Rings", "Necklaces", "Bangles", "Earrings", "Chains", "Bridal Sets",
  "Silver", "Pendants", "Mangalsutra", "Anklets", "Vaddanam", "Kasulaperu",
];

const initials = (s: string) => s.slice(0, 2).toUpperCase();

export const Categories = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll("[data-cat]"), {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      opacity: 0, y: 50, stagger: 0.06, duration: 0.7, ease: "power3.out",
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === ref.current && t.kill());
  }, []);

  return (
    <section id="collections" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Shop by Category</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Our <span className="text-gradient-gold">Collections</span></h2>
          </div>
        </div>
      </div>

      <div ref={ref} className="container">
        <div className="flex lg:grid lg:grid-cols-6 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0">
          {cats.map((c) => (
            <button
              key={c}
              data-cat
              className="group snap-center shrink-0 lg:shrink flex flex-col items-center gap-3 w-28 lg:w-auto"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full grid place-items-center luxury-card gold-border transition-transform duration-500 group-hover:scale-105">
                <div aria-hidden className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition" style={{ background: "radial-gradient(circle, hsl(44 73% 66% / 0.25), transparent 70%)" }} />
                <span className="font-display text-2xl text-gold-light">{initials(c)}</span>
              </div>
              <span className="text-sm text-silver/85 group-hover:text-gold-light transition">{c}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
