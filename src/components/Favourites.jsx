import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Music from "./MusicPlayer";
import "../assets/styles.css";
import Dictaphone from "./Dictaphone";

const Favourites = ({
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
}) => {
  return (
    <div className="favoriteSongsPage">
      <div className="favoriteSong">
        <div className="favoriteArtistName">
          {localStorage.getItem("artistName")} -
          <span className="favoritesongTitle">
            {localStorage.getItem("songTitle")}
          </span>
        </div>
        <img
          className="favoritesongTitleCoverPicture"
          src={localStorage.getItem("song")}
          alt="Album cover"
        />
        <Link className="favoriteGetLyricsLink" to="/Lyrics">
          Get Lyrics
        </Link>
      </div>
    </div>
  );
};
export default Favourites;
