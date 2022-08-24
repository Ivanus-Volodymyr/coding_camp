import React from 'react';
import './App.css';

import {Episode, Movie, Series, StreamingService, User} from "./essence";
import {genres} from "./genres";
import {ShowTv} from "./components/ShowTv";

function App() {

    const episode = new Episode('first_episode', genres[0], new Date(), 1.5);
    const series = new Series('episode 1', genres[0], new Date(2015, 6, 25), [episode], 2);
    const movie = new Movie('spider-man', genres[2], new Date(2000, 5, 5), 3);
    const streamingService = new StreamingService('Test', [episode, series, movie]);
    const user = new User();

    user.subscribe(streamingService)

    return (
        <div>
            <div>
                <h1>Show</h1>
                <div>
                    {user.subscriptions[0].streamingService.shows.map(value => <ShowTv key={value.name} show={value}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
