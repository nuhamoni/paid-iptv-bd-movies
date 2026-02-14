import { Play, Info, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import type { Movie } from "@/data/movies";

interface HeroSectionProps {
  featuredMovie?: Movie | null;
  movies?: Movie[];
}

const HeroSection = ({ featuredMovie, movies = [] }: HeroSectionProps) => {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = movies.length > 0 ? movies[featuredIdx] : featuredMovie;
  const title = current?.title || "PAID IPTV BD MOVIES";
  const rating = current?.rating || 8.9;
  const year = current?.year || 2024;
  const genreText = current?.genre?.join(", ") || "";

  const sideMovies = movies.filter((_, i) => i !== featuredIdx).slice(0, 8);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (movies.length <= 1) return;
    const timer = setInterval(() => {
      navigate("next");
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredIdx, movies.length]);

  const navigate = (dir: "prev" | "next") => {
    if (movies.length === 0 || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setFeaturedIdx((prev) =>
        dir === "next" ? (prev + 1) % movies.length : (prev - 1 + movies.length) % movies.length
      );
      setTimeout(() => setIsTransitioning(false), 400);
    }, 200);
  };

  return (
    <section className="relative min-h-[500px] h-[75vh] flex overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={current?.poster || "/placeholder.svg"}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-1000 ${isTransitioning ? "scale-105 opacity-60" : "scale-100 opacity-100"}`}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background/60" />
        {/* Film grain effect */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")' }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, hsl(var(--background)) 100%)' }} />
        {/* Animated light sweep */}
        <div className="absolute inset-0 animate-pulse opacity-5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {movies.slice(0, 10).map((_, i) => (
          <button
            key={i}
            onClick={() => { setFeaturedIdx(i); }}
            className={`rounded-full transition-all duration-300 ${
              i === featuredIdx
                ? "w-6 h-2 bg-primary shadow-lg shadow-primary/50"
                : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
          />
        ))}
      </div>

      {/* Left/Right Nav Arrows */}
      {movies.length > 1 && (
        <>
          <button
            onClick={() => navigate("prev")}
            className="absolute left-2 top-1/3 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 md:left-4 md:top-1/2 rounded-full bg-background/50 backdrop-blur-md border border-border/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => navigate("next")}
            className="absolute right-2 top-1/3 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 md:right-4 md:top-1/2 rounded-full bg-background/50 backdrop-blur-md border border-border/30 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-end lg:items-end gap-8 pb-12 pt-24">
        {/* Left: Featured Info */}
        <div className={`flex-1 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded shadow-lg shadow-primary/30 animate-pulse">
              Featured
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/40 backdrop-blur-sm border border-accent/30">
              <Star className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-sm font-bold text-accent">{rating}</span>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-none mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {title.toUpperCase()}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
            <span className="px-2 py-0.5 rounded bg-secondary/60 border border-border/50 text-foreground font-medium">{year}</span>
            <span className="text-border">|</span>
            <span>{genreText}</span>
            <span className="text-border">|</span>
            <span className="text-accent font-medium">IMDB {rating}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-0">
            <Link
              to="/vip"
              className="group flex items-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-8 sm:py-3.5 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105 active:scale-95"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" fill="currentColor" />
              VIP Movies
            </Link>
            <a
              href="https://wa.me/8801767046095"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-7 sm:py-3.5 bg-secondary/50 text-secondary-foreground font-semibold text-sm sm:text-base rounded-lg border border-border/50 hover:bg-secondary/80 hover:border-foreground/20 transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <Info className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              More Service
            </a>
          </div>

        </div>

        {/* Right: Movie Poster Grid */}
        {sideMovies.length > 0 && (
          <div className="shrink-0 hidden md:block">
            <div
              ref={scrollRef}
              className="grid grid-cols-4 gap-2.5"
            >
              {sideMovies.map((movie, i) => (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  className="w-[100px] lg:w-[120px] group/thumb"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="aspect-[2/3] rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-1">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                      loading="lazy"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
