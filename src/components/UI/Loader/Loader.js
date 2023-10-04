import classes from './Loader.module.css';
import Card from "../Card/Card";

const Loader = () => {
    return <Card classes={`d-flex justify-content-center align-items-center p-2`}>
        <div className={classes['lds-roller']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Card>
}
export default Loader;