import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/home";
import Lyrics from "./components/Lyrics";
import Favourites from "./components/Favourites";
import Music from "./components/MusicPlayer";
import axios from "axios";

function App() {
  const [getInput, setGetInput] = useState("");
  const [options, setOptions] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [songId, setSongId] = useState("");
  const [artistPicture, setArtistPicture] = useState("");
  const [preview, setPreview] = useState("");
  const [coverPicture, setcoverPicture] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [localStorageArray, setLocalStorageArray] = useState([]);

  useEffect(() => {
    function getLyrics() {
      axios
        .get(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
        .then((data) => {
          setLyrics(data.data.lyrics);
        });
    }
    getLyrics();
  }, [artistName, songTitle]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                getInput={getInput}
                setGetInput={setGetInput}
                options={options}
                setOptions={setOptions}
                songId={songId}
                setSongId={setSongId}
                artistPicture={artistPicture}
                setArtistPicture={setArtistPicture}
                preview={preview}
                setPreview={setPreview}
                coverPicture={coverPicture}
                setcoverPicture={setcoverPicture}
                artistName={artistName}
                setArtistName={setArtistName}
                songTitle={songTitle}
                setSongTitle={setSongTitle}
                lyrics={lyrics}
                setLyrics={setLyrics}
                localStorageArray={localStorageArray}
                setLocalStorageArray={setLocalStorageArray}
              />
            }
          ></Route>
          <Route
            path="/Lyrics"
            element={
              <Lyrics
                getInput={getInput}
                setGetInput={setGetInput}
                options={options}
                setOptions={setOptions}
                songId={songId}
                setSongId={setSongId}
                artistPicture={artistPicture}
                setArtistPicture={setArtistPicture}
                preview={preview}
                setPreview={setPreview}
                coverPicture={coverPicture}
                setcoverPicture={setcoverPicture}
                artistName={artistName}
                setArtistName={setArtistName}
                songTitle={songTitle}
                setSongTitle={setSongTitle}
                lyrics={lyrics}
                setLyrics={setLyrics}
                localStorageArray={localStorageArray}
                setLocalStorageArray={setLocalStorageArray}
              />
            }
          ></Route>
          <Route
            path="/Favourites"
            element={<Favourites localStorageArray={localStorageArray} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
