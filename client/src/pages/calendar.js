import React from "react";
import 'bulma/css/bulma.css'
import Navbar from "../components/Nav"
import CalendarContainer from "../components/Calendar/Body"
import AptContainer from "../components/AppointmentForm/AptContainer/index"
import '../App.css';
import AptForm from "../components/AppointmentForm/AptContainer"
import FormContainer from "../components/AppointmentForm/Form"

function CalendarPage() {
  return (
    <div>
      <Navbar />
      <div>
      {/* use "className='form-color'" for gray background */}
        <section className='hero'>
          <div className= 'hero-body'>
            <div className= 'container calendar' id="cal-div">
            
              <CalendarContainer />
            </div>
{/* AptForm should have the style changes to make form a little better for devices. - Joe */}
            {/* <div className= 'apt-container'>
              <AptContainer />
            </div> */}
            <div id="apt-div"> 
            <AptForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default CalendarPage;