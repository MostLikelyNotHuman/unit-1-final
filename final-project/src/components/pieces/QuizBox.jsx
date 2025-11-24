import Button from "./Button";

const QuizBox = ({ questionText, questionImage, nextButton, questionAnswers }) => {

    return (
        <main id="quizBox">
            <div id="question-text">
                <h4>{questionText}</h4>
            </div>
            <div id="question-image">
                {questionImage}
            </div>
            <div id="next-button">
                {nextButton}
            </div>
            <div id="question-answers">
                {questionAnswers}
            </div>
        </main>
    );
}

export default QuizBox;