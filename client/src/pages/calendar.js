import React from "react";
import 'bulma/css/bulma.css'
import Navbar from "../components/Nav"
import CalendarContainer from "../components/Calendar/Body"
import FormContainer from "../components/ContactForm/FormContainer";
import AptContainer from "../components/AppointmentForm/AptContainer";
import '../App.css';

function CalendarPage() {
  return(
    <div>
    
      <Navbar />
      <FormContainer />
      <div className='tile is-parent calendar'>
        <CalendarContainer />
      </div>
      <div>
        <AptContainer />
      </div>
      

    </div>
  )
};

export default CalendarPage;