import classes from './Home.module.css';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import MovieList from "../MovieList/MovieList";
const Home = (props) => {
    return (
        <div className={classes.homeContainer}>
           <Card classes={classes.cardInputText}>
               Welcome to the World of Movies
           </Card>
            <MovieList/>
        </div>
    )
};
export default Home;