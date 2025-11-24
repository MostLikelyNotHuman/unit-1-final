const Button = ({ onClick, id, disabled, text }) => {
    return (
        <>
            <button onClick={onClick} id={id} disabled={disabled}>{text}</button>
        </>
    );
};

export default Button;