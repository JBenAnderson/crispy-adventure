import React from "react";
import Card from "./card";
import { NavLink } from "react-router-dom";
import SlidingBackground from "./slidingBackground";
//import { NavLink } from "../App";
function Home() {
  return (
    <div className="container-fluid">
      <div className="card align-items-center" id="card-align-items-center">
        <Card
          txtcolor="white"
          header="SKY CITY BANK"
          title={
            <>
              <h4>Welcome to Sky City Bank!</h4>
            </>
          }
          text=""
          body={
            <>
              <img
                src="skycitybank-03.png"
                className="img-fluid"
                alt="Responsive image"
                width="300"
              />
              <div>
                <br />
                <NavLink to="/CreateAccount/">
                  <button
                    type="submit"
                    className="btn btn-light"
                    onClick={(e) => {
                      document.querySelector("#createAccount").className =
                        "nav-link active";

                      document.querySelector("#home").className = "nav-link";
                      document.querySelector("#login").className = "nav-link";
                      document.querySelector("#deposit").className = "nav-link";
                      document.querySelector("#withdraw").className =
                        "nav-link";
                      document.querySelector("#alldata").className = "nav-link";
                    }}
                  >
                    Click Here To Start
                  </button>
                </NavLink>
                <div id="valueBusiness">We value your business</div>
              </div>
            </>
          }
        />

        <SlidingBackground />
      </div>
    </div>
  );
}
export default Home;
