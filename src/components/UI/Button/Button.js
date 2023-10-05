const Button = (props) => {
    return (
        <button type={props.type || 'button'}
                className={props.classes} onClick={props.click}>
            {props.name}</button>
    )
};
export default Button;