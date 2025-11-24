import { useState } from "react";
import Button from "./Button";
import './QuizBoxNew.css'
import QuizBox from "./QuizBox";

const QuizBoxNotes = ({ questionText, questionImage, answers, correctAnswer, selected, onSelect, nextClick }) => {

    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    const [ nextDisabled, setNextDisabled ] = useState(true);
    const [ nextId, setNextId ] = useState('next-button-disabled');

    return (
        <QuizBox 
            questionText={questionText}
            questionImage={<img src={questionImage}></img>}
            nextButton={
                <Button onClick={() => {
                    nextClick();
                    setAnswerDisabled(false);
                    setNextDisabled(true);
                    setNextId('next-button-disabled')
                }}
                id={nextId}
                disabled={nextDisabled}
                text={"New Question ->"}></Button>
            }
            questionAnswers={
                answers.map((a) => {
                    let className = "answer";

                    if (selected) {
                        if (a === correctAnswer) className += "-correct";
                        else if (a === selected) className += "-incorrect";
                    }

                    return (
                        <button
                            key={a}
                            className={className}
                            disabled={answerDisabled}
                            onClick={() => {
                                onSelect(a);
                                setAnswerDisabled(true);
                                setNextDisabled(false);
                                setNextId('next-button')
                                }
                            }
                        > {a}
                        </button>
                    );
                })
            }
        />
    )
};

export default QuizBoxNotes;