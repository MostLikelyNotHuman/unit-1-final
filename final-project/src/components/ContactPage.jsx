import { useState } from "react";
import './ContactPage.css';
import Button from "./pieces/Button";



const ContactPage = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ feedbackType, setFeedbackType ] = useState('');
    const [ feedbackSubmitted, setFeedbackSubmitted ] = useState(false);
    const [ isSending, setIsSending ] = useState(false);

    const handleChange = (field, value) => {
        field(value);
    }
    
    const verifyInput = () => {
        if (!name) {

        }
    }



    return (
        <main className="contactPage-main">
            <h3>Contact Form</h3>
            <p>Want to provide feedback? Report a bug or error? Just say hello?
                Fill out the form below and I'll get back to you as soon as possible.</p>
            <form id="contact-form">
                <fieldset>
                    <legend>Your Information</legend>
                    <label for="name">Name:
                        <input 
                            type="text" 
                            value={name} 
                            id="name"
                            required
                            onChange={(e) => handleChange(setName, e.target.value)}
                        />
                    </label>
                    <label for="email">Email: 
                        <input
                            type="email"
                            value={email}
                            id="email"
                            required
                            onChange={(e) => handleChange(setEmail, e.target.value)}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Feedback</legend>
                    <label for="feedback-type">Type of Feedback
                        <select id="feedback-type" onChange={(e) => handleChange(setFeedbackType, e.target.value)}>
                            <option value="">Select...</option>
                            <option value="general-feedback">General Feedback</option>
                            <option value="report-bug">Report a Bug</option>
                            <option value="report-error">Report an Error</option>
                        </select>
                    </label>
                    <label for="text-area">Feedback:
                        <textarea 
                            id="text-area" 
                            rows="5" 
                            cols="50" 
                            required
                            placeholder="Your feedback here...">
                        </textarea>
                    </label>
                </fieldset>
                <Button text="Submit" onClick={(e) => {
                    e.preventDefault();}} />
            </form>
            <p> {name}, {email}, {feedbackType}</p>
            {feedbackSubmitted &&
                <div id="feedback-confirmation">
                    <p>Thank you, {name}! I'll look over your feedback and get 
                        back to you as soon as possible!
                    </p>
                </div>
            }
        </main>

        
    );

}

export default ContactPage;