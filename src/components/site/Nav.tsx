import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Heart, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, waLink } from "@/lib/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Andhra Traditional", href: "#andhra" },
  { label: "Bridal", href: "#bridal" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#location" },
];

export const Nav = () => {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      const goingDown = y > lastY.current && y > 200;
      gsap.to(ref.current, {
        y: goingDown ? -120 : 0,
        duration: 0.4,
        ease: "power3.out",
      });
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={ref}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          solid ? "bg-[hsl(var(--bg-dark))/0.92] backdrop-blur-md border-b border-[hsl(var(--gold)/0.15)]" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <a href="#home" className="flex items-center" aria-label="Srivatsala Silver House home">
            <Logo className="h-12 w-auto rounded-md" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm tracking-wide text-silver/85 hover:text-gold-light transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[hsl(var(--gold-light))] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button aria-label="Search" className="hidden sm:grid place-items-center w-10 h-10 rounded-full text-silver/80 hover:text-gold-light hover:bg-white/5 transition">
              <Search size={18} />
            </button>
            <button aria-label="Wishlist" className="hidden sm:grid place-items-center w-10 h-10 rounded-full text-silver/80 hover:text-gold-light hover:bg-white/5 transition">
              <Heart size={18} />
            </button>
            <a href={waLink()} target="_blank" rel="noopener" className="hidden sm:inline-flex btn-gold !py-2 !px-5 text-sm">
              WhatsApp
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full text-silver hover:text-gold-light"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[hsl(var(--bg-dark))]/98 backdrop-blur-xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <Logo className="h-12 w-auto rounded-md" />
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid place-items-center w-10 h-10 rounded-full text-silver">
            <X size={24} />
          </button>
        </div>
        <nav className="container mt-10 flex flex-col gap-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-silver hover:text-gold-light transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener" className="btn-gold mt-6 self-start" onClick={() => setOpen(false)}>
            WhatsApp Enquiry
          </a>
          <p className="text-silver/60 text-sm mt-8">{SITE.phone}</p>
        </nav>
      </div>
    </>
  );
};
