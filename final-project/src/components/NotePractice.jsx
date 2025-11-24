import QuizBox from "./pieces/QuizBoxNotes";
import { notes } from "../assets/notes";
import { useEffect, useState, useRef } from "react";


const NotePractice = () => {

    const [ questionImage, setQuestionImage ] = useState("");
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [selected, setSelected] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);

    const retrieveQuestion = () => {
        let editedNotes = [...notes];
        editedNotes.splice((editedNotes.length-1), 1);
                console.log(editedNotes);
        const correctRNG = Math.floor(Math.random() * editedNotes.length);
                console.log(`correctrng: ${correctRNG}`);
        const newQuestion = editedNotes[correctRNG];
                console.log(newQuestion);
        editedNotes.splice(correctRNG, 1);
                console.log(editedNotes);
        correctAnswer.current = newQuestion.text;
                console.log(`correctAnswer: ${correctAnswer.current}`);

        let answersArray = [correctAnswer.current];
                console.log(answersArray);
        setQuestionImage(newQuestion.img);
                console.log(questionImage);

        for (let i = 0; i < 3; i++) {
            let incorrectRNG = Math.floor(Math.random() * editedNotes.length);
                console.log(`incorrectrng: ${incorrectRNG}`);
            let incorrectAnswer = editedNotes[incorrectRNG];
                console.log(incorrectAnswer);
            answersArray.push(incorrectAnswer.text);            
                console.log(answersArray);
            editedNotes.splice(incorrectRNG, 1);
                console.log(editedNotes);
                console.log(`correct answer: ${correctAnswer}`);
            }
        answersArray.sort(() => Math.random() - 0.5);
            console.log(answers);
        setAnswers(answersArray);
            console.log(`correct answer: ${correctAnswer}`);
        
    }

    
    useEffect(() => {
        retrieveQuestion();
    }, [])
    
    console.log(`correct answer: ${correctAnswer.current}`);

    return(
        <>
            <QuizBox 
                onClick={(e) => {
                    console.log(e.target.textContent);
                    console.log(correctAnswer);
                    console.log(e.target.textContent === correctAnswer.current);
                }}
                questionText={'Practice - Notes'} 
                questionImage={questionImage}
                answers={answers}
                correctAnswer={correctAnswer.current}
                selected={selected}
                onSelect={setSelected}
                answerDisabled={answerDisabled}
                nextClick={() => {
                    setSelected(null);
                    retrieveQuestion();
                    setAnswerDisabled(false)
                    }
                }
            ></QuizBox>
        </>
    );
};

export default NotePractice;