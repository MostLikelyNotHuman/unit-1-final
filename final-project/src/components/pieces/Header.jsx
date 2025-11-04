import { Link } from "react-router";
import Button from "./Button";

const Header = () => {

    return (
        <header>
            <h2><Link to="/">LOGO</Link></h2> 
            <p><Link to="/practice-notes">Notes</Link></p>
            <p><Link to="/practice-intervals">Intervals</Link></p>
            <p><Link to="/practice-rhythm">Rhythm</Link></p>
            <p><Link to="/help">Help</Link></p>
        </header>
    );
}


export default Header;