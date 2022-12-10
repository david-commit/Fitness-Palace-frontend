import React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer"
import Home from './Home';
import AvailableCourses from "./AvailableCourses"
import Contact from "./Contact"
import Login from "./Login"
import Appointment from "./Appointment"
import Enroll from "./Enroll"
import Welcome from "./Welcome"
import Dashboard from "./Dashboard"
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/appointment'>
            <Appointment />
          </Route>
          <Route exact path='/welcome'>
            <Welcome />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/Enroll'>
            <Enroll />
          </Route>
          <Route exact path='/AvailableCourses'>
            <AvailableCourses />
          </Route>
          <Route exact path='/AvailableCourses'>
            <AvailableCourses />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
