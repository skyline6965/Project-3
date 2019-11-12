import React from "react";
import "./style.css";

function SubmitButton(props) {
  return(
    <button {...props} type="submit" id="contact-submit-btn" className="submit-btn">Send</button>
  )
}

export default SubmitButton;