import React from "react";
import Users from "./users";
import { UserContext, Card } from "./card";

function AllData() {
  let ctx = React.useContext(UserContext);

  return (
    <div className="container" id="nom">
      <div className="card align-items-center">
        <table id="myTable" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>

          <tbody id="tbody">
            <>
              <Users />
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AllData;