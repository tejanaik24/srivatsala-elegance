const row1 = ["Bridal Heritage", "Temple Gold", "Antique Series", "Rose Gold Edit", "Daily Diamonds", "Silver Soul"];
const row2 = ["Festive Glow", "Kasulaperu", "Vaddanam", "Mango Mala", "Pearl Whisper", "Modern Minimal"];

const Row = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="overflow-hidden py-4">
    <div
      className="flex gap-6 whitespace-nowrap"
      style={{
        animation: `strip 35s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...items, ...items, ...items].map((t, i) => (
        <span
          key={i}
          className="font-display text-3xl sm:text-5xl px-6 py-3 rounded-full border border-[hsl(var(--gold)/0.3)] text-silver/85"
        >
          {t} <span className="text-rose-gold">✦</span>
        </span>
      ))}
    </div>
    <style>{`@keyframes strip { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
  </div>
);

export const CollectionsStrip = () => (
  <section className="py-16 border-y border-[hsl(var(--gold)/0.15)] bg-[hsl(var(--bg-dark)/0.5)]">
    <Row items={row1} />
    <Row items={row2} reverse />
  </section>
);
