import Button from "./Button";
import HelpButton from "./HelpButton";
import ToggleSwitch from "./ToggleSwitch";

const QuizBox = ({ questionText, questionImage, answer1, answer2, answer3, answer4 }) => {

    return(
        <div id='quizBox'>
            <h4>{questionText}</h4>
            <div id="question-content">
                <img src="questionImage"></img>
                <div id="question-switches">
                    <ToggleSwitch />
                    <HelpButton />
                </div>
            </div>
            <div id="question-answers">
                <Button text={answer1}></Button>
                <Button text={answer2}></Button>
                <Button text={answer3}></Button>
                <Button text={answer4}></Button>
            </div>
        </div>
    );
};

export default QuizBox;