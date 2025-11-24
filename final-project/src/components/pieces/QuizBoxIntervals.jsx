import { useEffect, useState } from "react";
import Button from "./Button";

const QuizBoxIntervals = ({ questionText, questionImage, answers, correctAnswer, selected, onSelect, nextClick }) => {

    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    const [ nextDisabled, setNextDisabled ] = useState(true);
    const [ nextId, setNextId ] = useState('next-button-disabled');
    const [ stylingId, setStylingId ] = useState([]);
    console.log(questionImage);
    console.log(correctAnswer);
    console.log(correctAnswer);

    useEffect(() => {
        if (correctAnswer === 'Major Second' || correctAnswer === 'Minor Second') {
            setStylingId(['image1-offset', 'image2-offset']);
        } else {
            setStylingId(['image1', 'image2']);
        }
    }, [correctAnswer])

    return(
        <div id='quizBox'>
            <h4>{questionText}</h4>
            <div id="question-content">
                {questionImage.map((image, i) => {
                    return (
                        <img src={image} key={i} id={stylingId[i]}></img>
                    )
                })}

                {/* <div id="question-switches">
                    <ToggleSwitch />
                    <HelpButton />
                </div> */}
            </div>
            <div id="next-div">
                <Button onClick={() => {
                    nextClick();
                    setAnswerDisabled(false);
                    setNextDisabled(true);
                    setNextId('next-button-disabled')
                    }
                 }
                id={nextId}
                disabled={nextDisabled}
                text={"New Question ->"}></Button>
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
                            disabled={answerDisabled}
                            onClick={() => {
                                onSelect(a);
                                setAnswerDisabled(true);
                                setNextDisabled(false);
                                setNextId('next-button')
                                }
                            }
                        >
                            {a}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizBoxIntervals;