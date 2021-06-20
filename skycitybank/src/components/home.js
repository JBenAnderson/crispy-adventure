import React from "react";
import Card from "./card";
function Home() {
  return (
    <div className="card align-items-center">
      <div className="container">
        <div className="card align-items-center">
          <Card
            txtcolor="white"
            header="Front-End Bank Landing Page"
            title="Welcome to the bank"
            text="You can use this bank"
            body={
              <img
                src="piggyBank.png"
                className="img-fluid"
                alt="Responsive image"
              />
            }
          />
          <div className="sliding-background"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
