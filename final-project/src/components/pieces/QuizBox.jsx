import Button from "./Button";
import Feedback from "./Feedback";
import HelpButton from "./HelpButton";
import ToggleSwitch from "./ToggleSwitch";

const QuizBox = ({ questionText, questionImage, answer1, answer2, answer3, answer4, questionAnswered, correctCheck, onClick }) => {

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
                <Button text={answer1} onClick={onClick}></Button>
                <Button text={answer2} onClick={onClick}></Button>
                <Button text={answer3} onClick={onClick}></Button>
                <Button text={answer4} onClick={onClick}></Button>
            </div>
            <Feedback questionAnswered={questionAnswered} correctCheck={correctCheck}/>
        </div>
    );
};

export default QuizBox;