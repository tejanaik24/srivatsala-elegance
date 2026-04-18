import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, BadgePercent, Heart, Gift } from "lucide-react";

const offers = [
  { Icon: Sparkles, title: "Gold Savings Scheme", desc: "Save monthly, redeem in jewellery with bonus benefits." },
  { Icon: BadgePercent, title: "Zero Making on Silver", desc: "No making charges across our silver collection." },
  { Icon: Heart, title: "Bridal Discount", desc: "Special pricing on complete bridal sets." },
  { Icon: Gift, title: "Festival Offers", desc: "Seasonal benefits during Diwali & Akshaya Tritiya." },
];

export const Offers = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll<HTMLElement>("[data-offer]");
    cards.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0, x: i % 2 === 0 ? -60 : 60, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Offers &amp; Schemes</span>
        <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Benefits, the <span className="text-gradient-gold">Srivatsala way</span></h2>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 gap-5">
        {offers.map(({ Icon, title, desc }) => (
          <div key={title} data-offer className="relative luxury-card rounded-2xl p-7 gold-border overflow-hidden">
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase bg-[hsl(var(--rose-gold))] text-[hsl(var(--bg-dark))]">
              <span className="relative">
                Limited Time
                <span className="absolute -inset-2 rounded-full animate-pulse-ring border border-[hsl(var(--rose-gold))]" />
              </span>
            </span>
            <div className="w-12 h-12 rounded-full grid place-items-center mb-5 border border-[hsl(var(--gold)/0.4)] text-gold-light">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-2xl text-silver">{title}</h3>
            <p className="text-silver/70 mt-2 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
