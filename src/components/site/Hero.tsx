import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { GoldParticles } from "./GoldParticles";
import heroImg from "@/assets/hero-jewellery.jpg";
import jhumka from "@/assets/product-jhumka.jpg";
import bangles from "@/assets/product-bangles.jpg";
import { waLink } from "@/lib/site";

export const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const text = headingRef.current.textContent || "";
    headingRef.current.innerHTML = text
      .split("")
      .map((c) => `<span class="inline-block" style="opacity:0;transform:translateY(40px)">${c === " " ? "&nbsp;" : c}</span>`)
      .join("");
    const chars = headingRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(chars, { opacity: 1, y: 0, duration: 0.8, stagger: 0.025, ease: "power3.out" })
      .from(subRef.current, { opacity: 0, y: 30, duration: 1, ease: "power2.out" }, "-=0.4")
      .from(btnsRef.current?.children || [], { opacity: 0, y: 24, duration: 0.7, stagger: 0.15, ease: "power2.out" }, "-=0.5")
      .from(stackRef.current?.children || [], { opacity: 0, y: 60, scale: 0.9, duration: 0.9, stagger: 0.18, ease: "power3.out" }, "-=0.7");
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Glow + particles */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] rounded-full opacity-40 blur-3xl"
             style={{ background: "radial-gradient(circle, hsl(44 73% 66% / 0.35), transparent 60%)" }} />
        <GoldParticles />
      </div>

      <div className="container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-rose-gold mb-6">
            <span className="h-px w-10 bg-rose-gold" /> Madhurawada · Visakhapatnam
          </span>
          <h1 ref={headingRef} className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] text-silver text-shadow-gold">
            Timeless Elegance. Pure Craftsmanship.
          </h1>
          <p ref={subRef} className="mt-8 max-w-xl text-silver/75 text-lg leading-relaxed">
            Authentic Andhra traditional gold &amp; silver jewellery — vaddanam, kasulaperu,
            jhumkas, mango mala and bridal sets, hand-finished and BIS hallmarked.
          </p>
          <div ref={btnsRef} className="mt-10 flex flex-wrap gap-4">
            <a href="#collections" className="btn-gold">Explore Collections</a>
            <a href={waLink()} target="_blank" rel="noopener" className="btn-ghost-gold">Book Consultation</a>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[440px] sm:h-[520px]" ref={stackRef}>
          <div className="absolute top-0 right-0 w-[78%] h-[80%] rounded-2xl overflow-hidden gold-border glow-gold animate-float">
            <img src={heroImg} alt="Signature gold necklace" className="w-full h-full object-cover" width={1280} height={1280} />
          </div>
          <div className="absolute bottom-0 left-0 w-[55%] h-[48%] rounded-2xl overflow-hidden gold-border glow-rose animate-float" style={{ animationDelay: "1.5s" }}>
            <img src={jhumka} alt="Temple jhumka earrings" className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
          </div>
          <div className="absolute bottom-10 right-4 w-[40%] h-[36%] rounded-2xl overflow-hidden gold-border animate-float" style={{ animationDelay: "0.8s" }}>
            <img src={bangles} alt="Gold bangles stack" className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
          </div>
        </div>
      </div>

      <a href="#andhra" aria-label="Scroll" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silver/60 hover:text-gold-light animate-bounce-soft">
        <ChevronDown size={28} />
      </a>
    </section>
  );
};
