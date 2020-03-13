import React, { Fragment } from 'react';
import './App.css';
import { MDBBtn } from "mdbreact";
import UserForm from "./components/UserForm";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ParisTrip from './components/ParisTrip';
import Cards from './components/card';

function App() {
  return (
    <div className="App">

        {/* <Router>
          
          <Switch>
              <Route path="/" exact component={Cards}/> 
              {/* <Route path="/home" exact component={HomeComponent}/>  */}
               
          
        


    {/* <Navbar></Navbar>
    <Cards></Cards>
    <ParisTrip></ParisTrip>
    <Footer></Footer> */}
    
     <Router>
   
        <Navbar></Navbar>
        <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/ownTrip" exact component={UserForm}></Route>
         <Route path="/packages/" component={Cards}/>
         <Route path="/trip/" component={ParisTrip}/>
         </Switch>
        <Footer></Footer>
      
     </Router>

    </div>
  );
}

export default App;
