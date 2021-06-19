import React from "react";
import Card from "./card";
import { UserContext } from "../App";
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
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (!validate(deposit, "deposit")) return;
    ctx.users.push({
      email,
      name,
      password,
      balance: deposit,
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
    <div className="container">
      <div className="card align-items-center">
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
                />
                Name
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
                Email Address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                Password
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
                Initial Deposit Amount?
                <br />
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    id="deposit"
                    value={deposit}
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    onChange={(e) => setDeposit(e.currentTarget.value)}
                  />
                  <span className="input-group-text">.00</span>
                </div>
                <br />
                <br />
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleCreate}
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <h5>Success</h5>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearForm}
                >
                  Add another account
                </button>
              </>
            )
          }
        />
      </div>
    </div>
  );
}
export default CreateAccount;
