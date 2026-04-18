import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const designs = [
  { name: "Vaddanam", desc: "Ornate bridal waist belt" },
  { name: "Kasulaperu", desc: "Lakshmi coin necklace" },
  { name: "Gundla Haram", desc: "Long beaded necklace" },
  { name: "Jhumkas", desc: "Bell-shaped earrings" },
  { name: "Mango Mala", desc: "Mango motif necklace" },
  { name: "Nethichutti", desc: "Forehead ornament" },
  { name: "Vanki", desc: "Armlet with gem inlay" },
  { name: "Buttalu", desc: "Stud earrings" },
  { name: "Mattelu", desc: "Silver toe rings" },
];

export const AndhraTraditional = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll("[data-card]");
    gsap.from(cards, {
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
      opacity: 0, y: 60, stagger: 0.08, duration: 0.9, ease: "power3.out",
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === ref.current && t.kill());
  }, []);

  return (
    <section id="andhra" ref={ref} className="container py-24 sm:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Heritage of Andhra</span>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 text-silver">Andhra Traditional <span className="text-gradient-gold">Designs</span></h2>
        <p className="text-silver/70 mt-5">Classic South Indian jewellery — crafted in the timeless temple style passed through generations.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        {designs.map((d) => (
          <div key={d.name} data-card className="group relative luxury-card rounded-2xl p-6 sm:p-8 gold-border overflow-hidden hover:-translate-y-1 transition-transform duration-300">
            <div aria-hidden className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition" style={{ background: "var(--gradient-gold)" }} />
            <h3 className="font-display text-2xl sm:text-3xl text-gold-light">{d.name}</h3>
            <p className="text-silver/70 text-sm mt-2">{d.desc}</p>
            <div className="mt-6 h-px w-12 bg-rose-gold/60 group-hover:w-24 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};
