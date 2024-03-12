import Card from "@/components/card";
import Search from "@/components/search";
import { getTrendingMovies } from "@/lib/request";
import { Movie } from "@/types";
import  Link  from "next/link";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = async () => {
  // Fetch trending movies
  const movies: Movie[] = await getTrendingMovies();

  return (
    <>
<div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
   
  </div>
  <div className="container my-8">
  <h1 className="text-4xl font-bold tracking-tight">
      Discover Your Next Favorite Movie
    </h1>
    <p className="my-8 text-lg">
      Explore thousands of movies, find what you love, and watch it now. You are one click away.
    </p>
    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-8">Top Trending Movies</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <Card movie={movie} />
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
    </>
    
  );
};

export default LandingPage;
