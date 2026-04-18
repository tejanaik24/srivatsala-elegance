import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bridalImg from "@/assets/bridal-hero.jpg";
import { waLink } from "@/lib/site";

export const Bridal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(bgRef.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    if (headRef.current) {
      const text = headRef.current.textContent || "";
      headRef.current.innerHTML = text
        .split(" ")
        .map((w) => `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block">${w}</span></span>`)
        .join(" ");
      const inner = headRef.current.querySelectorAll("span > span");
      gsap.from(inner, {
        yPercent: 110,
        duration: 1, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="bridal" ref={ref} className="relative overflow-hidden py-24 sm:py-32 bg-[hsl(var(--bg-dark))]">
      {/* Falling petals */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-0 w-2 h-2 rounded-full bg-rose-gold/60 animate-petal-fall"
            style={{
              left: `${(i * 7 + 5) % 100}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${10 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[460px] sm:h-[560px] rounded-3xl overflow-hidden gold-border glow-rose">
          <img ref={bgRef} src={bridalImg} alt="South Indian bride in traditional gold jewellery" className="absolute inset-0 w-full h-[120%] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-dark))] via-transparent to-transparent" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-rose-gold">For the Bride</span>
          <h2 ref={headRef} className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 text-silver leading-tight">
            Dream Bridal Collection
          </h2>
          <p className="mt-6 text-silver/75 max-w-lg leading-relaxed">
            Curated bridal sets featuring vaddanam, kasulaperu, gundla haram, jhumkas
            and nethichutti — designed to honour Andhra heritage on your most important day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#collections" className="btn-gold">Shop Bridal</a>
            <a href={waLink("Hi, I'd like to book a bridal consultation.")} target="_blank" rel="noopener" className="btn-ghost-gold">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
