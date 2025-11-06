import { Link } from "react-router";
import Button from "./pieces/Button";
import Footer from "./pieces/Footer";
import Header from "./pieces/Header";

const HomePage = () => {
    return(
        <>
            <Header />
            <main>
                <h2>Welcome! **Welcome message**</h2>
                <p>**Introduction paragraph**</p>
                <p>**App explanation, whatever**</p>
                ____________________________________
                <div>
                    <h4>Ready to get started?</h4>
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
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
