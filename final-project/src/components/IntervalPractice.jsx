import QuizBox from "./pieces/QuizBoxNotes";
import { intervals } from "../assets/intervals";
import { notes } from "../assets/notes";
import { useEffect, useRef, useState } from "react";
import QuizBoxIntervals from "./pieces/QuizBoxIntervals";

const IntervalPractice = () => {

    const [ questionImage, setQuestionImage ] = useState([]);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [selected, setSelected] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);

    const retrieveQuestion = () => {
        // let editedIntervals = [...intervals];
        //         console.log(editedIntervals)
        // const correctRNG = Math.floor(Math.random() * editedIntervals.length);
        //         console.log(`correctrng: ${correctRNG}`);
        // const newQuestion = editedIntervals[correctRNG];
        //         console.log(newQuestion);

        let editedNotes = [...notes];
        let valueCompare = [];
        let correctValue;
        let images = [];
        let answersArray = [];

        for (let i = 0; i < 2; i++) {
            const correctRNG = Math.floor(Math.random() * editedNotes.length);
                    // console.log(`correctrng: ${correctRNG}`);
            const newNote = editedNotes[correctRNG];
                    // console.log(newNote);
            editedNotes.splice(correctRNG, 1);
                    // console.log(editedNotes); 
            valueCompare.push(newNote);
            images.push(newNote.img);
        }
        if (valueCompare[0].pitch < valueCompare[1].pitch) {
            images.reverse();
        }
        setQuestionImage(images);
        correctValue = Math.abs(valueCompare[0].pitch - valueCompare[1].pitch);
                // console.log(valueCompare);
                // console.log(correctValue);
                // console.log(images);

        let editedIntervals = [...intervals];
        editedIntervals.splice(0, 1);    
        for (let i = 0; i < editedIntervals.length; i++) {
            // console.log(editedIntervals[i]);
            if (editedIntervals[i].size === correctValue) {
                answersArray.push(editedIntervals[i].name)
                correctAnswer.current = editedIntervals[i].name;
                editedIntervals.splice(i, 1);
            }
        }
        
        // console.log(answersArray);

        for (let i = 0; i < 3; i++) {
            let incorrectRNG = Math.floor(Math.random() * editedNotes.length);
                // console.log(`incorrectrng: ${incorrectRNG}`);
            let incorrectAnswer = editedIntervals[incorrectRNG];
                // console.log(incorrectAnswer);
            answersArray.push(incorrectAnswer.name);            
                // console.log(answersArray);
            editedIntervals.splice(incorrectRNG, 1);
                // console.log(editedIntervals);
            }
        answersArray.sort(() => Math.random() - 0.5);
            // console.log(answers);
        setAnswers(answersArray);
            // console.log(`correct answer: ${correctAnswer}`);
        
    }
    
    useEffect(() => {
        retrieveQuestion();
    }, [])

    // console.log(questionImage);

    return(
        <>
            <QuizBoxIntervals 
                questionText={'Practice - Intervals'} 
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
            ></QuizBoxIntervals>
        </>
    );
};

export default IntervalPractice;