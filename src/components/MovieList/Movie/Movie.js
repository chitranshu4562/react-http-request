import classes from './Movie.module.css';
import Card from "../../UI/Card/Card";
const Movie = (props) => {
    return (
        <Card classes={classes.movieContainer}>
            <div className={classes.movieBox}>
                <h4 className={classes.movieTitle}>{props.title}</h4>
                <p className={classes.movieDescription}>{props.description}</p>
            </div>
        </Card>
    )
};
export default Movie;