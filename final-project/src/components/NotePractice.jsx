import QuizBoxNotes from "./pieces/QuizBoxNotes";
import { notes } from "../assets/notes";
import { useEffect, useState, useRef } from "react";


const NotePractice = ({ notesReview, setNotesReview }) => {

    const [ questionImage, setQuestionImage ] = useState(null);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [selected, setSelected] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);

    const retrieveQuestion = () => {
        let editedNotes = [...notes];
        editedNotes.splice((editedNotes.length-1), 1);
        const correctRNG = Math.floor(Math.random() * editedNotes.length);
        const newQuestion = editedNotes[correctRNG];
        editedNotes.splice(correctRNG, 1);
        correctAnswer.current = newQuestion.text;

        let answersArray = [correctAnswer.current];
        setQuestionImage(newQuestion.img);

        for (let i = 0; i < 3; i++) {
            let incorrectRNG = Math.floor(Math.random() * editedNotes.length);
            let incorrectAnswer = editedNotes[incorrectRNG];
            answersArray.push(incorrectAnswer.text);            
            editedNotes.splice(incorrectRNG, 1);
            }
        answersArray.sort(() => Math.random() - 0.5);
        setAnswers(answersArray);
        
    }
    
    useEffect(() => {
        retrieveQuestion();
    }, [])
    
    return (
        <main className="notePracticeMain">
            <QuizBoxNotes 
                questionText={'Practice - Notes'} 
                questionImage={questionImage}
                answers={answers}
                correctAnswer={correctAnswer.current}
                notesReview={notesReview}
                setNotesReview={setNotesReview}
                selected={selected}
                onSelect={setSelected}
                answerDisabled={answerDisabled}
                nextClick={() => {
                    setSelected(null);
                    retrieveQuestion();
                    setAnswerDisabled(false)
                    }
                }
            />
        </main>
    );
};

export default NotePractice;