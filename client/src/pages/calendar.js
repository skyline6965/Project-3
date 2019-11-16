import React from "react";
import 'bulma/css/bulma.css'
import Navbar from "../components/Nav"
import CalendarContainer from "../components/Calendar/Body"
import '../App.css';
import FormContainer from "../components/AppointmentForm/Form"

function CalendarPage() {
  return (
    <div>
      <Navbar />
        <div>
          {/* use "className='form-color'" for gray background */}
          <section className='hero'>
            <div className='hero-body'>
              <div className='container calendar'>

                <CalendarContainer />

              </div>
            </div>

            <div className="column is-one-half">
              <FormContainer />
            </div>
            
          </section>
        </div>
    </div>
  )
};

export default CalendarPage;