import classes from './Home.module.css';
import Card from "../UI/Card/Card";
const Home = (props) => {
    return (
        <div className={classes.homeContainer}>
           <Card classes={classes.cardInputText}>
               Welcome to the World of Movies
           </Card>
        </div>
    )
};
export default Home;