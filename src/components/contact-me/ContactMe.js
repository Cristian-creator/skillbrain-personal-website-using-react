import { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
    // hook 
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = (event) => {
        const inputName = event.target.name; // firstName
        const inputValue = event.target.value; // Cristian
        setFormData({ ...formData, [inputName]: inputValue });

        if(inputName === "firstName") {
            if(inputValue.length < 2) {
                setFormErrors({ ...formErrors, [inputName]: "First name should have at least 2 characters." });
            } else {
                setFormErrors({ ...formErrors, [inputName]: "" });
            }
        } else if(inputName === "lastName") {
            if(inputValue.length < 2) {
                setFormErrors({ ...formErrors, [inputName]: "Last name should have at least 2 characters." });
            } else {
                setFormErrors({ ...formErrors, [inputName]: "" });
            }
        }
    };

    console.log(formErrors);

    return (
        <div className="contact-me-container">
            <h1 className="contact-me-title"> Contact me! </h1>
            <form className="contact-me-form">
                <label> First Name </label>
                {/* border-color: red; */}
                {/* borderColor: red, */}
                <input style={{ borderColor: formErrors.firstName !== "" ? "red" : '' }} type="text" name="firstName" onChange={handleChange} />
                { formErrors.firstName !== "" ? (<p> {formErrors.firstName} </p>) : null }
                <label> Last Name </label>
                <input style={{ borderColor: formErrors.lastName !== "" ? "red" : '' }} type="text" name="lastName" onChange={handleChange} />
                { formErrors.lastName !== "" ? (<p> {formErrors.lastName} </p>) : null }
                <label> Email </label>
                <input type="text" name="email" onChange={handleChange} />
                <label> Message </label>
                <textarea rows="10" placeholder="Type your message here..."></textarea>
                <button className="contact-me-button" type='submit'> Submit </button>
            </form>
        </div>
    );
}

export default ContactMe;