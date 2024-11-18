import React from 'react';

function SearchBar({ query, setQuery, searchPodcasts }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search for podcasts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchPodcasts}>Search</button>
        </div>
    );
}

export default SearchBar;
