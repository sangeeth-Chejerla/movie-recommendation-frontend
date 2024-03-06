
import { getMovieDetails, getSimilarMovies } from '@/lib/request';
import Image from 'next/image';
import Link from 'next/link'; // Import Link component
import { Movie } from '@/types';

interface Params {
  id: string;
}

async function MovieDetailsPage({ params }: { params: Params }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails: Movie = await getMovieDetails(Number(params.id));
  const similarMovies: Movie[] = await getSimilarMovies(Number(params.id));

  return (
    <div className="flex flex-col items-center p-4">
      {/* Movie details */}
      <div className="flex flex-row items-center gap-8">
        <div className="w-1/3">
          <Image
            src={IMAGE_BASE_URL + movieDetails.poster_path}
            alt={movieDetails.title}
            width={320}
            height={180}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{movieDetails.title}</h3>
          <div className="flex flex-row items-center gap-2">
            <p className="px-2 py-1 rounded bg-green-500 text-white font-semibold">
              {movieDetails.release_date}
            </p>
            {/* Add similar lines for other details */}
          </div>
          <div className="flex flex-wrap gap-2">
            {movieDetails.genres?.map((genre:{ id: number; name: string }) => (
              <span
                key={genre.id}
                className="px-2 py-1 rounded bg-gray-600 text-white font-semibold"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mt-4">{movieDetails.overview}</p>
        </div>
      </div>

      {/* Similar movies */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Similar Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {similarMovies.map((movie: Movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}> {/* Link to movie details page */}
             
                <div className="flex flex-col items-center justify-center p-4 shadow-md rounded-md hover:bg-gray-100">
                  <Image
                    src={IMAGE_BASE_URL + movie.poster_path}
                    alt={movie.title}
                    width={160}
                    height={240}
                  />
                  <h5 className="text-lg font-medium mt-2">{movie.title}</h5>
                </div>
           
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
