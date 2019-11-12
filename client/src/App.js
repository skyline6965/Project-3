import React from 'react';
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

class App extends React.Component{
  render() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/login">

          </Route>
          <Route path="/register">

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
