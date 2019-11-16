import React from "react";
import 'bulma/css/bulma.css'
import Navbar from "../components/Nav"
import FormContainer from "../components/ContactForm/FormContainer";
import AptContainer from "../components/AppointmentForm/AptContainer";
import '../App.css';

function SubmitRequest() {
  return (
    <div>
      <Navbar />
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-half">
          <AptContainer />
        </div>
      </div>
    </div>
  )
};

export default SubmitRequest;