import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Page2 from "./components/Page-2";
import Page3 from "./components/Page-3";

function App() {
  const [songData, setsongData] = useState("");
  const [options, setOptions] = useState("");
  const [songId, setSongId] = useState("");
  const [artistPicture, setArtistPicture] = useState("");
  const [preview, setPreview] = useState("");
  const [coverPicture, setcoverPicture] = useState("");
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
                songData={songData}
                setsongData={setsongData}
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
              />
            }
          ></Route>
          <Route
            path="/Page2"
            element={
              <Page2
                songData={songData}
                setsongData={setsongData}
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
                // lyrics={lyrics}
                // setLyrics={setLyrics}
              />
            }
          ></Route>
          <Route path="/Page3" element={<Page3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
