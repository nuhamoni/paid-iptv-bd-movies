import { useState, useEffect, useRef, useCallback } from "react";
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
  const bannerRef = useRef<HTMLAnchorElement>(null);
  const [borderPath, setBorderPath] = useState("");

  const updatePath = useCallback(() => {
    const el = bannerRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const r = 12;
    // Create rectangular path with rounded corners (clockwise)
    setBorderPath(
      `M ${r},0 H ${w - r} Q ${w},0 ${w},${r} V ${h - r} Q ${w},${h} ${w - r},${h} H ${r} Q 0,${h} 0,${h - r} V ${r} Q 0,0 ${r},0 Z`
    );
  }, []);

  useEffect(() => {
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [updatePath]);

  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);
  const startIdx = (currentPage - 1) * MOVIES_PER_PAGE;
  const paginatedMovies = movies.slice(startIdx, startIdx + MOVIES_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeGenre, movies.length]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("movies")?.scrollIntoView({ behavior: "smooth" });
  };

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

  const orbitText = "★ PAID IPTV BD - 01767046095 ★ PAID IPTV BD - 01767046095 ★ PAID IPTV BD - 01767046095 ★ ";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12" id="movies">

      {/* BEST IPTV Banner */}
      <a
        ref={bannerRef}
        href="https://wa.me/8801767046095"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full mb-8 rounded-xl transition-all duration-500 border border-primary/30"
      >
        {/* Orbiting SVG text around border */}
        {borderPath && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <path id="orbitPath" d={borderPath} fill="none" />
            </defs>
            <text
              fontSize="12"
              fontWeight="800"
              fill="hsl(40, 90%, 55%)"
              letterSpacing="3"
              style={{ filter: 'drop-shadow(0 0 6px hsl(40 90% 55% / 0.6))' }}
            >
              <textPath href="#orbitPath">
                <animate attributeName="startOffset" from="100%" to="0%" dur="25s" repeatCount="indefinite" />
                {orbitText}
              </textPath>
            </text>
          </svg>
        )}

        {/* Inner content */}
        <div className="relative rounded-xl bg-gradient-to-r from-primary/10 via-background to-primary/10 py-6 px-6 flex items-center justify-center gap-3">
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
