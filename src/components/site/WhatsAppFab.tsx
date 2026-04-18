import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const WhatsAppFab = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    gsap.from(ref.current, { opacity: 0, scale: 0.5, duration: 0.7, delay: 2, ease: "back.out(2)" });
  }, []);
  return (
    <a
      ref={ref}
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition"
    >
      <span aria-hidden className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-pulse-ring" />
      <MessageCircle size={26} />
    </a>
  );
};
