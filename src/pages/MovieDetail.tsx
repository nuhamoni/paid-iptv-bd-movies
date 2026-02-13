import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Download, Star, Calendar, Globe, Film } from "lucide-react";
import { fetchMoviesFromM3U, type Movie } from "@/data/movies";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoviesFromM3U().then((movies) => {
      const found = movies.find((m) => m.id === id);
      setMovie(found || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-foreground text-xl">Movie not found</p>
        <Link to="/" className="text-primary hover:underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Backdrop */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        <Link
          to="/"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-lg border border-border hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="shrink-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-48 md:w-64 rounded-lg shadow-2xl border border-border/50"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-none mb-4">
              {movie.title.toUpperCase()}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1 bg-accent/20 text-accent px-3 py-1 rounded-full">
                <Star className="w-4 h-4" fill="currentColor" />
                <span className="text-sm font-semibold">{movie.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{movie.year}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{movie.language}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Film className="w-4 h-4" />
                <span className="text-sm capitalize">{movie.type}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genre.map((g) => (
                <span key={g} className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border">
                  {g}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {movie.group}
            </p>

            {/* Download Buttons */}
            {movie.downloadLink && (
              <div className="flex flex-col items-start gap-4 mt-6">
                {/* Download Hi Speed BDIX */}
                <a
                  href={movie.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-accent via-yellow-400 to-accent text-accent-foreground font-bold text-base sm:text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(40_90%_55%/0.5),0_0_80px_hsl(40_90%_55%/0.2)] hover:scale-[1.05] active:scale-95 border-2 border-yellow-300/30 max-w-full"
                >
                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  {/* Outer pulse ring */}
                  <span className="absolute -inset-1 rounded-2xl animate-ping opacity-15 bg-accent" style={{ animationDuration: '2.5s' }} />
                  {/* Inner pulse ring */}
                  <span className="absolute -inset-0.5 rounded-2xl animate-ping opacity-10 bg-yellow-300" style={{ animationDuration: '3s' }} />
                  {/* Rotating border glow */}
                  <span className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_var(--angle),transparent_40%,hsl(40_90%_55%)_50%,transparent_60%)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-[spin_3s_linear_infinite] -z-10" style={{ '--angle': '0deg' } as React.CSSProperties} />
                  {/* Glow background shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-accent via-yellow-300 to-accent bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] opacity-40" />
                  {/* Sparkle particles */}
                  <span className="absolute top-1 left-4 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-60" style={{ animationDuration: '1.8s' }} />
                  <span className="absolute bottom-2 right-6 w-1 h-1 bg-white rounded-full animate-ping opacity-50" style={{ animationDuration: '2.2s' }} />
                  <span className="absolute top-3 right-10 w-1 h-1 bg-yellow-200 rounded-full animate-ping opacity-40" style={{ animationDuration: '2.8s' }} />
                  {/* Icon */}
                  <Download className="w-6 h-6 relative z-10 animate-bounce drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ animationDuration: '1.2s' }} />
                  <span className="relative z-10 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Download Hi Speed BDIX</span>
                  {/* Right arrow pulse */}
                  <span className="relative z-10 animate-[pulse_1.5s_ease-in-out_infinite] text-xl">⚡</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
