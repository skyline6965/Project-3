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
      <div className='form-color'>
      <section className='hero is-dark'>
        <div className= 'hero-body'>
          <div className= 'container calendar'>
            
              <CalendarContainer />
           
          </div>
        </div>
      </section>
      <hr></hr>
        <FormContainer />
        <hr></hr>
      <div>
        <AptContainer />
      </div>
      

    </div>
    </div>
  )
};

export default CalendarPage;