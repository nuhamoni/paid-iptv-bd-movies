import MovieCard from "./MovieCard";
import GenreFilter from "./GenreFilter";
import type { Movie } from "@/data/movies";

interface MovieGridProps {
  title: string;
  movies: Movie[];
  genres: string[];
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

const MovieGrid = ({ title, movies, genres, activeGenre, onGenreChange }: MovieGridProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="movies">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground tracking-wide">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {movies.length} titles available
          </p>
        </div>
      </div>

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-6">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MovieGrid;
