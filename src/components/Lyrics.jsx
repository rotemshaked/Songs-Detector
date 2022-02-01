import React from "react";
import "../assets/styles.css";
import Music from "./MusicPlayer";

const Lyrics = ({
  songTitle,
  artistName,
  artistPicture,
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
    console.log(localStorageArray);
    localStorage.setItem("songs", JSON.stringify(localStorageArray));
  };

  return (
    <div className="secondPageBody">
      <div className="secondPageFrame">
        <div>
          <div className="secondPageArtistName">
            <strong>{artistName}</strong> - {songTitle}
          </div>
        </div>
      </div>
      <img className="coverPicture" src={coverPicture} alt="Album cover" />
      <div className="lyrics">{lyrics}</div>
      <div className="secondPageCoverAndMusic">
        <img className="artistPicture" src={artistPicture} alt="Album cover" />
        <button className="favorites" onClick={moveToFavorite}>
          Add To Favorites 💗
        </button>
        <div className="secondPageMusic">
          <Music preview={preview} />
        </div>
      </div>
    </div>
  );
};
export default Lyrics;
