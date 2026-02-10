import { useState } from "react";
import { Crown, Star, Film } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const VipMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="pt-20">
        {/* VIP Hero Banner */}
        <div className="relative overflow-hidden py-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(40,90%,15%)] via-background to-[hsl(40,90%,10%)]" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(40 90% 55% / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(0 85% 55% / 0.2) 0%, transparent 50%)'
          }} />
          
          {/* Floating sparkles */}
          <div className="absolute top-10 left-[10%] w-2 h-2 bg-accent rounded-full animate-pulse" />
          <div className="absolute top-20 right-[15%] w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-10 left-[30%] w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-16 right-[40%] w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10">
              <Crown className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold tracking-[4px] uppercase text-accent">Exclusive Collection</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-wider mb-4">
              <span className="text-gradient">VIP</span>{" "}
              <span className="text-foreground">MOVIES</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
              Premium hand-picked collection of the highest rated movies
            </p>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent fill-accent" />
              ))}
            </div>
          </div>
        </div>

        {/* Empty State - Coming Soon */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
              <Film className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display tracking-wider text-foreground mb-3">
              COMING SOON
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm">
              VIP movies will be added here soon. Stay tuned for exclusive premium content!
            </p>
            <div className="mt-6 px-5 py-2 rounded-full border border-accent/30 bg-accent/5">
              <span className="text-xs font-bold tracking-[3px] uppercase text-accent">
                ★ Under Curation ★
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default VipMovies;
