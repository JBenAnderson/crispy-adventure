import React from "react";
import { UserContext } from "../App";
function Users() {
  let ctx = React.useContext(UserContext);
  let form = [];

  function getUsers(email, name, password, balance) {
    for (let i = 0; i < ctx.users.length; i++) {
      email = ctx.users[i].email;
      name = ctx.users[i].name;
      password = ctx.users[i].password;
      balance = ctx.users[i].balance;
      balance = new Intl.NumberFormat().format(balance);

      form.push([
        <tr key="tablerow">
          <th key="email">{email}</th>
          <th key="name">{JSON.stringify(name)}</th>
          <th key="password">{password}</th>
          <th key="balance">${balance}</th>
        </tr>,
      ]);
    }
  }

  getUsers();

  return form;
}
export default Users;
