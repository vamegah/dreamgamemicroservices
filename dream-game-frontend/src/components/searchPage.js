import React, { useState } from "react";
import { searchGames } from "../services/api";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchGames(query, genre);
      setSearchResults(data.results); // assuming the API returns 'results'
    } catch (error) {
      console.error("Error searching for games:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Games</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for games"
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <div>Loading...</div>}

      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((game) => (
              <li key={game.id}>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
