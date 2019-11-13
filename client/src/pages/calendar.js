import React from "react";
import Navbar from "../components/Nav"
import CalendarContainer from "../components/Calendar/Body"
import FormContainer from "../components/ContactForm/FormContainer";
import AptContainer from "../components/AppointmentForm/AptContainer";

function CalendarPage() {
  return(
    <div>
      <Navbar />
      <FormContainer />
      <CalendarContainer />
      <AptContainer />
    </div>
  )
};

export default CalendarPage;