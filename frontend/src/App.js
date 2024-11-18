import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PodcastList from './components/PodcastList';

function App() {
    const [query, setQuery] = useState('');
    const [podcasts, setPodcasts] = useState([]);

    const searchPodcasts = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/search?q=${query}`);
            setPodcasts(response.data.results || []);
        } catch (error) {
            console.error("Error fetching podcasts:", error);
        }
    };

    return (
        <div>
            <h1>Podcast Aggregator</h1>
            <SearchBar query={query} setQuery={setQuery} searchPodcasts={searchPodcasts} />
            <PodcastList podcasts={podcasts} />
        </div>
    );
}

export default App;

