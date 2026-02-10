interface GenreFilterProps {
  genres: string[];
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilter = ({ genres, activeGenre, onGenreChange }: GenreFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 transform ${
            activeGenre === genre
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
              : "bg-secondary text-secondary-foreground border border-border hover:bg-primary/20 hover:text-primary hover:border-primary/50 hover:scale-105 hover:shadow-md hover:shadow-primary/10"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
