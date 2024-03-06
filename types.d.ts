export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: {
    id: number;
    name: string;
  }[];
  // Add other properties as needed
}

export interface MovieDetails extends Movie {
  backdrop_path: string | null;
  original_language: string;
  release_date: string;
  status: string;
 

  // Add other properties as needed
}

export interface SimilarMovie extends Movie {
  // Add other properties as needed
}