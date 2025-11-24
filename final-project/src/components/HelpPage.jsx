import './HelpPage.css';
import staffImage from '../assets/images/help-page/staff.png';
import notesImage from '../assets/images/help-page/all-notes.png';
import wholeNote from '../assets/images/rhythm/whole-note.png';
import halfNote from '../assets/images/rhythm/half-note.png';
import quarterNote from '../assets/images/rhythm/quarter-note.png';
import eighthNote from '../assets/images/rhythm/eighth-note.png';
import eighth2 from '../assets/images/rhythm/eighth-2.png';
import sixteenthNote from '../assets/images/rhythm/sixteenth-note.png';
import sixteenth2 from '../assets/images/rhythm/sixteenth-2.png';
import additionalNotes from '../assets/images/help-page/additional-notes.png'
import sharp from '../assets/images/help-page/sharp.png'
import flat from '../assets/images/help-page/flat.png'
import { intervals } from '../assets/intervals';


const HelpPage = () => {

    return (
        <>
            <main className="helpPage-main">
                <div id="help-content">
                    <h3>About this app</h3>
                        <p> Welcome to Music for Beginners! This application is designed for anyone 
                            who is a complete beginner to music, and aims to teach you the very basics of 
                            reading notes and rhythm. Located on the top bar or the home page are links 
                            to a variety of exercises to strengthen your reading skills. Currently, 
                            you can find exercises to test your ability to recognize notes, intervals, and rhythms.</p>
                        <p> The goal is that you take the skills you learn here and go on to:</p>
                        <ul>
                            <li>Read your favorite music!</li>
                            <li>Write your own music!</li>
                            <li>Transcribe your favorite songs!</li>
                            <li>And many more activities!</li>
                        </ul>
                        <p>This help page covers the things you'll need to know to interact with the different 
                            activities, but is by no means a complete overview of the basics of reading music. 
                            Feel free to use whatever other resources you would like to help improve your skills!</p>
                    <h3>Notes</h3>
                        <p>Notes are arranged on something called a <strong>staff</strong>, which is this set of horizontal
                        lines.</p>
                            <img src={staffImage} width={400}></img>
                        <p>Each line and space on the staff represents a different pitch.
                        A common way to remember where each note goes is to use the mnemonic
                        'Every Good Boy Deserves Fudge' for the lines E G B D F, and
                        the word FACE for the spaces F A C and E.</p>
                            <img src={notesImage} width={400}></img>
                        <p>The exercises here use two additional notes that sit just below the staff, C and D.</p>
                            <img src={additionalNotes} width={150}></img>
                        <p>Maybe you've noticed - the notes start over at A after G! The system only 
                        uses the first seven letters of the alphabet to identify notes. However, there are more 
                        than seven notes - there are actually twelve! Each of these notes can be modified in pitch 
                        by placing something called an <strong>accidental</strong> before it. These are 
                        called <strong>Sharps (♯)</strong> and <strong>Flats (♭)</strong>, and represent raising or 
                        lowering the pitch displayed, respectively.</p>
                        <table>
                            <tr>
                                <td width={100}><img src={sharp}></img>Sharp symbol</td>
                                <td width={100}><img src={flat}></img>Flat symbol</td>
                            </tr>
                        </table>
                        <p>{`An oddity to keep in mind with this system is that, while most of the notes are separated 
                            by two half steps (A -> A♯ -> B), this does not hold for the spaces between B and C and 
                            between E and F. These two sets of notes are only a half step apart. While an E can have a sharp 
                            accidental, an E♯ and an F are the same pitch!`}
                        </p>
                    <h3>Intervals</h3>
                        <p>The word 'interval' refers to the distance in pitch between two notes.
                        The smallest distance between two notes in western music is called a <strong>half-step</strong> or a <strong>semitone</strong>. 
                        This is the distance between G and G♯ or B and B♭, for instance.</p>
                        <p>Every interval has its own unique name. The following are the ones you'll need to know 
                        for the exercises here.</p>
                        <table id='interval-table'>
                            <tr>
                                <th>Interval</th>
                                <th>Distance in Half Steps</th>
                                <th>Example</th>
                            </tr>
                            <tr>
                                <td>Unison</td>
                                <td>0</td>
                                <td><img src={intervals[0].img}></img>C - C</td>
                            </tr>
                            <tr>
                                <td>Minor Second</td>
                                <td>1</td>
                                <td><img src={intervals[1].img}></img>C - D♭</td>
                            </tr>
                            <tr>
                                <td>Major Second</td>
                                <td>2</td>
                                <td><img src={intervals[2].img}></img>C - D</td>
                            </tr>
                            <tr>
                                <td>Minor Third</td>
                                <td>3</td>
                                <td><img src={intervals[3].img}></img>C - E♭</td>
                            </tr>
                            <tr>
                                <td>Major Third</td>
                                <td>4</td>
                                <td><img src={intervals[4].img}></img>C - E</td>
                            </tr>
                            <tr>
                                <td>Perfect Fourth</td>
                                <td>5</td>
                                <td><img src={intervals[5].img}></img>C - F</td>
                            </tr>
                            <tr>
                                <td>Tritone</td>
                                <td>6</td>
                                <td><img src={intervals[6].img}></img>C - G♭</td>
                            </tr>
                            <tr>
                                <td>Perfect Fifth</td>
                                <td>7</td>
                                <td><img src={intervals[7].img}></img>C - G</td>
                            </tr>
                            <tr>
                                <td>Minor Sixth</td>
                                <td>8</td>
                                <td><img src={intervals[8].img}></img>C - A♭</td>
                            </tr>
                            <tr>
                                <td>Major Sixth</td>
                                <td>9</td>
                                <td><img src={intervals[9].img}></img>C - A</td>
                            </tr>
                            <tr>
                                <td>Minor Seventh</td>
                                <td>10</td>
                                <td><img src={intervals[10].img}></img>C - B♭</td>
                            </tr>
                            <tr>
                                <td>Major Seventh</td>
                                <td>11</td>
                                <td><img src={intervals[11].img}></img>C - B</td>
                            </tr>
                            <tr>
                                <td>Octave</td>
                                <td>12</td>
                                <td><img src={intervals[12].img}></img>C - C</td>
                            </tr>
                            
                        </table>
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
                            <td><img src={wholeNote}></img></td>
                            <td className="table-two-images"><img src={halfNote}></img><img src={halfNote}></img></td>
                        </tr>
                        <tr>
                            <td>One Whole Note</td>
                            <td>Two Half Notes</td>
                        </tr>
                        <tr>
                            <td><img src={halfNote}></img></td>
                            <td className="table-two-images"><img src={quarterNote}></img><img src={quarterNote}></img></td>
                        </tr>
                        <tr>
                            <td>One Half Note</td>
                            <td>Two Quarter Notes</td>
                        </tr>
                        <tr>
                            <td><img src={quarterNote}></img></td>
                            <td><img src={eighth2}></img></td>
                        </tr>
                        <tr>
                            <td>One Quarter Note</td>
                            <td>Two Eighth Notes</td>
                        </tr>
                        <tr>
                            <td><img src={eighthNote}></img></td>
                            <td><img src={sixteenth2}></img></td>
                        </tr>
                        <tr>
                            <td>One Eighth Note</td>
                            <td>Two Sixteenth Notes</td>
                        </tr>
                        <tr>
                            <td><img src={sixteenthNote}></img></td>
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
        </>
    );
};

export default HelpPage;