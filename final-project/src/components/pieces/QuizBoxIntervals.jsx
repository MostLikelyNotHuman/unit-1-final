import { useEffect, useState } from "react";
import Button from "./Button";
import './QuizBoxNew.css';
import QuizBox from "./QuizBox";

const QuizBoxIntervals = ({ questionText, questionImage, answers, correctAnswer, selected, onSelect, nextClick }) => {

    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    const [ nextDisabled, setNextDisabled ] = useState(true);
    const [ nextId, setNextId ] = useState('next-button-disabled');
    const [ stylingId, setStylingId ] = useState([]);

    useEffect(() => {
        if (correctAnswer === 'Major Second' || correctAnswer === 'Minor Second') {
            setStylingId(['image1-offset', 'image2-offset']);
        } else {
            setStylingId(['image1', 'image2']);
        }
    }, [correctAnswer])

    return (
        <QuizBox 
            questionText={questionText}
            questionImage={   
                questionImage.map((image, i) => {
                    return (
                        <img src={image} key={i} id={stylingId[i]}></img>
                    )
                })
            }
            nextButton={
                <Button 
                    onClick={() => {
                        nextClick();
                        setAnswerDisabled(false);
                        setNextDisabled(true);
                        setNextId('next-button-disabled')
                    }}
                    id={nextId}
                    disabled={nextDisabled}
                    text={"New Question ->"}
                />
            }
            questionAnswers={
                answers.map((a) => {
                    let className = "answer";

                    if (selected) {
                        if (a === correctAnswer) className += "-correct";
                        else if (a === selected) className += "-incorrect";
                    }

                    return (
                        <Button
                            key={a}
                            text={a}
                            className={className}
                            disabled={answerDisabled}
                            onClick={() => {
                                onSelect(a);
                                setAnswerDisabled(true);
                                setNextDisabled(false);
                                setNextId('next-button')
                            }}
                        />                    
                    );
                })
            }  
        />
    );
}

export default QuizBoxIntervals;