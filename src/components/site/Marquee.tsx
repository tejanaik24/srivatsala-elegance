const items = [
  "✦ BIS Hallmarked Pure Jewellery",
  "✦ Free Delivery in Visakhapatnam",
  "✦ Authentic Andhra Traditional Designs",
  "✦ 25+ Years of Trust",
  "✦ Visit our Madhurawada Showroom",
  "✦ Bridal & Custom Orders Welcome",
];

export const Marquee = () => (
  <div className="relative overflow-hidden bg-[hsl(var(--rose-gold))] text-[hsl(var(--bg-dark))]">
    <div className="flex whitespace-nowrap py-2.5 animate-[shimmer_0s]">
      <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] gap-12 pr-12">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase">
            {t}
          </span>
        ))}
      </div>
      <div aria-hidden className="flex shrink-0 animate-[marquee_28s_linear_infinite] gap-12 pr-12">
        {[...items, ...items].map((t, i) => (
          <span key={`b${i}`} className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase">
            {t}
          </span>
        ))}
      </div>
    </div>
    <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-100%) } }`}</style>
  </div>
);
