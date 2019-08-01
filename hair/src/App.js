import React, {useState} from "react";
import { Route, Link } from "react-router-dom";

// import PrivateRoute from "./components/PrivateRoute";
// import Login from "./components/Login";


// import UserSignUp from "./components/UserSignUp";

//Stylist
// import StylistSignUp from "./components/StylistSignUp";
// import Stylists from "./components/Stylists";
import Dashboard from "./components/Stylist Dashboard/Dashboard";

import "./App.css";
// import { STYLIST_UPDATE_FAILURE } from "./actions";



function App() {
  //sets the stylist to
  const [stylist, setStylist] = useState([]);

  //Adds stylist to form on submission
  const addStylist = person => {
    setStylist([...stylist, {...person, id: Date.now()}])
    //Date.now() is the value of id. This will generate a unique id for people we are adding using this function. This will be important for when we are editing and need to grab them.
  }

  //Edits Stylists
  const editStylist = editedStylist => {
    //create a copy of original array to mutate first before values are committed
    const stylistCopy = [...stylist];
    const oldStylist = stylistCopy.find(stylist => stylist.id === editedStylist.id);
    // console.log(editedStylist, oldStylist);

    Object.assign(oldStylist, editedStylist);
    setStylist(stylistCopy);
  }

  return (
    <div className="App">
      {/* Change below link to path to login page as home */}
      <div className="nav-container">
          <Link className="navLinks" to="/">Login</Link> 
          
          {/* <Link className="navLinks" to="/components/Dashboard/StylistsPosts">Stylist Dashboard</Link> */}
          <Link className="navLinks" to="/components/Dashboard">Stylist Dashboard</Link>
          
      </div>
      {/* <Route path="/components/Dashboard/StylistsPosts"
             component={Dashboard} /> */}

      <Route path="/components/Dashboard"
             component={Dashboard} />

    </div>
  );
}

export default App;
