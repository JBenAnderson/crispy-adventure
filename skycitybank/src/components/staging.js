return (
  <div className="card align-items-center">
    <div className="container">
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

        <div className="sliding-background"></div>
      </div>
    </div>
  </div>
);
