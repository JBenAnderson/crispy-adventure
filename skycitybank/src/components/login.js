import React from "react";
import { UserContext, Card } from "./card";
function Login() {
  const ctx = React.useContext(UserContext);

  const login = JSON.stringify(ctx.users[ctx.users.length - 1].name);
  console.log(login);
  return (
    <div className="container">
      <div className="card align-items-center">
        <Card
          txtcolor="white"
          header="Login"
          title=""
          body={
            <>
              <div>
                <img
                  src="locked.png"
                  className="img-fluid"
                  alt="Responsive image"
                />
              </div>
              <div>
                You are logged in as:
                <h3 id="loginField">{login}</h3>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
export default Login;
