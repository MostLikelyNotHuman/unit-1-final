import Footer from "./pieces/Footer";
import Header from "./pieces/Header";

const HelpPage = () => {

    return (
        <>
            <Header />
            <main>
                <div id="help-content">
                    <h3>About this app</h3>
                    <p>**about this app**</p>
                    <h3>Notes</h3>
                    <p>**about notes**</p>
                    <h3>Intervals</h3>
                    <p>**about intervals**</p>
                    <h3>Rhythm</h3>
                    <p>**about rhythm**</p>
                </div>
                <div id="nav-bar">
                    <p>Navigation</p>
                    <ul>
                        <li>About this app</li>
                        <li>Notes</li>
                        <li>Intervals</li>
                        <li>Rhythm</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HelpPage;