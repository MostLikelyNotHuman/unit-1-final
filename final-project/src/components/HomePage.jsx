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
                    <Button text={'Notes'}/>
                    <Button text={'Intervals'}/>
                    <Button text={'Rhythm'}/>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
