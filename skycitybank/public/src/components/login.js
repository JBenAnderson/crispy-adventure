import React from "react";
import Card from "./card";
import { UserContext } from "../App";
import SlidingBackground from "./slidingBackground";
import NavBar from "./navbar";
function Login() {
  const ctx = React.useContext(UserContext);

  const login = JSON.stringify(ctx.users[ctx.users.length - 1].name);
  console.log(login);

  function logout() {
    let loginForm = document.getElementById("loginForm");
    let loginField = document.getElementById("loginField");
    let loginImage = document.getElementById("loginImage");
    loginImage.src = "piggyBank.png";
    loginForm.className = "visible";
    loginField.innerHTML = "";
    document.querySelector("#deposit").className = "nav-link disabled";
    document.querySelector("#withdraw").className = "nav-link disabled";
    document.querySelector("#alldata").className = "nav-link disabled";
    document.getElementById("logoutDiv").className = "invisible";
    document.getElementById("logoutText").innerHTML =
      "Please login or visit the Create Account Page.";
  }

  return (
    <div className="container-fluid">
      <div className="card align-items-center" id="card-align-items-center">
        <Card
          txtcolor="white"
          header="Login"
          title=""
          body={
            <>
              <div>
                <img
                  id="loginImage"
                  src="locked.png"
                  className="img-fluid"
                  alt="Responsive image"
                />
              </div>
              <div id="loginField">
                You are logged in as:
                <h3 id="loginField">{login}</h3>
              </div>
              <br />
              <div className="invisible" id="loginForm">
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    login
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="email"
                  ></input>
                </div>

                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    password
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="password"
                  ></input>
                </div>

                <button
                  type="button"
                  className="btn btn-light"
                  id="submitButton"
                >
                  Submit
                </button>
              </div>
              <br />
              <br />
              <div>
                <div id="logoutText" className="visible">
                  Not you? Please
                </div>
                <div id="logoutDiv" className="visible">
                  <button
                    type="button"
                    className="btn btn-warning"
                    id="logoutButton"
                    onClick={logout}
                  >
                    logout
                  </button>
                </div>
              </div>
            </>
          }
        />
        <SlidingBackground />
      </div>
    </div>
  );
}
export default Login;
