import { Link } from "react-router";
import Button from "./pieces/Button";
import Footer from "./pieces/Footer";
import Header from "./pieces/Header";

const HomePage = () => {
    return(
        <>
            <main>
                <div id='homepage-intro'>
                    <h2>Welcome! **Welcome message**</h2>
                    <p>**Introduction paragraph**</p>
                    <p>**App explanation, whatever**</p>
                </div>
                ____________________________________
                <div id='homepage-starting-prompt'>
                    <h4>Ready to get started?</h4>
                    <p>Note: All practices can also be accessed through the navigation bar at the top of the page.</p>
                    <div id='homepage-starting-prompt-buttons'>
                        <Link to={'/practice-notes'}>
                            <Button text={'Notes'} />
                        </Link>
                        <Link to={'/practice-intervals'}>
                            <Button text={'Intervals'}/>    
                        </Link>
                        <Link to={'/practice-rhythm'}>
                            <Button text={'Rhythm'}/>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
