import { MessageCircle, Send } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Movie Request label with dotted arrow */}
      <div className="fixed bottom-44 right-24 z-50 flex flex-col items-end pointer-events-none select-none">
        <span className="text-xl md:text-2xl font-bold text-accent tracking-wide">
          Movie Request
        </span>
        {/* Dotted arrow pointing to buttons */}
        <svg
          width="100"
          height="80"
          viewBox="0 0 100 80"
          className="mt-1"
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
          {/* Arrow head */}
          <polygon
            points="80,60 90,75 75,72"
            fill="hsl(var(--muted-foreground))"
          />
        </svg>
      </div>

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Telegram */}
        <a
          href="https://t.me/paidiptvbd"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(210,80%,55%)] flex items-center justify-center shadow-lg shadow-[hsl(210,80%,40%)/0.4] hover:scale-110 hover:shadow-xl transition-all duration-300 active:scale-95"
          title="Movie Request via Telegram"
        >
          <Send className="w-6 h-6 text-foreground" />
        </a>

        {/* WhatsApp */}
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
