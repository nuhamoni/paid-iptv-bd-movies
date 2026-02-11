import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PAID IPTV BD" className="w-7 h-7 rounded-md" />
            <span className="font-display text-xl tracking-wider text-foreground">
              PAID IPTV <span className="text-primary">BD MOVIES</span>
            </span>
          </Link>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            {["About", "Contact", "Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative py-1 hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:drop-shadow-[0_0_6px_hsl(0_85%_55%/0.5)]"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" fill="currentColor" /> PAID IPTV BD 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
