import React from "react";
import { UserContext } from "../App";
function Users() {
  let ctx = React.useContext(UserContext);
  let form = [];

  function getUsers(email, name, password, balance, transactions) {
    for (let i = ctx.users.length - 1; i < ctx.users.length; i++) {
      email = ctx.users[i].email;
      name = ctx.users[i].name;
      password = ctx.users[i].password;
      balance = ctx.users[i].balance;
      balance = new Intl.NumberFormat().format(balance);
      transactions = ctx.users[i].transactions;

      form.push([
        <tr key="tablerow">
          <th key="email">{email}</th>
          <th key="name">{JSON.stringify(name)}</th>
          <th key="password">{password}</th>
          <th key="balance">${balance}</th>
          <th key="transactions">{transactions}</th>
        </tr>,
      ]);
    }
  }

  getUsers();

  return form;
}
export default Users;
