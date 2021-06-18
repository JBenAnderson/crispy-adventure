import React from "react";
function NavBar() {
  const [disabled, setDisabled] = React.useState("nav-link");

  return (
    <nav className="nav nav-pills nav-fill">
      <a
        id="home"
        className="nav-link"
        aria-current="page"
        href="#/"
        onClick={(e) => {
          e.currentTarget.className = "nav-link active";

          document.querySelector("#createAccount").className = "nav-link";
          document.querySelector("#login").className = "nav-link";
          document.querySelector("#deposit").className = "nav-link";
          document.querySelector("#withdraw").className = "nav-link";
          document.querySelector("#alldata").className = "nav-link";
        }}
      >
        Front-End Bank Home
      </a>
      <a
        id="createAccount"
        className="nav-link"
        href="#/CreateAccount/"
        onClick={(e) => {
          e.currentTarget.className = "nav-link active";

          document.querySelector("#home").className = "nav-link";
          document.querySelector("#login").className = "nav-link";
          document.querySelector("#deposit").className = "nav-link";
          document.querySelector("#withdraw").className = "nav-link";
          document.querySelector("#alldata").className = "nav-link";
        }}
      >
        Create Account
      </a>
      <a
        id="login"
        className="nav-link"
        href="#/login/"
        onClick={(e) => {
          e.currentTarget.className = "nav-link active";

          document.querySelector("#home").className = "nav-link";
          document.querySelector("#createAccount").className = "nav-link";
          document.querySelector("#deposit").className = "nav-link";
          document.querySelector("#withdraw").className = "nav-link";
          document.querySelector("#alldata").className = "nav-link";
        }}
      >
        Login
      </a>
      <a
        id="deposit"
        className="nav-link"
        href="#/deposit"
        onClick={(e) => {
          e.currentTarget.className = "nav-link active";

          document.querySelector("#home").className = "nav-link";
          document.querySelector("#createAccount").className = "nav-link";
          document.querySelector("#login").className = "nav-link";
          document.querySelector("#withdraw").className = "nav-link";
          document.querySelector("#alldata").className = "nav-link";
        }}
      >
        Deposit
      </a>
      <a
        id="withdraw"
        className="nav-link"
        href="#/withdraw/"
        onClick={(e) => {
          e.currentTarget.className = "nav-link active";

          document.querySelector("#home").className = "nav-link";
          document.querySelector("#createAccount").className = "nav-link";
          document.querySelector("#login").className = "nav-link";
          document.querySelector("#deposit").className = "nav-link";
          document.querySelector("#alldata").className = "nav-link";
        }}
      >
        Withdraw
      </a>
      <a
        id="alldata"
        className="nav-link"
        href="#/alldata/"
        onClick={(e) => {
          e.currentTarget.className = "nav-link active";

          document.querySelector("#home").className = "nav-link";
          document.querySelector("#createAccount").className = "nav-link";
          document.querySelector("#login").className = "nav-link";
          document.querySelector("#deposit").className = "nav-link";
          document.querySelector("#withdraw").className = "nav-link";
        }}
      >
        AllData
      </a>
    </nav>
  );
}

export default NavBar;
