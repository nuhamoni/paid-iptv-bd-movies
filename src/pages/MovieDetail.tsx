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

            {/* Download Button */}
            {movie.downloadLink && (
              <a
                href={movie.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 mt-4"
              >
                <Download className="w-6 h-6" />
                Download Movie
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
