import MovieCard from '@/components/card';
import SearchResults from '@/components/SearchResults';
import { getMovies } from '@/lib/request';


async function SearchPage({searchParams}: {searchParams: {query: string}}) {
    const searchText = searchParams.query;
    const movies = await getMovies(searchText);

    return (
        
        <SearchResults  searchText={searchText} movies={movies}></SearchResults>
  
    
    )
}

export default SearchPage
