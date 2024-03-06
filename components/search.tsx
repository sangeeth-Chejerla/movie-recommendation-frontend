// Assuming this is Search.tsx file
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input'; // Assuming the correct path to your Input component
import { Button } from './ui/button'; // Assuming the correct path to your Button component

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.trim() !== '') {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit} role="search">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px] me-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button variant="outline" type="submit">
        Search
      </Button>
    </form>
  );
};

export default Search;
