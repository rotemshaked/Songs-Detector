import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Music from "./MusicPlayer";
import "../assets/styles.css";

const Favourites = () => {
  const CardFavorite = () => {
    let tempArrayOfSongs = localStorage.getItem("songs");
    let arrayOfSongs = JSON.parse(tempArrayOfSongs);
    return arrayOfSongs.map((song) => {
      return (
        <div className="favoriteSongsPage">
          <div className="favoriteSong">
            <div className="favoriteArtistName">
              {song.artistName} -
              <span className="favoritesongTitle">{song.songTitle}</span>
            </div>
            <img
              className="favoritesongTitleCoverPicture"
              src={song.artistPicture}
              alt="Album cover"
            />
            <div className="favoriteMusicPlayer">{/* <Music /> */}</div>
            <Link className="favoriteGetLyricsLink" to="/Lyrics">
              Get Lyrics
            </Link>
          </div>
        </div>
      );
    });
  };

  return <div className="favorites">{CardFavorite()}</div>;
};
export default Favourites;
