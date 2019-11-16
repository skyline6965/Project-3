import React from "react";
import "./style.css";

function SubmitButton(props) {
  return(
    <button {...props} type="submit" id="contact-submit-btn" className="submit-btn is-link">Book It</button>
  )
}

export default SubmitButton;