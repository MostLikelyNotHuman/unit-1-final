import QuizBox from "./pieces/QuizBox";
import { notes } from "../assets/notes";
import { useEffect, useState, useRef } from "react";

const NotePractice = () => {

    const [ questionImage, setQuestionImage ] = useState("");
    const [ answers, setAnswers ] = useState([]);
    const [ answerCorrect, setAnswerCorrect ] = useState(false);
    const [ questionAnswered, setQuestionAnswered ] = useState(false);
    
    const correctAnswer = useRef('');

    const retrieveQuestion = () => {
        setQuestionAnswered(false);
        setAnswerCorrect(false);
        let editedNotes = [...notes];
        editedNotes.splice((editedNotes.length-1), 1);
                // console.log(editedNotes);
        const correctRNG = Math.floor(Math.random() * editedNotes.length);
                // console.log(`correctrng: ${correctRNG}`);
        const newQuestion = editedNotes[correctRNG];
                // console.log(newQuestion);
        editedNotes.splice(correctRNG, 1);
                // console.log(editedNotes);
        correctAnswer.current = newQuestion.text;
                // console.log(`correctAnswer: ${correctAnswer.current}`);

        let answersArray = [correctAnswer.current];
                // console.log(answersArray);
        // setQuestionImage(newQuestion.img);
        //         console.log(questionImage);

        for (let i = 0; i < 3; i++) {
            let incorrectRNG = Math.floor(Math.random() * editedNotes.length);
                // console.log(`incorrectrng: ${incorrectRNG}`);
            let incorrectAnswer = editedNotes[incorrectRNG];
                // console.log(incorrectAnswer);
            answersArray.push(incorrectAnswer.text);            
                // console.log(answersArray);
            editedNotes.splice(incorrectRNG, 1);
                // console.log(editedNotes);
                // console.log(`correct answer: ${correctAnswer}`);
            }
        answersArray.sort(() => Math.random() - 0.5);
            console.log(answers);
        setAnswers(answersArray);
            // console.log(`correct answer: ${correctAnswer.current}`);
        
    }

    
    useEffect(() => {
        retrieveQuestion();
    }, [])
    
    console.log(`correct answer: ${correctAnswer}`);

    return(
        <>
            <QuizBox 
                onClick={(e) => {
                    console.log(questionAnswered);
                    console.log(e.target.textContent);
                    console.log(correctAnswer.current);
                    console.log(e.target.textContent === correctAnswer.current);
                    setQuestionAnswered(true);
                    console.log(questionAnswered);

                    const isAnswerCorrect = e.target.textContent === correctAnswer;
                    setAnswerCorrect(isAnswerCorrect);

                    // e.target.innerHTML()



                }}
                questionText={'Practice - Notes'} 
                questionImage={questionImage}
                answer1={answers[0]}
                answer2={answers[1]}
                answer3={answers[2]}
                answer4={answers[3]}
                questionAnswered={questionAnswered}
                correctCheck={answerCorrect}
            ></QuizBox>

        </>
    );
};

export default NotePractice;