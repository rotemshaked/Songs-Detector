import React from "react";

const Home = () => {
  return (
    <div className="homePageBody">
      <div className="containerHome">
        <div className="formContainer">
          <h1>Search Lyrics</h1>
          <form>
            <input type="text" placeholder=" 🎵 ❣💦🕳It's Alright 🎵"></input>
            <button className="mic Button">mic🎙</button>
            <button className="search Button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
