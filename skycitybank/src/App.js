import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
//import HashRouter from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import AllData from "./components/alldata";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
//Card component and router library
//const Route = ReactRouterDOM.Route; //gain access to route
//const Link = ReactRouterDOM.Link; //gain access to link
//const HashRouter = ReactRouterDOM.HashRouter; //gain access to router

const UserContext = React.createContext(null); //gain access to context

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                email: "JSmith@mit.edu",
                name: "John Smith",
                password: "rubyred1",
                balance: 588,
              },
              {
                email: "peterparker@mit.edu",
                name: "Peter Parker",
                password: "spidey2099",
                balance: 1207,
              },

              {
                email: "bwayne13@WayneEnterprise.com",
                name: "Bruce Wayne",
                password: "batfan77",
                balance: 126704,
              },
            ],
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/alldata/" component={AllData} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
export { UserContext };
//export { NavLink };
