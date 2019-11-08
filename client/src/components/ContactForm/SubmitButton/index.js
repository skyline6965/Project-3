import React from "react"

function SubmitButton(props) {
  return(
    <button {...props} type="submit" id="contact-submit-btn">Send</button>
  )
}

export default SubmitButton;