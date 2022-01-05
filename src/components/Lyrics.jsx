import React from "react";
import "../assets/styles.css";
// import Music from "./MusicPlayer";

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
}) => {
  return (
    <div className="secondPageBody">
      {/* <div>{console.log("input" + getInput)}</div>
      <div>{console.log("options" + options)}</div>
      <div>{console.log("title" + songTitle)}</div>
      <div>{console.log("name" + artistName)}</div>
      <div>{console.log("id" + songId)}</div>
      <div>{console.log(artistPicture)}</div>
      <div>{console.log(preview)}</div> */}
      <img className="artistPicture" src={artistPicture} alt="Album cover" />
      {/* <div>{preview}</div> */}
      <div className="secondPageFrame">
        <div>
          <strong>{artistName}</strong> <br></br>
          <div className="secondPageSongTitle"> {songTitle}</div>
          <div className="lyrics"> {lyrics}</div>
        </div>
      </div>
      <img className="coverPicture" src={coverPicture} alt="Album cover" />
      {/* <Music /> */}
    </div>
  );
};
export default Lyrics;
