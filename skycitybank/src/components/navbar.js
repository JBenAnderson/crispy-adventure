import React from "react";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function NavBar() {
  return (
    <nav className="nav nav-pills nav-fill">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="nav-tooltip">Return Home</Tooltip>}
      >
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
          Sky City Bank Home
        </a>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="nav-tooltip">Create or add an account</Tooltip>}
      >
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
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="nav-tooltip">login information</Tooltip>}
      >
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
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="nav-tooltip">Make a Deposit</Tooltip>}
      >
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
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="nav-tooltip">Make a Withdrawal</Tooltip>}
      >
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
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="nav-tooltip">All User Information</Tooltip>}
      >
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
      </OverlayTrigger>
    </nav>
  );
}

export default NavBar;
