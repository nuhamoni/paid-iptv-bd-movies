import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Crown, MessageCircle } from "lucide-react";
import MovieCard from "./MovieCard";
import GenreFilter from "./GenreFilter";
import type { Movie } from "@/data/movies";

const MOVIES_PER_PAGE = 30;

interface MovieGridProps {
  title: string;
  movies: Movie[];
  genres: string[];
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

const MovieGrid = ({ title, movies, genres, activeGenre, onGenreChange }: MovieGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);
  const startIdx = (currentPage - 1) * MOVIES_PER_PAGE;
  const paginatedMovies = movies.slice(startIdx, startIdx + MOVIES_PER_PAGE);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeGenre, movies.length]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("movies")?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="movies">

      {/* BEST IPTV Banner */}
      <a
        href="https://wa.me/8801767046095"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full mb-8 rounded-xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 hover:from-primary/30 hover:via-accent/20 hover:to-primary/30 transition-all duration-500"
        style={{ padding: '14px' }}
      >
        {/* Marquee border - single text scrolling around */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          {/* Top */}
          <div className="absolute top-0 left-0 right-0 h-[14px] overflow-hidden flex items-center">
            <div className="whitespace-nowrap marquee-left text-[10px] font-extrabold tracking-[4px] text-accent">
              PAID IPTV BD - 01767046095
            </div>
          </div>
          {/* Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[14px] overflow-hidden flex items-center">
            <div className="whitespace-nowrap marquee-right text-[10px] font-extrabold tracking-[4px] text-primary">
              PAID IPTV BD - 01767046095
            </div>
          </div>
          {/* Left */}
          <div className="absolute top-0 left-0 bottom-0 w-[14px] overflow-hidden flex items-center justify-center">
            <div className="marquee-down text-[10px] font-extrabold tracking-[4px] text-accent" style={{ writingMode: 'vertical-rl', whiteSpace: 'nowrap' }}>
              PAID IPTV BD
            </div>
          </div>
          {/* Right */}
          <div className="absolute top-0 bottom-0 w-[14px] overflow-hidden flex items-center justify-center" style={{ right: 0 }}>
            <div className="marquee-up text-[10px] font-extrabold tracking-[4px] text-primary" style={{ writingMode: 'vertical-rl', whiteSpace: 'nowrap' }}>
              01767046095
            </div>
          </div>
        </div>

        {/* Inner content */}
        <div className="relative rounded-lg bg-background/95 py-4 px-6 flex items-center justify-center gap-3">
          <Crown className="w-6 h-6 text-accent animate-pulse shrink-0" />
          <span className="font-display text-lg sm:text-2xl md:text-3xl tracking-wider text-foreground text-center">
            <span className="text-accent font-bold">BEST IPTV</span>
            <span className="mx-2 text-muted-foreground">IN</span>
            <span className="text-primary font-bold">BANGLADESH</span>
          </span>
          <MessageCircle className="w-6 h-6 text-accent group-hover:scale-125 transition-transform duration-300 shrink-0" />
        </div>
      </a>

      <GenreFilter
        genres={genres}
        activeGenre={activeGenre}
        onGenreChange={onGenreChange}
      />

      {movies.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <p className="text-lg font-medium">No movies found</p>
          <p className="text-sm mt-1">Try a different search or genre</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-6">
            {paginatedMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {getPageNumbers().map((page, i) =>
                page === "..." ? (
                  <span key={`dots-${i}`} className="px-2 py-2 text-sm text-muted-foreground">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`min-w-[40px] px-3 py-2 text-sm font-semibold rounded-md border transition-all duration-200 ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                        : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MovieGrid;
