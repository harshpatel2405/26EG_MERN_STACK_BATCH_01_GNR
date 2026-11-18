import React from "react";
import { useParams } from "react-router-dom";

const finalMoviePage = () => {
  const { id } = useParams();

  let finalMovie = {};

  const data = [
    {
      id: 101,
      name: "Ramayana",
      director: "Nitesh Tiwari",
      producer: "NamIt Malhotra",
      cast: ["Ranbir Kapoor", "Sai Pallavi", "Yash"],
      budget: "₹835 Crore",
      releaseDate: "2026",
      runTime: "180 Minutes",
    },
    {
      id: 102,
      name: "Dhurandhar",
      director: "Aditya Dhar",
      producer: "Jyoti Deshpande",
      cast: ["Ranveer Singh", "Sanjay Dutt", "Akshaye Khanna"],
      budget: "₹250 Crore",
      releaseDate: "2025",
      runTime: "214 Minutes",
    },
    {
      id: 103,
      name: "Aparichit",
      director: "S. Shankar",
      producer: "V. Ravichandran",
      cast: ["Vikram", "Sadha", "Prakash Raj"],
      budget: "₹25 Crore",
      releaseDate: "2005",
      runTime: "181 Minutes",
    },
  ];

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      finalMovie = data[i];
    }
  }

  return (
     <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "30px",
      backgroundColor: "#f1f1f1",
      minHeight: "100vh"
    }}>

      <div style={{
        display: "flex",
        width: "650px",
        backgroundColor: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
      }}>

        {/* Movie Image */}
        <img
          src={finalMovie.image}
          alt={finalMovie.name}
          style={{
            width: "250px",
            objectFit: "cover"
          }}
        />

        {/* Movie Details */}
        <div style={{
          padding: "25px",
          flex: 1
        }}>

          <h1 style={{
            color: "#222",
            marginTop: "0px",
            borderBottom: "3px solid #e50914",
            paddingBottom: "10px"
          }}>
            {finalMovie.name}
          </h1>

          <p><b>Movie ID:</b> {finalMovie.id}</p>

          <p><b>Director:</b> {finalMovie.director}</p>

          <p><b>Producer:</b> {finalMovie.producer}</p>

          <p><b>Cast:</b> {finalMovie.cast.join(", ")}</p>

          <p><b>Budget:</b> {finalMovie.budget}</p>

          <p><b>Release Date:</b> {finalMovie.releaseDate}</p>

          <p><b>Runtime:</b> {finalMovie.runTime}</p>

        </div>

      </div>

    </div>
  );
};

export default finalMoviePage;
