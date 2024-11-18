import React, { useEffect, useState } from 'react';
import API_BASE_URL from './apiConfig';

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/podcasts`)
            .then((response) => response.json())
            .then((data) => setPodcasts(data.podcasts))
            .catch((error) => console.error('Error fetching podcasts:', error));
    }, []);

    return (
        <div>
            <h1>Podcasts</h1>
            <ul>
                {podcasts.map((podcast, index) => (
                    <li key={index}>
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PodcastList;
