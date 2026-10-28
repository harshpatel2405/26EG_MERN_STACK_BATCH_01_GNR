import "./style.css";

const CrDemo3 = () => {
  let isAdmin = false;

  const AdminNav = [
    "Dashboard",
    "Notification Mgmt",
    "User Control",
    "Tickets",
  ];
  const userNav = ["Home", "About US", "Contact US", "Blog Page"];
  return (
    <div class="table-container">
      {isAdmin ? <b>Admin</b> : <b>User</b>}
      <table>
        <thead>
          <th>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsI6_XVoGMcdlXaxYbZKDjL0tpep4gBhm91fnpheoHAUQ0qHbQ34EHclat&s=10"
              width="100px"
            ></img>
          </th>

          {isAdmin
            ? AdminNav.map((nav) => {
                return <th>{nav}</th>;
              })
            : userNav.map((nav) => {
                return <th>{nav}</th>;
              })}
        </thead>
      </table>
    </div>
  );
};

export default CrDemo3;
