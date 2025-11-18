import QuizBox from "./pieces/QuizBox";
import { notes } from "../assets/notes";

const NotePractice = () => {


    let questionImage = '';
    let answers = [];
    let correctAnswer = '';

    const retrieveQuestion = () => {
        const editedNotes = [...notes];
        const newQuestion = editedNotes[Math.floor(Math.random() * editedNotes.length)];
        editedNotes.splice(newQuestion, 1);
        correctAnswer = newQuestion.text;
        answers.push(correctAnswer);
        questionImage = newQuestion.img;
        for (let i = 0; i < 3; i++) {
            let incorrect = editedNotes[Math.floor(Math.random() * editedNotes.length)].text;
            answers.push(incorrect);            
        }
        answers.sort(() => Math.random() - 0.5);
    }

    const checkAnswer = (selectedAnswer) => {
        return selectedAnswer === correctAnswer;
    }



    return(
        <>
            <QuizBox 
                questionText={'Practice - Notes'} 
                questionContent={questionImage}
                answer1={answers[0]}
                answer2={answers[1]}
                answer3={answers[2]}
                answer4={answers[3]}
            ></QuizBox>
        </>
    );
};

export default NotePractice;