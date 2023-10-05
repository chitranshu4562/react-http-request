import classes from './MovieList.module.css';
import axios from 'axios';
import React, {useState} from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Movie from "./Movie/Movie";
import Loader from "../UI/Loader/Loader";
import Error from "../UI/Error/Error";
import MovieForm from "./MovieForm/MovieForm";
const MovieList = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movieFormVisibilityFlag, setMovieFormVisibilityFlag] = useState(false);
    const fetchMoviesHandler = () => {
        setIsLoading(true);
        setError(null);
        axios.get('https://react-http-requests-9dcb8-default-rtdb.firebaseio.com/movies.json')
            .then(response => {
                const handledMoviesData = []
                for (let key in response.data) {
                    handledMoviesData.push({
                        id: key, ...response.data[key]
                    })
                }
                setMovieList(handledMoviesData.reverse());
                setIsLoading(false);
            })
            .catch(error => {
                setMovieList([]);
                setIsLoading(false);
                setError(error.message);
                console.log(error);
            })
    };
    const addNewMovieHandler = (newMovieData) => {
        setIsLoading(true);
        setMovieFormVisibilityFlag(false);
        setError(null);
        axios.post('https://react-http-requests-9dcb8-default-rtdb.firebaseio.com/movies.json', newMovieData)
            .then(response => {
                const addedMovie = {id: response.data.name, ...JSON.parse(response.config.data)}
                setMovieList(prevState => {
                    return [addedMovie, ...prevState]
                })
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
                setIsLoading(false);
            })
    }
    const displayMovieFormHandler = () => {
        setError(null);
        if (movieFormVisibilityFlag) {
            setMovieFormVisibilityFlag(false);
        } else {
            setMovieFormVisibilityFlag(true);
        }
    }
    return <React.Fragment>
        <Card classes={classes.btnContainer}>
            <Button name="Fetch Movies" type="button" classes={classes.btn} click={fetchMoviesHandler}></Button>
            <Button name="Add New Movie" type="button" classes={classes.btn} click={displayMovieFormHandler}></Button>
        </Card>
        {movieFormVisibilityFlag && <MovieForm classes={classes.animatedCard} onAddMovie={addNewMovieHandler} />}
        {isLoading && <Loader/>}
        {!!error && <Error message={error}/>}
        {(movieList.length > 0 || !isLoading) && movieList.map(movie => (
            <Movie key={movie.id} name={movie.name} description={movie.description} classes={classes.animatedCard}/>
        ))}
    </React.Fragment>
};
export default MovieList;