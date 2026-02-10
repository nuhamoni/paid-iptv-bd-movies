export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  poster: string;
  backdrop?: string;
  description: string;
  downloadLink?: string;
  duration: string;
  language: string;
  type: 'movie' | 'series';
  group: string;
}

export const genres = [
  "All", "Bollywood", "Action", "Drama", "Comedy", "Thriller", "Horror",
  "Sci-Fi", "Romance", "Adventure", "Animation", "Crime"
];

const M3U_URLS = [
  "https://raw.githubusercontent.com/MRM3UK/Drama-Movies-Playlist---circleftp/refs/heads/main/MixFTP.m3u",
  "https://raw.githubusercontent.com/gipuges285-cmd/own-movies/refs/heads/main/paidiptvbd-movies.m3u",
];

function extractYearFromGroup(group: string): number {
  const match = group.match(/(\d{4})/);
  return match ? parseInt(match[1]) : 2024;
}

function extractGenreFromGroup(group: string): string[] {
  const genres: string[] = [];
  const lower = group.toLowerCase();
  if (lower.includes("bollywood")) genres.push("Bollywood");
  if (lower.includes("action")) genres.push("Action");
  if (lower.includes("romance")) genres.push("Romance");
  if (lower.includes("drama")) genres.push("Drama");
  if (lower.includes("comedy")) genres.push("Comedy");
  if (lower.includes("thriller")) genres.push("Thriller");
  if (lower.includes("horror")) genres.push("Horror");
  if (lower.includes("sci-fi")) genres.push("Sci-Fi");
  if (lower.includes("adventure")) genres.push("Adventure");
  if (lower.includes("crime")) genres.push("Crime");
  if (genres.length === 0) genres.push("Drama");
  return genres;
}

export function parseM3U(content: string): Movie[] {
  const lines = content.split("\n");
  const movies: Movie[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.startsWith("#EXTINF:")) {
      // Extract title (after last comma)
      const titleMatch = line.match(/,(.+)$/);
      const title = titleMatch ? titleMatch[1].trim() : "Unknown";

      // Extract poster (tvg-logo)
      const logoMatch = line.match(/tvg-logo="([^"]+)"/);
      const poster = logoMatch ? logoMatch[1] : "/placeholder.svg";

      // Extract group
      const groupMatch = line.match(/group-title="([^"]+)"/);
      const group = groupMatch ? groupMatch[1] : "";

      // Get download URL (next non-empty line)
      let downloadLink = "";
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j].trim();
        if (nextLine && !nextLine.startsWith("#")) {
          downloadLink = nextLine;
          break;
        }
        j++;
      }

      const year = extractYearFromGroup(group);
      const genreList = extractGenreFromGroup(group);

      movies.push({
        id: `m3u-${movies.length}`,
        title,
        year,
        genre: genreList,
        rating: parseFloat((Math.random() * 2 + 7).toFixed(1)),
        poster,
        description: `${title} (${year})`,
        downloadLink,
        duration: "",
        language: group.toLowerCase().includes("bollywood") ? "Hindi" : "English",
        type: "movie",
        group,
      });

      i = j + 1;
    } else {
      i++;
    }
  }

  return movies;
}

export async function fetchMoviesFromM3U(): Promise<Movie[]> {
  try {
    const results = await Promise.all(
      M3U_URLS.map(async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) return [];
          const text = await response.text();
          return parseM3U(text);
        } catch {
          return [];
        }
      })
    );
    // Combine all and deduplicate by title
    const all = results.flat();
    const seen = new Set<string>();
    return all.filter((m) => {
      const key = m.title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  } catch (error) {
    console.error("Error fetching M3U:", error);
    return [];
  }
}
