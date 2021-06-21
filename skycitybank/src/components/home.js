import React from "react";
import Card from "./card";
//import { NavLink } from "../App";
function Home() {
  return (
    <div className="container-fluid">
      <div className="card align-items-center" id="card-align-items-center">
        <Card
          txtcolor="white"
          header="SKY CITY BANK"
          title="Welcome!  Please create an account to begin."
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

                <button type="submit" className="btn btn-light">
                  Click Here To Start!
                </button>
              </div>
            </>
          }
        />

        <div className="sliding-background"></div>
      </div>
    </div>
  );
}
export default Home;
