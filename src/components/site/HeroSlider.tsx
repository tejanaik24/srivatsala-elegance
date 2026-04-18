import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { waLink } from "@/lib/site";
import slideHues from "@/assets/slide-hues.jpg";
import slideBridal from "@/assets/slide-bridal.jpg";
import slideFestive from "@/assets/slide-festive.jpg";

type Slide = {
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  italic: string;
  subtitle: string;
  offerLine1: string;
  offerLine2: string;
  offerNote: string;
  period: string;
  cta: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    img: slideHues,
    alt: "Woman in pink saree wearing a gold and gemstone necklace",
    eyebrow: "A SRIVATSALA SIGNATURE",
    title: "Hues",
    italic: "natural gemstones,",
    subtitle: "vibrant colours",
    offerLine1: "FLAT 15% OFF",
    offerLine2: "on making charges",
    offerNote: "On gold jewellery & gemstone collections",
    period: "Offer period: 18th – 30th April 2026",
    cta: "Explore now",
    ctaHref: "#collections",
  },
  {
    img: slideBridal,
    alt: "South Indian bride in red saree with full traditional gold bridal jewellery",
    eyebrow: "FOR THE BRIDE",
    title: "Vivaah",
    italic: "bridal heirlooms,",
    subtitle: "made for forever",
    offerLine1: "UPTO 20% OFF",
    offerLine2: "on bridal sets",
    offerNote: "Vaddanam · Kasulaperu · Gundla Haram",
    period: "Book your bridal consultation today",
    cta: "Book consultation",
    ctaHref: waLink("Hi, I'd like to book a bridal consultation."),
  },
  {
    img: slideFestive,
    alt: "Woman in pastel blue saree celebrating festival with gold jewellery",
    eyebrow: "FESTIVAL OF LIGHTS",
    title: "Utsav",
    italic: "festive radiance,",
    subtitle: "timeless joy",
    offerLine1: "ZERO MAKING",
    offerLine2: "on silver collection",
    offerNote: "Free delivery across Visakhapatnam",
    period: "Limited time festive offer",
    cta: "Shop festive",
    ctaHref: "#collections",
  },
];

