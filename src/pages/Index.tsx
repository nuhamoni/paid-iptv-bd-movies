import { useState, useMemo, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieGrid from "@/components/MovieGrid";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import { fetchMoviesFromM3U, genres, type Movie } from "@/data/movies";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const handleDisclaimerClose = useCallback(() => setShowDisclaimer(false), []);

  useEffect(() => {
    fetchMoviesFromM3U().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = activeGenre === "All" || movie.genre.includes(activeGenre);
      return matchesSearch && matchesGenre;
    });
  }, [movies, searchQuery, activeGenre]);

  const featuredMovie = movies.length > 0 ? movies[0] : null;

  return (
    <div className="min-h-screen bg-background">
      {showDisclaimer && <DisclaimerPopup onClose={handleDisclaimerClose} />}
      <header>
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </header>
      <main>
        <h1 className="sr-only">PAID IPTV BD MOVIES - Download Free HD Movies, Web Series & TV Shows</h1>
        <HeroSection featuredMovie={featuredMovie} movies={movies.slice(0, 20)} />

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground text-sm">Loading movies...</p>
            </div>
          </div>
        ) : (
          <section id="movies" aria-label="All Movies">
            <MovieGrid
              title="ALL MOVIES"
              movies={filteredMovies}
              genres={genres}
              activeGenre={activeGenre}
              onGenreChange={setActiveGenre}
            />
          </section>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
