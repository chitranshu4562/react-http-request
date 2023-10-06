import classes from './Home.module.css';
import Card from "../UI/Card/Card";
import MovieList from "../MovieList/MovieList";
import Movie from "../MovieList/Movie/Movie";
const Home = (props) => {
    return (
        <div className={classes.homeContainer}>
           <Card classes={classes.cardInputText}>
               Welcome to Movie App
           </Card>
            <MovieList/>
        </div>
    )
};
export default Home;