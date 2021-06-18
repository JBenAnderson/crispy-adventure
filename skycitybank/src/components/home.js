import React from "react";
import { UserContext, Card } from "./card";
function Home() {
  return (
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
      </div>
    </div>
  );
}
export default Home;
