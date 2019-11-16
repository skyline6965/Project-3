import React from "react";
import 'bulma/css/bulma.css'
import Navbar from "../components/Nav"
import CalendarContainer from "../components/Calendar/Body"
import '../App.css';
import AptForm from "../components/AppointmentForm/AptContainer"

function CalendarPage() {
  return(
    <div>
    
      <Navbar />
      <div>
      {/* use "className='form-color'" for gray background */}
        <section className='hero'>
          <div className= 'hero-body'>
            <div className= 'container calendar'>
            
              <CalendarContainer />

            </div>
            <div className="apt-form"> <AptForm /></div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default CalendarPage;