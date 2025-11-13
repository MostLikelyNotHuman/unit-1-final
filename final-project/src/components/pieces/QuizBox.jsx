import Button from "./Button";
import HelpButton from "./HelpButton";
import ToggleSwitch from "./ToggleSwitch";

const QuizBox = ({ questionText, questionContent, answer1, answer2, answer3, answer4 }) => {

    return(
        <div id='quizBox'>
            <h4>{questionText}</h4>
            <p>{questionContent}</p>
            <ToggleSwitch />
            <HelpButton />
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