import React from "react";
import Users from "./users";
import { UserContext } from "../App";
import SlidingBackground from "./slidingBackground";
function AllData() {
  let ctx = React.useContext(UserContext);

  return (
    <div className="container-fluid">
      <div className="card align-items-center" id="card-align-items-center">
        <table id="myTable" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
              <th scope="col">Transactions</th>
            </tr>
          </thead>

          <tbody id="tbody">
            <>
              <Users />
            </>
          </tbody>
        </table>

        <SlidingBackground />
      </div>
    </div>
  );
}
export default AllData;
