import React from "react";

const DemoNavbar = () => {
  const isAdmin = true;
  return (
    <div>
      <h1>Navbar Page - {isAdmin ? "Admin" : "User"}</h1>

      {isAdmin ? (
        <ul>
          <li>Dashboard</li>
          <li>Users Data</li>
          <li>Home</li>
        </ul>
      ) : (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default DemoNavbar;
