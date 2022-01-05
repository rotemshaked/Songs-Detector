import React from "react";
import { useEffect } from "react";
import "../assets/styles.css";
import Music from "./MusicPlayer";
import Favourites from "./Favourites";

const Lyrics = ({
  getInput,
  setGetInput,
  options,
  setOptions,
  songTitle,
  setSongTitle,
  artistName,
  setArtistName,
  songId,
  setSongId,
  artistPicture,
  setArtistPicture,
  preview,
  setPreview,
  coverPicture,
  setcoverPicture,
  lyrics,
  setLyrics,
  localStorageArray,
  setLocalStorageArray,
}) => {
  const song = {
    artistName: artistName,
    songTitle: songTitle,
    artistPicture: artistPicture,
  };

  const moveToFavorite = () => {
    // alert("Added To Favorites!");
    setLocalStorageArray((prevState) => [...prevState, song]);
    localStorage.setItem("songs", JSON.stringify(localStorageArray));
  };

  return (
    <div className="secondPageBody">
      <img className="artistPicture" src={artistPicture} alt="Album cover" />
      <div className="secondPageFrame">
        <div>
          <div className="secondPageArtistName">
            <strong>{artistName}</strong> - {songTitle}
          </div>
        </div>
      </div>
      <div className="lyrics">{lyrics}</div>
      <button className="favorites" onClick={moveToFavorite}>
        Add To Favorites 💗
      </button>
      <img className="coverPicture" src={coverPicture} alt="Album cover" />
      <div className="secondPageMusic">
        <Music preview={preview} />
      </div>
    </div>
  );
};
export default Lyrics;
