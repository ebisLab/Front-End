import React, {useState} from "react";
import { Route, Link } from "react-router-dom";

// import PrivateRoute from "./components/PrivateRoute";
// import Login from "./components/Login";
import Stylists from "./components/Stylists";

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
   }]
  );

  //Adds stylist to form on submission
  const addStylist = person => {
    setStylist([...stylist, person])
  }

  //Edits Stylists
  const editStylist = editedStylist => {
    
  }

  return (
    <div className="App">
      {/* Change below link to path to login page as home */}
      <Link to="/">Login</Link> 
      <Link to="/components/StylistSignUp">Register</Link>
      <Link to="/components/Stylists.js">Dashboard</Link>

      <Route path="/components/StylistSignUp" 
             render={props => <StylistSignUp {...props}
              submitStylist={addStylist}
            /> }/>
      
      <Route path ="/components/Stylists.js" 
             render = {props => <Stylists {...props}
             stylist={stylist}
             setStylist={setStylist}
             />}/>

      <Route path="/edit/:id"
             render={props => {
               console.log("Edit Route",props)
               const person = stylist.find(stylist => stylist.id.toString() === props.match.params.id);
               return <StylistSignUp {...props}
                                     initialStylist={person}
                                     submitStylist={editStylist}
                                     />;
             }}/>
      
      {/* <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/stylists" component={Stylists} />
      <PrivateRoute exact path="/addstylist" component={AddStylist} />
      <PrivateRoute exact path="/newuser" component={UserSignUp} />
      <PrivateRoute exact path="/newstylist" component={StylistSignUp} /> */}
    </div>
  );
}

export default App;
