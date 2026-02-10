import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Crown, Star, Play, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { fetchMoviesFromM3U, type Movie } from "@/data/movies";

const VipMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoviesFromM3U().then((data) => {
      // VIP = top rated movies (rating >= 8.5)
      const vip = data.filter((m) => m.rating >= 8.5).sort((a, b) => b.rating - a.rating);
      setMovies(vip);
      setLoading(false);
    });
  }, []);

  const filteredMovies = useMemo(() => {
    if (!searchQuery) return movies;
    return movies.filter((m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [movies, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="pt-20">
        {/* VIP Hero Banner */}
        <div className="relative overflow-hidden py-16 px-4">
          {/* Animated gold gradient background */}
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

        {/* Movie Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <Crown className="w-10 h-10 text-accent animate-pulse" />
                <p className="text-muted-foreground text-sm">Loading VIP collection...</p>
              </div>
            </div>
          ) : filteredMovies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <p className="text-lg font-medium">No VIP movies found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredMovies.map((movie, index) => (
                <Link
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  className="group relative rounded-xl overflow-hidden border border-accent/20 bg-card transition-all duration-500 hover:border-accent/60 hover:shadow-[0_0_30px_hsl(40_90%_55%/0.15)] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {/* VIP Badge */}
                  <div className="absolute top-2 left-2 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/90 text-accent-foreground">
                    <Crown className="w-3 h-3" />
                    <span className="text-[10px] font-bold tracking-wider">VIP</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 z-20 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-background/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-accent fill-accent" />
                    <span className="text-[11px] font-bold text-foreground">{movie.rating}</span>
                  </div>

                  {/* Poster */}
                  <div className="aspect-[2/3] overflow-hidden">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gold shimmer overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Play icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center shadow-lg shadow-accent/30 scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-accent-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background via-background/90 to-transparent">
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                      {movie.title}
                    </h3>
                    <p className="text-[10px] text-accent font-medium mt-0.5">{movie.year}</p>
                  </div>
                </Link>
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
