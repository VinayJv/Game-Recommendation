import React from "react";
import "./styles.css";
import { useState } from "react";

const GamingDB = {
  Openworld: [
    { name: "Grand Theft Auto IV", rating: "4/5" },
    { name: "Watch Dogs 2", rating: "3/5" }
  ],

  Survival: [
    {
      name: "Minecraft",
      rating: "5/5"
    },
    {
      name: "Rust",
      rating: "4/5"
    }
  ],
  Battleroyal: [
    {
      name: "Apex Legends",
      rating: "5/5"
    },
    {
      name: "COD:Warzone",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Battleroyal");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎮 Games Recommendation 🎮 </h1>
      <p style={{ fontSize: "large" }}>
        {" "}
        Checkout my favorite games. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(GamingDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "white",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem .3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {GamingDB[selectedGenre].map((GamingDB) => (
            <li
              key={GamingDB.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #7F00FF",
                width: "70%",
                margin: "1rem 0rem"
              }}
            >
              {" "}
              <div class="output" style={{ fontSize: "larger" }}>
                {" "}
                {GamingDB.name}{" "}
              </div>
              <div class="output" style={{ fontSize: "smaller" }}>
                {" "}
                {GamingDB.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
