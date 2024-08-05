import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import starwarsintro from "./assets/music/starwarsintro.mp3";
import {
  BackgroundMusic,
  BackgroundStar,
  FavButton,
  StartButton,
  Title,
} from "./components";
import { Home } from "./views";

function App() {
  const [startPage, setStartPage] = useState(true);

  return (
    <div className="App">
      <BackgroundStar />
      {startPage ? (
        <StartButton value={startPage} setValue={setStartPage} />
      ) : (
        <>
          <BackgroundMusic music={starwarsintro} />
          <div className="nav-container">
            <Title />
            <FavButton />
          </div>
          <div className="main-container">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </>
      )}
      ;
    </div>
  );
}

export default App;
