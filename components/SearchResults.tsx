"use client"
import { useEffect, useState } from "react";

import { Movie } from "@/types"; // Import Movie type from your types file
import MovieCard from "./card";

interface SearchResultsProps {
  searchText: string;
  movies: Movie[];
}

function SearchResults({ searchText, movies }: SearchResultsProps) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const filterMovies = (filter: string) => {
    let sortedMovies: Movie[] = [];
    switch (filter) {
      case "release_date":
        sortedMovies = [...movies].sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        break;

      case "popularity":
        sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
        break;

      case "vote_average":
        sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
        break;

      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  };

  return (
    <div className="my-3 mx-3">
  <div className="flex justify-between items-center mb-3">
    <h1 className="text-xl font-bold">
      Top Search Results for &quot;{searchText}&quot;
    </h1>
    <div className="w-1/4">
      <select
        onChange={(e) => filterMovies(e.target.value)}
        className="form-select w-full"
        aria-label="Default select example"
      >
        <option>Sort By</option>
        <option value="release_date">Release Year</option>
        <option value="popularity">Popularity</option>
        <option value="vote_average">Ratings</option>
      </select>
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
    {filteredMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
</div>

  );
}

export default SearchResults;
