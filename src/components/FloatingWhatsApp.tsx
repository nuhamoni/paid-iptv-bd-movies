import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/?text=Movie%20Request"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(142,70%,30%)/0.4] hover:scale-110 hover:shadow-xl hover:shadow-[hsl(142,70%,30%)/0.5] transition-all duration-300 active:scale-95"
      title="Movie Request via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-foreground" fill="currentColor" />
    </a>
  );
};

export default FloatingWhatsApp;
