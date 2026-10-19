import React from "react";
import './Com.css'

const ComponentDemo1 = () => {
  return (
    <div>
      <h2>Employee Directory</h2>

    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <td>Jane</td>
                <td>Doe</td>
                <td>Software Engineer</td>
            </tr>
            <tr>
                <td>John</td>
                <td>Smith</td>
                <td>Product Manager</td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>Jones</td>
                <td>UX Designer</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
};

export default ComponentDemo1;
