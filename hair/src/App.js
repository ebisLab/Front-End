import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";
import { profiles } from "./components/data";
import { profiles1 } from "./components/datainfo";
import SignUp from "./components/SignUp";
import InsideStylistDetails from "./components/InsideStylistDetails";
import InsideStylistDetails2 from "./components/InsideStylistDetails2";
import Logout from "./components/Logout";
import AddEditForm from "./components/AddEditPost3";

//CSS
import { LogoContainer, Logo } from "./components/styledComponents";
import "./App.scss";

function App() {
  const [bringData, setBringData] = useState(profiles);
  const [exData, setExData] = useState(profiles1);

  return (
    <Router>
      <div className="App">
        <LogoContainer>
          <Logo src="https://i.imgur.com/jaZMHk5.png" alt="Hair Care Logo" />
        </LogoContainer>

        <NavBar />
        <PrivateRoute path="/Dashboard/StylistsPosts" component={Dashboard}/>
        {/* <Route path="/Admin/StylistsPosts2" component={Admin}/> */}
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/admin" component={Admin} /> */}
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/stylists/:id" component={InsideStylistDetails} />
        <Route path="/stylistas/:id" component={InsideStylistDetails2} />
        
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Homepage bringData={bringData} setBringData={setBringData} />
            );
          }}
        />
        <Route path="/Admin/StylistsPosts2" render={props => {
            return ( <Admin exData={exData} setExData={setExData} /> );
          }}
        />
        <Route
          exact
          path="/Homepage2/" render={props => {
            return ( <Homepage2 bringData={bringData} setBringData={setBringData} /> );
          }}
        />
        
        <Route exact path="/Homepage2/AddEditPost3" render={props => (
            <AddEditForm {...props} buttonText="Add" />
          )} 
          />
      </div>
    </Router>
  );
}

export default App;
