import React from "react";
import axios from "axios";
import "../assets/styles.css";

const Page2 = ({
  songData,
  setsongData,
  options,
  setOptions,
  songId,
  setSongId,
  setLyrics,
  lyrics,
  artistPicture,
  preview,
  setPreview,
  coverPicture,
}) => {
  // function findLyrics() {
  //   console.log(picture);
  // }

  return (
    <div className="secondPageBody">
      <div>{console.log(artistPicture)}</div>
      <div className="artistPicture">
        <img src={artistPicture} alt="Album cover" />
      </div>
      <div>{preview}</div>
      <img className="coverPicture" src={coverPicture} alt="Album cover" />
    </div>
  );
};
export default Page2;
