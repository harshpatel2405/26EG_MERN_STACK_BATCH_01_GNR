import React from "react";
import "./style.css";

const CrDemo2 = () => {
  let isAdmin = false;
  return (
    <div class="table-container">
      {isAdmin ? <b>Admin</b> : <b>User</b>}
      <table>
        <thead>
          {isAdmin ? (
            <tr>
              <th>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsI6_XVoGMcdlXaxYbZKDjL0tpep4gBhm91fnpheoHAUQ0qHbQ34EHclat&s=10"
                  width="100px"
                ></img>
              </th>
              <th>Dashboard</th>
              <th>Notification Mgmt</th>
              <th>User Control</th>
              <th>Tickets</th>
            </tr>
          ) : (
            <tr>
              <th>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsI6_XVoGMcdlXaxYbZKDjL0tpep4gBhm91fnpheoHAUQ0qHbQ34EHclat&s=10"
                  width="100px"
                ></img>
              </th>
              <th>Home</th>
              <th>About US</th>
              <th>Contact US</th>
              <th>Blog Page</th>
            </tr>
          )}
        </thead>
      </table>
    </div>


  );
};

export default CrDemo2;
