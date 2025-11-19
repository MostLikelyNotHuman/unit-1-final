import QuizBox from "./pieces/QuizBox";
import { notes } from "../assets/notes";
import { useEffect, useState } from "react";

const NotePractice = () => {

    const [ questionImage, setQuestionImage ] = useState("");
    const [ answers, setAnswers ] = useState([]);
    let correctAnswer = '';

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
        correctAnswer = newQuestion.text;
                console.log(`correctAnswer: ${correctAnswer}`);

        let answersArray = [correctAnswer];
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
            }
        answersArray.sort(() => Math.random() - 0.5);
            console.log(answers);
        setAnswers(answersArray);
        
    }
    const checkAnswer = (selectedAnswer) => {
        return selectedAnswer === correctAnswer;
    }

    useEffect(() => {
        retrieveQuestion();
    }, [])

    return(
        <>
            <QuizBox 
                onClick={checkAnswer}
                questionText={'Practice - Notes'} 
                questionImage={questionImage}
                answer1={answers[0]}
                answer2={answers[1]}
                answer3={answers[2]}
                answer4={answers[3]}
            ></QuizBox>
        </>
    );
};

export default NotePractice;