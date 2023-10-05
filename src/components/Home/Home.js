import classes from './Home.module.css';
import Card from "../UI/Card/Card";
import MovieList from "../MovieList/MovieList";
import Movie from "../MovieList/Movie/Movie";
import MovieForm from "../MovieList/MovieForm/MovieForm";
const Home = (props) => {
    return (
        <div className={classes.homeContainer}>
           <Card classes={classes.cardInputText}>
               Welcome to World of Movies
           </Card>
            <MovieList/>
        </div>
    )
};
export default Home;