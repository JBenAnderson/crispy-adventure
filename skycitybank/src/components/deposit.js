import React from "react";
import Card from "./card";
import { UserContext } from "../App";
function Deposit() {
  const [deposit, setDeposit] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  const balance = ctx.users[ctx.users.length - 1].balance;
  const currentUser = ctx.users[ctx.users.length - 1];

  return (
    <div className="container">
      <div className="card align-items-center">
        <Card
          header="Deposit Funds"
          title={
            <>
              <img
                src="wallet.png"
                className="img-fluid"
                alt="Responsive image"
              />
            </>
          }
          body={
            <>
              <br />
              <div>
                Your current balance is:
                <h1 id="balanceField">
                  ${new Intl.NumberFormat().format(balance)}
                </h1>
              </div>
              <br />
              <br />
              How Much To Deposit?
              <br />
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  id="deposit"
                  value={deposit}
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={(e) => {
                    setDeposit(e.currentTarget.value);
                    setDisabled(false);
                  }}
                />
                <span className="input-group-text">.00</span>
              </div>
              <br />
              <br />
              <button
                disabled={disabled}
                type="submit"
                className="btn btn-light"
                id="depositButton"
                onClick={(e) => {
                  if (deposit < 0) {
                    alert(
                      "You cannot enter a negative number here.  If you would like to make a withdraw, please visit the Withdraw Page."
                    );
                    setDeposit(0);
                  } else {
                    function calculate() {
                      let intDeposit = parseInt(deposit);
                      let initialValue = balance;

                      {
                        {
                          currentUser.balance = initialValue + intDeposit;
                          setDeposit(0);
                        }
                      }
                    }
                    calculate();
                    setDisabled(true);
                  }
                }}
              >
                Add Funds
              </button>
            </>
          }
        />
      </div>
    </div>
  );
}
export default Deposit;
