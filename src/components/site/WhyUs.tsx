import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Repeat, Truck, Award } from "lucide-react";

const items = [
  { Icon: ShieldCheck, title: "BIS Hallmarked", desc: "Certified purity on every piece." },
  { Icon: Repeat, title: "Lifetime Exchange", desc: "Easy exchange policy, always." },
  { Icon: Truck, title: "Free Vizag Delivery", desc: "Complimentary across Visakhapatnam." },
  { Icon: Award, title: "25+ Years of Trust", desc: "Three generations of craftsmanship." },
];

const stats = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 1000, suffix: "+", label: "Unique Designs" },
  { value: 25, suffix: "+", label: "Years of Trust" },
];

export const WhyUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current.querySelectorAll("[data-feat]"), {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0, y: 50, stagger: 0.12, duration: 0.8, ease: "power3.out",
      });
    }
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll<HTMLElement>("[data-counter]");
      counters.forEach((el) => {
        const target = Number(el.dataset.counter || 0);
        gsap.fromTo(
          { v: 0 },
          { v: 0 },
          {
            v: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].v).toString();
            },
          }
        );
      });
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="why" className="container py-24 sm:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Why Srivatsala</span>
        <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Crafted on <span className="text-gradient-gold">Trust</span></h2>
      </div>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} data-feat className="group luxury-card rounded-2xl p-7 gold-border transition-all hover:glow-gold">
            <div className="w-12 h-12 rounded-full grid place-items-center mb-5 border border-[hsl(var(--gold)/0.4)] text-gold-light group-hover:scale-110 transition">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-xl text-silver">{title}</h3>
            <p className="text-silver/65 text-sm mt-2">{desc}</p>
          </div>
        ))}
      </div>

      <div ref={statsRef} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 luxury-card rounded-2xl p-10 gold-border">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl sm:text-6xl text-gradient-gold leading-none">
              <span data-counter={s.value}>0</span>{s.suffix}
            </div>
            <p className="mt-3 text-sm tracking-widest uppercase text-silver/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
