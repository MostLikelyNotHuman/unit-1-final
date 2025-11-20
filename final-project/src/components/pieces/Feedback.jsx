const Feedback = ( questionAnswered, correctCheck ) => {

    return (
        <div id="feedback">
            {questionAnswered ?
            {correctCheck} ? <p>Correct!</p> : <p>Incorrect.</p>
            : null       
        }
        </div>
    )
}

export default Feedback;