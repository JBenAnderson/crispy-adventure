import React from "react";
import Card from "./card";
import { UserContext } from "../App";
import SlidingBackground from "./slidingBackground";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [deposit, setDeposit] = React.useState("");

  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label + " " + "empty");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    return true;
  }

  function validateEmail(field, label) {
    if (!field) {
      setStatus("Error: " + label + " " + "empty");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else {
      for (let i = 0; i < field.length; i++) {
        let char = field[i];
        if (char == ("@" && ".")) {
          return true;
        }
      }
      setStatus("Error: " + label + " " + "not valid format");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    return true;
  }

  function validatePassword(field, label, length) {
    if (!field) {
      setStatus("Error: " + label + " " + "empty");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else {
      if (field.length < 8) {
        setStatus("Error: " + label + " " + "less than 8 characters");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }

    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validateEmail(email, "email")) return;
    if (!validatePassword(password, "password")) return;
    if (!validate(deposit, "deposit")) return;
    ctx.users.push({
      email,
      name,
      password,
      balance: deposit,
      transactions:
        ["+" + " " + "$" + new Intl.NumberFormat().format(deposit)] + " ",
    });

    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setDeposit("");
    setShow(true);
  }

  return (
    <div className="container-fluid">
      <div className="card align-items-center" id="card-align-items-center">
        <Card
          header="Create Account"
          status={status}
          body={
            show ? (
              <>
                <img
                  src="clipboard.png"
                  className="img-fluid"
                  alt="Responsive image"
                  width="70%"
                />
                <br />
                Enter your name
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
                Enter your email address
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                Create a password
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
                How much are you depositing?
                <br />
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    id="deposit"
                    placeholder="0"
                    value={deposit}
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    onChange={(e) => setDeposit(e.currentTarget.value)}
                  />
                  <span className="input-group-text">.00</span>
                </div>
                <button
                  id="button"
                  type="submit"
                  className="btn btn-light"
                  onClick={handleCreate}
                  line-height="50px"
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <h3>Success!</h3>
                <img
                  src="success.png"
                  className="img-fluid"
                  alt="Responsive image"
                  width="100%"
                />

                <button
                  type="submit"
                  id="successButton"
                  className="btn btn-light"
                  onClick={clearForm}
                >
                  Add another account
                </button>
              </>
            )
          }
        />
        <SlidingBackground />
      </div>
    </div>
  );
}
export default CreateAccount;
