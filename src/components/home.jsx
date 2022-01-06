import React from "react";
import axios from "axios";
import "../assets/styles.css";
import { Link } from "react-router-dom";
import Dictaphone from "./Dictaphone";

const Home = ({
  getInput,
  setGetInput,
  options,
  setOptions,

  setSongTitle,

  setArtistName,
  artistName,
  songTitle,
  setLyrics,
  setSongId,
  artistPicture,
  setArtistPicture,
  preview,
  setPreview,
  coverPicture,
  setcoverPicture,
}) => {
  const handleChange = (e) => {
    setGetInput(e.target.value);
  };

  function getData(e) {
    e.preventDefault();
    axios.get(`https://api.lyrics.ovh/suggest/${getInput}`).then((data) => {
      let songs = data.data.data.slice(0, -6);
      setOptions(songs);
    });
  }

  const getSongId = (id) => {
    setSongId(id);
  };

  const listOfOptions = () => {
    return options.map((song) => {
      let key = song.id;
      return (
        <li key={key}>
          <div>
            <strong>{song.artist.name}</strong> -{song.title}
            <div
              className="data"
              onClick={() => {
                getSongId(key);
                setArtistPicture(song.artist.picture_medium);
                setPreview(song.preview);
                setcoverPicture(song.album.cover_big);
                setSongTitle(song.title);
                setArtistName(song.artist.name);
              }}
            >
              <Link className="getLyricsLink" to="/Lyrics">
                Get Lyrics
              </Link>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="homePageBody">
      <div className="containerHome">
        <div className="formContainer">
          <h1>Search Lyrics</h1>
          <form>
            <input
              type="text"
              placeholder="Enter song name"
              onChange={handleChange}
              value={getInput}
            ></input>
            <button className="mic Button">🎙</button>
            <button className="search Button" onClick={getData}>
              🔍
            </button>
          </form>
        </div>
        {options && <ul className="listOfOptions">{listOfOptions()}</ul>}
      </div>
      {/* <Dictaphone /> */}
    </div>
  );
};

export default Home;
