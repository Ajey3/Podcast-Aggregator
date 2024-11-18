import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

function PodcastList({ podcasts }) {
    return (
        <ul>
            {podcasts.map((podcast) => (
                <li key={podcast.id}>
                    <h3>{podcast.title_original}</h3>
                    <p>{podcast.description_original}</p>
                    <a href={podcast.listennotes_url} target="_blank" rel="noopener noreferrer">
                        Listen
                    </a>
                    <div>
                        <FacebookShareButton url={podcast.listennotes_url}>
                            Share on Facebook
                        </FacebookShareButton>
                        <TwitterShareButton url={podcast.listennotes_url}>
                            Share on Twitter
                        </TwitterShareButton>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PodcastList;
