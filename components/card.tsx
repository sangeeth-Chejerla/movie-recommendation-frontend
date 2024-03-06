import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CardContent, Card } from "@/components/ui/card"
import { Movie} from "@/types";
import React from 'react';

interface MovieCardProps {
    movie: Movie;
}


const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
return (
  <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
    <Image
      alt={movie.title}
      className="object-cover w-full"
      height={320}
      src={IMAGE_BASE_URL + movie.poster_path} // Use the movie's poster path if available, otherwise use a placeholder
      style={{
        aspectRatio: "320/320",
        objectFit: "cover",
      }}
      width={320}
    />
    <CardContent className="p-4">
      <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">{movie.title}</h2>
      <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">Release Date: {movie.release_date}</h3>
      <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
        {movie.overview}
      </p>
    </CardContent>
  </Card>
);
};

export default MovieCard;