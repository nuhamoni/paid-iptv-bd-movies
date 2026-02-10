export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  poster: string;
  backdrop?: string;
  description: string;
  duration: string;
  language: string;
  type: 'movie' | 'series';
}

export const genres = [
  "All", "Action", "Drama", "Comedy", "Thriller", "Horror", 
  "Sci-Fi", "Romance", "Adventure", "Animation", "Crime"
];

export const sampleMovies: Movie[] = [
  {
    id: "1",
    title: "Shadow of the Dragon",
    year: 2024,
    genre: ["Action", "Thriller"],
    rating: 8.5,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    description: "A warrior rises from the ashes to fight an ancient evil threatening the world.",
    duration: "2h 15m",
    language: "English",
    type: "movie"
  },
  {
    id: "2",
    title: "Midnight City",
    year: 2024,
    genre: ["Crime", "Drama"],
    rating: 8.2,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    description: "A detective navigates the dark underbelly of a neon-lit metropolis.",
    duration: "1h 58m",
    language: "English",
    type: "movie"
  },
  {
    id: "3",
    title: "Lost in Time",
    year: 2023,
    genre: ["Sci-Fi", "Adventure"],
    rating: 7.9,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    description: "A scientist accidentally opens a portal to different timelines.",
    duration: "2h 05m",
    language: "English",
    type: "movie"
  },
  {
    id: "4",
    title: "The Last Frontier",
    year: 2024,
    genre: ["Adventure", "Drama"],
    rating: 8.7,
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    description: "Explorers venture into uncharted territories to save humanity.",
    duration: "2h 30m",
    language: "English",
    type: "movie"
  },
  {
    id: "5",
    title: "Echoes of Love",
    year: 2023,
    genre: ["Romance", "Drama"],
    rating: 7.5,
    poster: "https://images.unsplash.com/photo-1518676590747-1e3dcf5a3aaf?w=400&h=600&fit=crop",
    description: "Two souls separated by fate find their way back to each other.",
    duration: "1h 45m",
    language: "Hindi",
    type: "movie"
  },
  {
    id: "6",
    title: "Dark Protocol",
    year: 2024,
    genre: ["Thriller", "Sci-Fi"],
    rating: 8.1,
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
    description: "A hacker uncovers a government conspiracy that could end civilization.",
    duration: "2h 10m",
    language: "English",
    type: "series"
  },
  {
    id: "7",
    title: "Kingdom of Shadows",
    year: 2023,
    genre: ["Horror", "Thriller"],
    rating: 7.8,
    poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=600&fit=crop",
    description: "A cursed kingdom awakens ancient horrors from the depths.",
    duration: "1h 52m",
    language: "English",
    type: "movie"
  },
  {
    id: "8",
    title: "Cosmic Voyage",
    year: 2024,
    genre: ["Sci-Fi", "Adventure"],
    rating: 8.9,
    poster: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=600&fit=crop",
    description: "A crew embarks on humanity's first interstellar journey.",
    duration: "2h 45m",
    language: "English",
    type: "movie"
  },
  {
    id: "9",
    title: "Street Legends",
    year: 2023,
    genre: ["Action", "Crime"],
    rating: 7.6,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    description: "Underground fighters battle for glory in the city's secret arenas.",
    duration: "1h 55m",
    language: "Bengali",
    type: "movie"
  },
  {
    id: "10",
    title: "Whispers in the Wind",
    year: 2024,
    genre: ["Drama", "Romance"],
    rating: 8.0,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop",
    description: "A moving tale of love, loss, and redemption set in rural Bangladesh.",
    duration: "2h 00m",
    language: "Bengali",
    type: "series"
  },
  {
    id: "11",
    title: "Phantom Strike",
    year: 2024,
    genre: ["Action", "Thriller"],
    rating: 8.3,
    poster: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
    description: "An elite soldier goes rogue to expose a military cover-up.",
    duration: "2h 12m",
    language: "English",
    type: "movie"
  },
  {
    id: "12",
    title: "Neon Dreams",
    year: 2023,
    genre: ["Sci-Fi", "Drama"],
    rating: 7.7,
    poster: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=400&h=600&fit=crop",
    description: "In a cyberpunk future, a girl discovers she can manipulate reality.",
    duration: "1h 48m",
    language: "English",
    type: "series"
  },
];
