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
      className="group relative rounded-lg overflow-hidden bg-card card-glow transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 cursor-pointer block animate-fade-in"
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
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button with spinning circle */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Spinning circle border */}
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary/50 animate-spin" />
            <div className="absolute inset-1 rounded-full border-[2px] border-transparent border-b-accent border-l-accent/50 animate-[spin_1.5s_linear_infinite_reverse]" />
            {/* Play icon */}
            <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm shadow-[0_0_25px_hsl(0_85%_55%/0.6)]">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Animated border glow on hover */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />

        {/* Type Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground rounded shadow-[0_0_10px_hsl(0_85%_55%/0.3)]">
            {movie.type === 'series' ? 'Series' : 'Movie'}
          </span>
        </div>

        {/* Rating with glow */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded px-1.5 py-0.5 shadow-[0_0_8px_hsl(40_90%_55%/0.3)]">
          <Star className="w-3 h-3 text-accent animate-pulse" fill="currentColor" />
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
        <div className="flex items-center justify-between mt-3">
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
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 shrink-0"
            title="Download"
          >
            <Download className="w-3 h-3" />
            Download
          </a>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
