import React, {useState} from "react";
import { Route } from "react-router-dom";

// import PrivateRoute from "./components/PrivateRoute";
// import Login from "./components/Login";
// import Stylists from "./components/Stylists";

// import AddStylist from "./components/AddStylist";
// import UserSignUp from "./components/UserSignUp";
import StylistSignUp from "./components/StylistSignUp";

import "./App.css";
// import { STYLIST_UPDATE_FAILURE } from "./actions";

//Erase before pull request
import StylistsMember from "./components/Stylists";

function App() {
  //sets the stylist to
  const [stylist, setStylist] = useState(
    [{
      id:1, 
      name:'Jade',
      number: '456-123-3698',
      email:'jade@gmail.com'
   },
   {
      id:2, 
      name:'Alexis',
      number: '888-369-8465',
      email:'Alexis@gmail.com'
   },]
  );

  //Add's stylist
  const addStylist = person => {
    setStylist([...stylist, person])
  }

  return (
    <div className="App">
      <StylistSignUp
        submitStylist={addStylist}
      />
      {stylist.map((person, index )=> <StylistsMember key={index} person={person} />)}
      {/* <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/stylists" component={Stylists} />
      <PrivateRoute exact path="/addstylist" component={AddStylist} />
      <PrivateRoute exact path="/newuser" component={UserSignUp} />
      <PrivateRoute exact path="/newstylist" component={StylistSignUp} /> */}
    </div>
  );
}

export default App;
