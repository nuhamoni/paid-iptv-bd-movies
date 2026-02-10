import { MessageCircle, Send } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Label */}
      <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-full px-4 py-1.5 shadow-lg">
        <span className="text-xs font-semibold text-foreground tracking-wide">Movie Request</span>
      </div>

      {/* Telegram */}
      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(210,80%,55%)] flex items-center justify-center shadow-lg shadow-[hsl(210,80%,40%)/0.4] hover:scale-110 hover:shadow-xl transition-all duration-300 active:scale-95"
        title="Movie Request via Telegram"
      >
        <Send className="w-6 h-6 text-foreground" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/?text=Movie%20Request"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(142,70%,30%)/0.4] hover:scale-110 hover:shadow-xl transition-all duration-300 active:scale-95"
        title="Movie Request via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-foreground" fill="currentColor" />
      </a>
    </div>
  );
};

export default FloatingButtons;
