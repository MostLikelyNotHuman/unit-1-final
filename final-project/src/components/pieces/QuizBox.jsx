import { useState } from "react";
import Button from "./Button";
import HelpButton from "./HelpButton";
import ToggleSwitch from "./ToggleSwitch";

const QuizBox = ({ questionText, questionImage, answers, correctAnswer, selected, onSelect, onClick }) => {

    console.log(correctAnswer);
    console.log(answers);


    return(
        <div id='quizBox'>
            <h4>{questionText}</h4>
            <div id="question-content">
                <img src={questionImage}></img>
                <div id="question-switches">
                    <ToggleSwitch />
                    <HelpButton />
                </div>
            </div>
            <div id="question-answers">
               {answers.map((a) => {
                    let className = "answer";

                    if (selected) {
                        if (a === correctAnswer) className += "-correct";
                        else if (a === selected) className += "-incorrect";
                    }

                    return (
                        <button
                            key={a}
                            className={className}
                            onClick={() => onSelect(a)}
                        >
                            {a}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizBox;