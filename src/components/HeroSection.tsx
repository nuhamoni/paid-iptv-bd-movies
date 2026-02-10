import { Play, Info, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import type { Movie } from "@/data/movies";

interface HeroSectionProps {
  featuredMovie?: Movie | null;
  movies?: Movie[];
}

const HeroSection = ({ featuredMovie, movies = [] }: HeroSectionProps) => {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = movies.length > 0 ? movies[featuredIdx] : featuredMovie;
  const title = current?.title || "CINEFLIX";
  const rating = current?.rating || 8.9;
  const year = current?.year || 2024;
  const group = current?.group || "Movies";
  const genreText = current?.genre?.join(", ") || "";

  // Sidebar movies (exclude current featured, show up to 8)
  const sideMovies = movies.filter((_, i) => i !== featuredIdx).slice(0, 8);

  const navigate = (dir: "prev" | "next") => {
    if (movies.length === 0) return;
    setFeaturedIdx((prev) =>
      dir === "next" ? (prev + 1) % movies.length : (prev - 1 + movies.length) % movies.length
    );
  };

  return (
    <section className="relative min-h-[600px] h-[85vh] flex overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={current?.poster || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-background/70" />
      </div>

      {/* Left/Right Nav Arrows */}
      {movies.length > 1 && (
        <>
          <button
            onClick={() => navigate("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-end lg:items-end gap-8 pb-12 pt-24">
        {/* Left: Featured Info */}
        <div className="flex-1 animate-fade-in">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded">
              Featured
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold text-foreground">{rating}</span>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-foreground leading-none mb-3">
            {title.toUpperCase()}
          </h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <span>{year}</span>
            <span>|</span>
            <span>{genreText}</span>
            <span>|</span>
            <span>IMDB {rating}</span>
          </div>

          <div className="flex items-center gap-4">
            {current?.downloadLink && (
              <a
                href={current.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Download Now
              </a>
            )}
            <Link
              to={current ? `/movie/${current.id}` : "#"}
              className="flex items-center gap-2 px-6 py-3 bg-secondary/80 text-secondary-foreground font-semibold rounded-lg border border-border hover:bg-secondary transition-all duration-300 backdrop-blur-sm"
            >
              <Info className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </div>

        {/* Right: Movie Poster Grid */}
        {sideMovies.length > 0 && (
          <div className="shrink-0 hidden md:block">
            <div
              ref={scrollRef}
              className="grid grid-cols-4 gap-2"
            >
              {sideMovies.map((movie) => (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  className="w-[100px] lg:w-[120px] group/thumb"
                >
                  <div className="aspect-[2/3] rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg">
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
