import React, {Component} from 'react';
import UserContext from '../context/userContext';
import MovieRow from './MovieRow';

class MovieList extends Component {

    render() {
        return (
            <div>
                <MovieRow />
            </div>
        )
    }
}


export default MovieList;


