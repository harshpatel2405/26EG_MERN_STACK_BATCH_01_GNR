// import React from "react";

const MapDemo2 = () => {
  const students = [
    {
      id: 101,
      name: "Aarav Sharma",
      age: 20,
      gender: "Male",
      marks: 85,
      address: "123 MG Road, Mumbai",
    },
    {
      id: 102,
      name: "Diya Patel",
      age: 21,
      gender: "Female",
      marks: 92,
      address: "45 Salt Lake, Kolkata",
    },
    {
      id: 103,
      name: "Rohan Das",
      age: 19,
      gender: "Male",
      marks: 78,
      address: "78 Lotus Lane, Delhi",
    },
    {
      id: 104,
      name: "Ananya Iyer",
      age: 20,
      gender: "Female",
      marks: 95,
      address: "12 Anna Salai, Chennai",
    },
  ];

  return (
    <div>
      <h1>Table Using Map</h1>

      <table className="table table-dark">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Marks</th>
            <th>Address</th>
        </tr>
        {students.map((student) => {
          return (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.marks}</td>
              <td>{student.address}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MapDemo2;

