import axios from "axios";
import React from "react";
import { useState } from "react";
import "../assets/styles.css";

const Home = () => {
  const [songData, setsongData] = useState("");
  const [options, setoptions] = useState("");

  const handleChange = (e) => {
    setsongData(e.target.value);
  };

  async function getLyrics(e) {
    e.preventDefault();
    axios.get(`https://api.lyrics.ovh/suggest/${songData}`).then((data) => {
      setoptions(data.data.data);
      console.log(options);
    });
  }

  const listOfOptions = () => {
    return options.map((song) => {
      return (
        <li key={song.id}>
          <div>
            <strong>{song.artist.name}</strong> -{song.title}
            <a className="getLyrics" href="/">
              Get Lyrics
            </a>
          </div>
        </li>
      );
    });
  };

  /* //IF FAVORITE
  // const addSong = () => {
  //   setFavoriteSongs([...songs, { nameOfArtist: "", id: uuid() }]);
  // }; */

  return (
    <div className="homePageBody">
      <div className="containerHome">
        <div className="formContainer">
          <h1>Search Lyrics</h1>
          <form>
            <input
              type="text"
              placeholder="serach song"
              onChange={handleChange}
              value={songData}
            ></input>
            <button className="mic Button">🎙</button>
            <button className="search Button" onClick={getLyrics}>
              🔍
            </button>
          </form>
        </div>
        {options && <ul className="listOfOptions">{listOfOptions()}</ul>}
      </div>
    </div>
  );
};

export default Home;
