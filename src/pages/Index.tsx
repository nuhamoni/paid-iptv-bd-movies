import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieGrid from "@/components/MovieGrid";
import Footer from "@/components/Footer";
import { sampleMovies, genres } from "@/data/movies";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");

  const filteredMovies = useMemo(() => {
    return sampleMovies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = activeGenre === "All" || movie.genre.includes(activeGenre);
      return matchesSearch && matchesGenre;
    });
  }, [searchQuery, activeGenre]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <HeroSection />
      <MovieGrid
        title="TRENDING NOW"
        movies={filteredMovies}
        genres={genres}
        activeGenre={activeGenre}
        onGenreChange={setActiveGenre}
      />
      <Footer />
    </div>
  );
};

export default Index;
