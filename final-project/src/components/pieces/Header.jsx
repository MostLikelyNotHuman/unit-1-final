import Button from "./Button";

const Header = () => {

    return (
        <header>
            <h2>LOGO</h2>
            <Button text={'Notes'}/>
            <Button text={'Intervals'}/>
            <Button text={'Rhythm'}/>
            <Button text={'Help'}/>
        </header>
    );
}


export default Header;