import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles.css";
import Song from "./songLyrics";

const Home = () => {
  let [songName, setSongName] = useState("hello world");
  let [songlyrics, setSongLyrics] = useState("hello world");

  let userInput = (e) => {
    let temporary = e.target.value;
    setSongName(temporary);
  };
  // let userInput2 = (e) => {
  //   let temporary = e.target.value;
  //   setSongName(temporary);
  // };

  let searchSong = () => {
    axios(`https://api.lyrics.ovh/suggest/${songName}`).then((song) => {
      console.log(song);
      axios(
        `https://api.lyrics.ovh/v1/${song.data.data[0].artist.name}/${songName}`
      ).then((song) => {
        let songLyrics = song.data.lyrics;
        setSongLyrics(songLyrics);
        console.log(song);
        console.log(songLyrics);
      });
    });
    return <div lyrics={songlyrics}></div>;
  };

  // const dataShow = () => {
  //   return <Song lyrics={songlyrics} />;
  // };

  // useEffect(() => {
  //   return dataShow();
  // }, [songlyrics]);

  return (
    <div className="homePageContainer">
      <input onChange={userInput} placeholder="song name"></input>
      {/* <input onChange={userInput2} placeholder="song name"></input> */}
      <button onClick={searchSong}>Search</button>
      <button>Tap to find song</button>
      {/* <div>{dataShow()}</div> */}
    </div>
  );
};

export default Home;
