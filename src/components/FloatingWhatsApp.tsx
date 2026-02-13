import { MessageCircle, Send, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Back to Top - left side */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
          showTop ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-75 pointer-events-none"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.6)] hover:scale-110 transition-all duration-300 active:scale-90 border border-primary-foreground/15 overflow-hidden"
          title="Back to Top"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary" style={{ animationDuration: '2s' }} />
          {/* Shimmer sweep */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          {/* Arrow icon with bounce */}
          <ArrowUp className="w-5 h-5 text-primary-foreground relative z-10 group-hover:animate-bounce" style={{ animationDuration: '0.6s' }} />
        </button>
      </div>

      {/* Movie Request label with dotted arrow */}
      <div className="fixed bottom-28 right-16 md:bottom-44 md:right-24 z-50 flex flex-col items-end pointer-events-none select-none hidden md:flex">
        <span className="text-base md:text-2xl font-bold text-accent tracking-wide">
          Movie Request
        </span>
        <svg
          width="70"
          height="50"
          viewBox="0 0 100 80"
          className="mt-1 md:w-[100px] md:h-[80px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5 Q50 30 85 70"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
            fill="none"
          />
          <polygon
            points="80,60 90,75 75,72"
            fill="hsl(var(--muted-foreground))"
          />
        </svg>
      </div>

      {/* Floating buttons - right side */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href="https://t.me/paidiptvbd"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(210,80%,55%)] flex items-center justify-center shadow-lg shadow-[hsl(210,80%,40%)/0.4] hover:scale-110 hover:shadow-xl transition-all duration-300 active:scale-95"
          title="Movie Request via Telegram"
        >
          <Send className="w-6 h-6 text-foreground" />
        </a>
        <a
          href="https://wa.me/8801767046095"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(142,70%,30%)/0.4] hover:scale-110 hover:shadow-xl transition-all duration-300 active:scale-95"
          title="Movie Request via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-foreground" fill="currentColor" />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
