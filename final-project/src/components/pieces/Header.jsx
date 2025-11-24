import { Link } from "react-router";
import Button from "./Button";
import './Header.css';

const Header = () => {

    return (
        <header>
            <h2 id='logo'><Link to="/">LOGO</Link></h2> 
            <div id='header-nav-links'>
                <Link to={'/practice-notes'}>
                    <Button text={'Notes'} />
                </Link>
                <Link to={'/practice-intervals'}>
                    <Button text={'Intervals'}/>    
                </Link>
                <Link to={"/help"}>
                    <Button text={'Help'}/>
                </Link>
                <Link to={"/contact"}>
                    <Button text={'Contact'}/>
                </Link>
            </div>
        </header>
    );
}

export default Header;