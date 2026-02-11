import { useState } from "react";
import { Crown, Star, Film, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// ===== VIP MOVIES LIST =====
// আপনি এখানে মুভি যোগ/এডিট করতে পারবেন
// name: মুভির নাম
// poster: পোস্টার ইমেজ URL
// downloadLink: ডাউনলোড লিংক
// year: সাল
// quality: কোয়ালিটি (e.g. "1080p", "720p", "4K")
const vipMovies = [
  {
    name: "Movie Name 1",
    poster: "/placeholder.svg",
    downloadLink: "https://example.com/download1",
    year: 2025,
    quality: "1080p",
  },
  {
    name: "Movie Name 2",
    poster: "/placeholder.svg",
    downloadLink: "https://example.com/download2",
    year: 2025,
    quality: "720p",
  },
  {
    name: "Movie Name 3",
    poster: "/placeholder.svg",
    downloadLink: "https://example.com/download3",
    year: 2024,
    quality: "1080p",
  },
  {
    name: "Movie Name 4",
    poster: "/placeholder.svg",
    downloadLink: "https://example.com/download4",
    year: 2024,
    quality: "4K",
  },
  {
    name: "Movie Name 5",
    poster: "/placeholder.svg",
    downloadLink: "https://example.com/download5",
    year: 2025,
    quality: "1080p",
  },
  {
    name: "Movie Name 6",
    poster: "/placeholder.svg",
    downloadLink: "https://example.com/download6",
    year: 2024,
    quality: "720p",
  },
];
// ===== END VIP MOVIES LIST =====

const VipMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = vipMovies.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {/* VIP Movies Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-display tracking-wider text-foreground">VIP COLLECTION</h2>
            <span className="text-xs text-muted-foreground">({filtered.length} movies)</span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <Film className="w-10 h-10 text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-sm">No movies found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((movie, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg overflow-hidden bg-card border border-border/50 hover:border-accent/40 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  {/* Poster */}
                  <div className="aspect-[2/3] overflow-hidden relative">
                    <img
                      src={movie.poster}
                      alt={movie.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                    {/* VIP Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-accent/90 text-accent-foreground rounded shadow-[0_0_10px_hsl(40_90%_55%/0.4)]">
                        <Crown className="w-3 h-3" />
                        VIP
                      </span>
                    </div>

                    {/* Quality Badge */}
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-primary/80 text-primary-foreground rounded">
                        {movie.quality}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-foreground truncate group-hover:text-accent transition-colors">
                      {movie.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{movie.year}</p>

                    {/* Download Button */}
                    <a
                      href={movie.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold bg-accent text-accent-foreground hover:bg-accent/80 transition-all duration-200 active:scale-95"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default VipMovies;
