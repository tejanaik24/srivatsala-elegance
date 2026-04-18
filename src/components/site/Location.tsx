import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const Location = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll("[data-loc]"), {
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
      opacity: 0, y: 50, stagger: 0.15, duration: 0.9, ease: "power3.out",
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const mapsQ = encodeURIComponent("Madhurawada, Visakhapatnam, Andhra Pradesh 530048");
  return (
    <section id="location" className="container py-24 sm:py-32">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">Visit Us</span>
        <h2 className="font-display text-4xl sm:text-5xl mt-3 text-silver">Find our <span className="text-gradient-gold">Showroom</span></h2>
      </div>

      <div ref={ref} className="grid lg:grid-cols-5 gap-6">
        <div data-loc className="lg:col-span-3 rounded-2xl overflow-hidden gold-border luxury-card min-h-[420px]">
          <iframe
            title="Srivatsala Silver House map"
            src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div data-loc className="lg:col-span-2 luxury-card rounded-2xl p-8 gold-border">
          <h3 className="font-display text-2xl text-silver">{SITE.name}</h3>
          <p className="text-rose-gold text-sm mt-1 tracking-wide">{SITE.tagline}</p>

          <div className="mt-6 space-y-4 text-sm text-silver/80">
            <div className="flex gap-3"><MapPin size={18} className="text-gold-light shrink-0 mt-0.5" /><p>{SITE.address}</p></div>
            <div className="flex gap-3"><Phone size={18} className="text-gold-light shrink-0 mt-0.5" /><a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold-light">{SITE.phone}</a></div>
            <div className="flex gap-3"><Clock size={18} className="text-gold-light shrink-0 mt-0.5" /><p>{SITE.hours}</p></div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost-gold !py-2.5 !px-4 text-xs"><Phone size={14} /> Call</a>
            <a href={waLink()} target="_blank" rel="noopener" className="btn-gold !py-2.5 !px-4 text-xs"><MessageCircle size={14} /> WhatsApp</a>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQ}`} target="_blank" rel="noopener" className="btn-ghost-gold !py-2.5 !px-4 text-xs"><Navigation size={14} /> Directions</a>
          </div>
        </div>
      </div>
    </section>
  );
};
