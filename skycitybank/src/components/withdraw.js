import React from "react";
import Card from "./card";
import { UserContext } from "../App";
function Withdraw() {
  const [withdraw, setWithdraw] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  const balance = ctx.users[ctx.users.length - 1].balance;

  const currentUser = ctx.users[ctx.users.length - 1];

  return (
    <div className="container-fluid">
      <div className="card align-items-center">
        <Card
          header="Withdraw Funds"
          title={
            <>
              <img
                src="vault.png"
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
              How Much To Withdraw?
              <br />
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  id="withdraw"
                  value={withdraw}
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={(e) => {
                    setWithdraw(e.currentTarget.value);
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
                id="withdrawButton"
                onClick={(e) => {
                  if (withdraw < 0) {
                    alert(
                      "You cannot enter a negative number here.  If you would like to make a deposit, please visit the Deposit Page."
                    );
                    setWithdraw(0);
                  } else if (parseInt(balance) - parseInt(withdraw) < 0) {
                    alert(
                      "You cannot withdraw more money than your current available balance."
                    );
                  } else {
                    function calculate() {
                      let intWithdraw = parseInt(withdraw);
                      let initialValue = parseInt(balance);

                      {
                        {
                          currentUser.balance = initialValue - intWithdraw;
                          setWithdraw(0);
                        }
                      }
                    }
                    calculate();
                    setDisabled(true);
                  }
                }}
              >
                Get Funds
              </button>
            </>
          }
        />
        <div className="sliding-background"></div>
      </div>
    </div>
  );
}

export default Withdraw;
