import React from 'react';
import Home from "./pages/Home/index.js";
import Calendar from "./pages/calendar";
import About from "./pages/about";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import Contact from "./pages/Contact/index.js"
import SubmitRequest from "./pages/submitrequest"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

class App extends React.Component{
  render() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/submitrequest">
            <SubmitRequest />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path ="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>          
        </Switch>
      </div>
    </Router>
    );
  }
}
      
      
export default App;
