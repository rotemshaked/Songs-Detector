import React from "react";
import { useState } from "react";

const Home = () => {
  const [lyrics, setLyrics] = useState("");

  return (
    <div className="homePageBody">
      <div className="containerHome">
        <div className="formContainer">
          <h1>Search Lyrics</h1>
          <form>
            <input type="text" placeholder=" serach song"></input>
            <button className="mic Button">mic🎙</button>
            <button className="search Button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
