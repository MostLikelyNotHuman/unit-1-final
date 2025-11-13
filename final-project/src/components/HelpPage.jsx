import Footer from "./pieces/Footer";
import Header from "./pieces/Header";
import './HelpPage.css';

const HelpPage = () => {

    return (
        <>
            <Header />
            <main className="helpPage-main">
                <div id="help-content">
                    <h3>About this app</h3>
                    <p> Welcome to [insert name]! This application is designed for anyone 
                        who is a complete beginner to music, and aims to teach you the very basics of 
                        reading notes and rhythm. Located on the top bar or the home page are links 
                        to a variety of exercises to strengthen your reading skills. Currently, 
                        you can find exercises to test your ability to recognize notes, intervals, and rhythms.</p>
                    <h3>Notes</h3>
                    <p>Notes are arranged on something called a <strong>staff</strong>, which is this set of horizontal
                    lines. [Place image of blank staff]</p>
                    <img src=""></img>
                    <p>Each line and space on the staff represents a different pitch.
                    A common way to remember where each note goes is to use the mnemonic
                    'Every Good Boy Deserves Fudge' for the lines E G B D F, and
                    the word FACE for the spaces F A C and E. [Place image of notes on staff]</p>
                    <img src=""></img>
                    <p>Maybe you've noticed - the notes start over at A after G! The system only 
                    uses the first seven letters of the alphabet to identify notes.</p>
                    <h3>Intervals</h3>
                    <p>The word 'interval' refers to the distance in pitch between two notes.
                    The smallest distance between two notes in western music is called a <strong>half-step</strong> or a <strong>semitone</strong>.</p>
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