export const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const total = slides.length;

  // Set initial states
  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.05 });
    });
    captionRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, x: i === 0 ? 0 : 60 });
    });
    // Ken-Burns slow zoom on active
    const el = slideRefs.current[0];
    if (el) gsap.to(el, { scale: 1.08, duration: 8, ease: "none" });
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (hover) return;
    const t = setTimeout(() => goTo((index + 1) % total), 6000);
    return () => clearTimeout(t);
  }, [index, hover, total]);

  const goTo = (next: number) => {
    if (next === index) return;
    const cur = slideRefs.current[index];
    const nxt = slideRefs.current[next];
    const curCap = captionRefs.current[index];
    const nxtCap = captionRefs.current[next];
    if (!cur || !nxt || !curCap || !nxtCap) return;

    gsap.to(cur, { opacity: 0, duration: 0.9, ease: "power2.inOut" });
    gsap.to(curCap, { opacity: 0, x: -40, duration: 0.5, ease: "power2.in" });

    gsap.fromTo(nxt, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" });
    gsap.to(nxt, { scale: 1.08, duration: 8, delay: 1.1, ease: "none" });

    gsap.fromTo(
      nxtCap,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.9, delay: 0.25, ease: "power3.out" }
    );

    setIndex(next);
  };

  const next = () => goTo((index + 1) % total);
  const prev = () => goTo((index - 1 + total) % total);

  const prevIdx = (index - 1 + total) % total;
  const nextIdx = (index + 1) % total;

  return (
    <section
      id="home"
      className="relative pt-24 pb-10 sm:pt-28"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Side peeks */}
      <div className="container">
        <div className="relative grid grid-cols-12 gap-2 sm:gap-3">
          {/* Prev peek */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="hidden md:block col-span-1 relative h-[60vh] min-h-[420px] max-h-[640px] rounded-l-2xl overflow-hidden group"
          >
            <img
              src={slides[prevIdx].img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
            />
            <div className="absolute inset-0 bg-[hsl(var(--bg-dark)/0.4)] group-hover:bg-[hsl(var(--bg-dark)/0.2)] transition" />
          </button>

          {/* Main stage */}
          <div className="col-span-12 md:col-span-10 relative h-[60vh] min-h-[420px] max-h-[640px] rounded-2xl overflow-hidden gold-border glow-gold bg-navy-dark">
            {slides.map((s, i) => (
              <div
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                className="absolute inset-0"
                aria-hidden={i !== index}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1920}
                  height={1080}
                />
                {/* Right-side gradient for legibility */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 35%, hsl(213 100% 8% / 0.55) 70%, hsl(213 100% 6% / 0.85) 100%)",
                  }}
                />
                {/* Top-left brand watermark */}
                <span className="absolute top-5 left-5 text-[10px] tracking-[0.4em] text-silver/85 uppercase border border-silver/30 px-2 py-1 rounded">
                  A Srivatsala Signature
                </span>

                {/* Caption */}
                <div
                  ref={(el) => (captionRefs.current[i] = el)}
                  className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 max-w-md text-right"
                >
                  <p className="text-[10px] sm:text-xs tracking-[0.4em] text-rose-gold uppercase mb-3">
                    {s.eyebrow}
                  </p>
                  <h2 className="font-display text-6xl sm:text-7xl text-silver leading-none">
                    {s.title}
                  </h2>
                  <p className="font-display italic text-2xl sm:text-3xl text-silver/90 mt-3">
                    {s.italic}
                    <br />
                    {s.subtitle}
                  </p>
                  <div className="mt-6 inline-block text-left bg-[hsl(var(--bg-dark)/0.55)] backdrop-blur-sm border border-[hsl(var(--gold)/0.35)] rounded-lg px-5 py-4">
                    <p className="font-display text-3xl text-gold-light leading-tight">
                      {s.offerLine1}
                    </p>
                    <p className="text-xs tracking-wider text-silver/85 mt-0.5">
                      {s.offerLine2}
                    </p>
                    <p className="text-[10px] text-silver/60 mt-2">{s.offerNote}</p>
                  </div>
                  <p className="text-[10px] text-silver/55 mt-3 tracking-wide">{s.period}</p>
                  <div className="mt-5 flex justify-end">
                    <a
                      href={s.ctaHref}
                      target={s.ctaHref.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                      className="btn-gold !py-2.5 !px-6 text-sm"
                    >
                      {s.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile arrows */}
            <button
              aria-label="Previous"
              onClick={prev}
              className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.6)] backdrop-blur text-silver"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-[hsl(var(--bg-dark)/0.6)] backdrop-blur text-silver"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-[hsl(var(--gold-light))]"
                      : "w-2 bg-silver/40 hover:bg-silver/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next peek */}
          <button
            aria-label="Next slide"
            onClick={next}
            className="hidden md:block col-span-1 relative h-[60vh] min-h-[420px] max-h-[640px] rounded-r-2xl overflow-hidden group"
          >
            <img
              src={slides[nextIdx].img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
            />
            <div className="absolute inset-0 bg-[hsl(var(--bg-dark)/0.4)] group-hover:bg-[hsl(var(--bg-dark)/0.2)] transition" />
          </button>
        </div>

        {/* Eyebrow strip below slider — like Tanishq sub-header */}
        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-rose-gold">Madhurawada · Visakhapatnam</p>
          <h1 className="font-display text-3xl sm:text-5xl mt-3 text-silver">
            For an <span className="text-gradient-gold">Auspicious Beginning</span>
          </h1>
          <p className="text-silver/70 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Discover our most-loved gold &amp; silver designs — handcrafted in the timeless Andhra tradition.
          </p>
        </div>
      </div>
    </section>
  );
};
