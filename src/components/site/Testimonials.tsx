import { Star } from "lucide-react";

const reviews = [
  { name: "Lakshmi Prasanna", city: "MVP Colony, Vizag", text: "Beautiful kasulaperu for my wedding. The craftsmanship is unmatched in Visakhapatnam." },
  { name: "Sridevi Reddy", city: "Madhurawada", text: "Bought a vaddanam from Srivatsala — the detailing is absolutely traditional and pure." },
  { name: "Padmaja Rao", city: "Gajuwaka", text: "Trusted them for 15 years. BIS hallmarked, fair making charges, very personal service." },
  { name: "Anitha Naidu", city: "Madhurawada", text: "Their silver collection is beautiful. Got my daughter mattelu — absolutely loved it." },
  { name: "Vasundhara Devi", city: "Rushikonda", text: "Got my bridal jhumkas custom made. They captured exactly the temple style I wanted." },
  { name: "Bhavani Shankari", city: "PM Palem", text: "Generations of trust. My mother shopped here, and now I do too." },
];

const Card = ({ r }: { r: (typeof reviews)[number] }) => (
  <article className="shrink-0 w-[320px] sm:w-[380px] luxury-card rounded-2xl p-7 gold-border mr-5">
    <span className="font-display text-5xl text-rose-gold leading-none block">“</span>
    <p className="text-silver/85 text-sm leading-relaxed mt-2">{r.text}</p>
    <div className="flex gap-1 mt-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-[hsl(var(--gold-light))] text-[hsl(var(--gold-light))]" />
      ))}
    </div>
    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[hsl(var(--gold)/0.2)]">
      <div className="w-10 h-10 rounded-full grid place-items-center bg-[hsl(var(--rose-gold))] text-[hsl(var(--bg-dark))] font-semibold text-sm">
        {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </div>
      <div>
        <p className="text-silver text-sm font-medium">{r.name}</p>
        <p className="text-silver/55 text-xs">{r.city}</p>
      </div>
    </div>
  </article>
);

export const Testimonials = () => (
  <section className="py-24 sm:py-32 overflow-hidden">
    <div className="container text-center max-w-2xl mx-auto mb-14">
      <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Testimonials</span>
      <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Loved by <span className="text-gradient-gold">Vizag families</span></h2>
    </div>
    <div className="overflow-hidden">
      <div className="flex" style={{ animation: "tmarq 40s linear infinite" }}>
        {[...reviews, ...reviews].map((r, i) => <Card key={i} r={r} />)}
      </div>
      <style>{`@keyframes tmarq { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  </section>
);
