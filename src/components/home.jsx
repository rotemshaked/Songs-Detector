import React from "react";
import axios from "axios";
import "../assets/styles.css";
import { Link } from "react-router-dom";

const Home = ({
  songData,
  setsongData,
  options,
  setOptions,
  setSongId,
  songId,
  artistPicture,
  setArtistPicture,
  preview,
  setPreview,
  setcoverPicture,
}) => {
  const handleChange = (e) => {
    setsongData(e.target.value);
  };

  async function getLyrics(e) {
    e.preventDefault();
    axios
      .get(`https://api.lyrics.ovh/suggest/${songData}`)
      .then((data) => {
        setOptions(data.data.data);
      })
      .catch(() => {
        alert("Couldn't find this song, try another!");
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
              className="getLyrics"
              onClick={() => {
                getSongId(key);
                setArtistPicture(song.artist.picture_medium);
                setPreview(song.preview);
                setcoverPicture(song.album.cover_big);
                console.log(song.album.cover_xl);
              }}
            >
              <Link className="getLyricsLink" to="/Page2">
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
