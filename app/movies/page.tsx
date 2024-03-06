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
      <Search />
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">
            Discover Your Next Favorite Movie
          </h1>
          <p className="mt-4 text-lg">
            Explore thousands of movies, find what you love, and watch it now.
          </p>
        </div>
        <div className="container my-3">
          <h1>Top Trending Movies</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {movies.map((movie) => (
              <Link key={movie.id} href={`/movies/${movie.id}`}>
                <Card movie={movie} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
        {/* Insert your featured movies section here */}
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Popular Genres</h2>



        {/* Insert your popular genres section here */}
      </div>

      
    </>
    
  );
};

export default LandingPage;
