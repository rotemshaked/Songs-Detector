import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import Page3 from "./components/Page-3";

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
  // const [lyrics, setLyrics] = useState("");
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
              />
            }
          ></Route>
          <Route path="/favorites" element={<Page3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
