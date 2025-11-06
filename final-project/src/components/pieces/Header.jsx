import { Link } from "react-router";
import Button from "./Button";

const Header = () => {

    return (
        <header>
            <h2><Link to="/">LOGO</Link></h2> 
                <Link to={'/practice-notes'}>
                    <Button text={'Notes'} />
                </Link>
                <Link to={'/practice-intervals'}>
                    <Button text={'Intervals'}/>    
                </Link>
                <Link to={'/practice-rhythm'}>
                    <Button text={'Rhythm'}/>
                </Link>
                <Link to={"/help"}>
                    <Button text={'Help'}/>
                </Link>
        </header>
    );
}


export default Header;