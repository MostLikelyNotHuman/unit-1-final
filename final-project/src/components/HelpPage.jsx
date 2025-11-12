import Footer from "./pieces/Footer";
import Header from "./pieces/Header";

const HelpPage = () => {

    return (
        <>
            <Header />
            <main>
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
                    <p>Notes placed on a staff don't just tell you their pitch, they also tell you their rhythm.
                    All of the examples on this page have used something called a <strong>quarter note</strong> to help visualize
                    the different concepts, but there are many more. A quarter note represents a single beat ... </p>
                    <table>
                        <tr>
                            <th>Note ...</th>
                            <th>is equal in duration to ...</th>
                        </tr>
                        <tr>
                            <td>(image of whole note)</td>
                            <td>(image of two half notes)</td>
                        </tr>
                        <tr>
                            <td>One Whole Note</td>
                            <td>Two Half Notes</td>
                        </tr>
                        <tr>
                            <td>(image of half note)</td>
                            <td>(image of two quarter notes)</td>
                        </tr>
                        <tr>
                            <td>One Half Note</td>
                            <td>Two Quarter Notes</td>
                        </tr>
                        <tr>
                            <td>(image of quarter note)</td>
                            <td>(image of two eighth notes)</td>
                        </tr>
                        <tr>
                            <td>One Quarter Note</td>
                            <td>Two Eighth Notes</td>
                        </tr>
                        <tr>
                            <td>(image of eighth note)</td>
                            <td>(image of two sixteenth notes)</td>
                        </tr>
                        <tr>
                            <td>One Eighth Note</td>
                            <td>Two Sixteenth Notes</td>
                        </tr>
                        <tr>
                            <td>(image of sixteenth note)</td>
                            <td>(image of two thirty-second notes)</td>
                        </tr>
                        <tr>
                            <td>One Sixteenth Note</td>
                            <td>Two Thirty-Second Notes</td>
                        </tr>
                    </table>
                    <p>Theoretically this continues on forever, but notes with a shorter duration are uncommon.</p>
                    <p>Any of these notes can be modified by placing a dot after it, which extends its normal duration by one half.
                        For example, a quarter note is equal to two eighth notes, but a <strong>dotted quarter note</strong> is 
                        equal to three eighth notes. [PLACE IMAGE]
                    </p>
                    <img src=""></img>
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