import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, waLink } from "@/lib/site";

const cols = [
  { title: "About", items: ["Our Story", "Craftsmanship", "BIS Hallmark", "Sustainability"] },
  { title: "Collections", items: ["Bridal", "Andhra Traditional", "Gold", "Silver", "Daily Wear"] },
  { title: "Services", items: ["Custom Orders", "Gold Savings Scheme", "Exchange Policy", "Free Vizag Delivery"] },
];

export const Footer = () => (
  <footer className="relative bg-[hsl(var(--bg-dark))] mt-12">
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gradient-gold)", boxShadow: "0 0 20px hsl(44 73% 66% / 0.5)" }} />
    <div className="container py-16">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Logo className="h-16 w-auto rounded-md" />
          <p className="text-silver/70 text-sm mt-5 max-w-sm leading-relaxed">
            {SITE.address}
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Youtube, MessageCircle].map((I, i) => (
              <a key={i} href={i === 3 ? waLink() : "#"} target="_blank" rel="noopener" className="w-10 h-10 grid place-items-center rounded-full border border-[hsl(var(--gold)/0.3)] text-silver hover:text-gold-light hover:border-[hsl(var(--gold-light))] transition">
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-lg text-gold-light">{c.title}</h4>
            <div className="h-px w-10 bg-rose-gold mt-2 mb-4" />
            <ul className="space-y-2.5 text-sm text-silver/75">
              {c.items.map((it) => (
                <li key={it}><a href="#" className="hover:text-gold-light transition">{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-[hsl(var(--gold)/0.15)] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-silver/55">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>Crafted with care in Visakhapatnam.</p>
      </div>
    </div>
  </footer>
);
