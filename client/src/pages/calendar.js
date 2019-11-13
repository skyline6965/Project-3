import React from "react";
import 'bulma/css/bulma.css'
import Navbar from "../components/Nav"
import CalendarContainer from "../components/Calendar/Body"
import Login from "../pages/Login"

function CalendarPage() {
  return(
    <div>
      <CalendarContainer />
      <Login/>
    </div>
  )
};

export default CalendarPage;