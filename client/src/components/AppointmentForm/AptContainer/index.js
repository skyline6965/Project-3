import React from "react";
import AptForm from "../Form";
import "./style.css";

function AptContainer() {
  return(
    <div className="form-container">
      <h2>Schedule An Appointment</h2>
      <AptForm />
    </div>
  )
}

export default AptContainer;