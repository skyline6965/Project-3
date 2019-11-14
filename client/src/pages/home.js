import React from "react";
import Navbar from "../components/Nav";
import FormContainer from "../components/ContactForm/FormContainer";
import CalendarContainer from "./calendar.js";
import Login from "../pages/Login";
import Signup from "./Signup";
import {BrowserRouter as Router, Route} from "react-router-dom";



function Home(){
    return(
        <div>
            <Navbar/>
        </div>
    )
}


// function Home(){
//     return(
//     <Router>
//         <div>
//             <Route exact path="/" component={Navbar}/>
//             <Route exact path="/contact" component={FormContainer}/>
//             <Route exact path="/schedule" component={CalendarContainer}/>
//             <Route exact path="/login" component={Login}/>
//             <Route exact path="/signup" component={Signup}/>
//         </div>
//     </Router>
//     )
// }

export default Home;