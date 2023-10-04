import classes from './MovieList.module.css';
import axios from 'axios';
import React, {useState} from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Movie from "./Movie/Movie";
import movie from "./Movie/Movie";
import Loader from "../UI/Loader/Loader";
import Error from "../UI/Error/Error";
import MovieForm from "./MovieForm/MovieForm";
const MovieList = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchMoviesHandler = () => {
        setIsLoading(true);
        setError(null);
        axios.get('https://swapi.dev/api/films')
            .then(response => {
                const handledMoviesData = response.data.results.map(movieData => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        description: movieData.opening_crawl,
                        director: movieData.director,
                        releaseData: movieData.release_date
                    }
                })
                setMovieList(handledMoviesData);
                setIsLoading(false);
            })
            .catch(error => {
                setMovieList([]);
                setIsLoading(false);
                setError(error.message);
                console.log(error);
            })
    };
    return <React.Fragment>
        <Card classes={classes.btnContainer}>
            <Button name="Fetch Movies" type="button" classes={classes.btn} click={fetchMoviesHandler}></Button>
        </Card>
        <MovieForm/>
        {isLoading && <Loader/>}
        {!!error && <Error message={error}/>}
        {(movieList.length > 0 && !isLoading) && movieList.map(movie => (
            <Movie key={movie.id} title={movie.title} description={movie.description}/>
        ))}
    </React.Fragment>
};
export default MovieList;