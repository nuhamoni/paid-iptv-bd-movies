import { Play, Info, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Featured movie backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded">
              Featured
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold text-foreground">8.9</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-foreground leading-none mb-4">
            COSMIC <span className="text-gradient">VOYAGE</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-6 font-body leading-relaxed">
            A crew embarks on humanity's first interstellar journey. Experience the ultimate 
            sci-fi adventure that will leave you breathless.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <span>2024</span>
            <span>•</span>
            <span>Sci-Fi, Adventure</span>
            <span>•</span>
            <span>2h 45m</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <Play className="w-5 h-5" fill="currentColor" />
              Watch Now
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-secondary/80 text-secondary-foreground font-semibold rounded-lg border border-border hover:bg-secondary transition-all duration-300 backdrop-blur-sm">
              <Info className="w-5 h-5" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
