import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Favourites = () => {
  const CardFavorite = () => {
    let tempArrayOfSongs = localStorage.getItem("songs");
    let arrayOfSongs = JSON.parse(tempArrayOfSongs);
    // console.log(arrayOfSongs);
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
            <Link className="favoriteGetLyricsLink" to="/Lyrics">
              Get Lyrics
            </Link>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    // if (Object.keys(localStorage).length > 0) {
    // }
  }, []);
  return (
    <>
      <CardFavorite />
      <div>jkllkjjkl</div>
    </>
  );
};
export default Favourites;
