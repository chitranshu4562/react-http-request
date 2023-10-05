import classes from './Error.module.css';
import Card from "../Card/Card";
const Error = (props) => {
    return <Card classes={`d-flex justify-content-center align-items-center p-2 ${props.classes}`}>
        <span className={classes.errorText}>{props.message}</span>
    </Card>
};
export default Error;