import Button from "./Button"

const HelpButton = ({ onClick }) => {
    return (
        <>
            <Button onClick={onClick} text={'?'}></Button>
        </>
    )
};

export default HelpButton;