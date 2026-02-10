import { Star, Play, Clock, Download } from "lucide-react";
import { Link } from "react-router-dom";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const MovieCard = ({ movie, index }: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative rounded-lg overflow-hidden bg-card card-glow transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer block"
      style={{ 
        animationDelay: `${index * 80}ms`,
        boxShadow: 'var(--shadow-card)'
      }}
    >
      {/* Poster */}
      <div className="aspect-[2/3] overflow-hidden relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Type Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground rounded">
            {movie.type === 'series' ? 'Series' : 'Movie'}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded px-1.5 py-0.5">
          <Star className="w-3 h-3 text-accent" fill="currentColor" />
          <span className="text-xs font-semibold text-foreground">{movie.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-body font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 mt-1.5 text-muted-foreground">
          <span className="text-xs">{movie.year}</span>
          <span className="text-xs">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span className="text-xs">{movie.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-1.5 flex-wrap">
            {movie.genre.slice(0, 2).map((g) => (
              <span key={g} className="px-2 py-0.5 text-[10px] font-medium bg-secondary text-secondary-foreground rounded-full">
                {g}
              </span>
            ))}
          </div>
          <a
            href={movie.downloadLink || "#"}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shrink-0"
            title="Download"
          >
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
