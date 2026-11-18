import React from 'react'
import {Link, Links} from 'react-router-dom'

const DyanamicRouting = () => {
  return (
    <div>
      <Link to="/student/101">
      Student 101
      </Link>
      <Link to="/student/102">
      Student 102
      </Link>
      <Link to="/student/103">
      Student 103
      </Link>

      <br/>
      <br/>
      <br/>
      <div style={{display:"flex", gap:"20px"}}>
        <Link to="/movie/101">
         <div style={{
          width: "200px",
          border: "1px solid gray",
          borderRadius: "10px",
          overflow: "hidden",
          textAlign: "center"
        }}>

          <img
            src="https://placehold.co/200x250?text=Ramayan"
            alt="Ramayan"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover"
            }}
          />

          <h3>Ramayan</h3>

        </div>
        </Link>
        <Link to="/movie/102">
         <div style={{
          width: "200px",
          border: "1px solid gray",
          borderRadius: "10px",
          overflow: "hidden",
          textAlign: "center"
        }}>

          <img
            src="https://placehold.co/200x250?text=Dhurandhar"
            alt="Ramayan"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover"
            }}
          />

          <h3>Dhurandhar</h3>

        </div>
        </Link>
        <Link to="/movie/103">
         <div style={{
          width: "200px",
          border: "1px solid gray",
          borderRadius: "10px",
          overflow: "hidden",
          textAlign: "center"
        }}>

          <img
            src="https://placehold.co/200x250?text=Aparichit"
            alt="Ramayan"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover"
            }}
          />

          <h3>Aparichit</h3>

        </div>
        </Link>
      </div>
    </div>
  )
}

export default DyanamicRouting
