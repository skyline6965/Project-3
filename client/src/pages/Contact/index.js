import React from "react";
import Navbar from "../../components/Nav";
import FormContainer from "../../components/ContactForm/FormContainer";



function Contact() {
    return (
        <div className="column is-one-half">
            <Navbar />
            <FormContainer />
        </div>
    )
}

export default Contact;