import React from "react";
import Navbar from "../components/Nav";
import FormContainer from "../components/ContactForm/FormContainer";
import CalendarContainer from "../components/Calendar/Body";

function Home(){
    return(
    <div>
        <Navbar/>
        <FormContainer/>
        <CalendarContainer/>
    </div>
    )
}

export default Home;