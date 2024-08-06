import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LightsaberActive,
  lightsaberHit,
  LightsaberOff,
  LightsaberOn,
  starwarsintro,
} from "./assets/music";
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
  const [visible, setVisible] = useState(false);
  const [starVelocity, setStarVelocity] = useState(0.0004);

  return (
    <div className="App">
      <BackgroundStar Zvelocity={starVelocity} />
      {startPage ? (
        <StartButton
          value={startPage}
          setValue={setStartPage}
          setVelocity={setStarVelocity}
          lSOn={LightsaberOn}
          lSOff={LightsaberOff}
          lSActive={LightsaberActive}
          lSHit={lightsaberHit}
        />
      ) : (
        (setTimeout(() => {
          setVisible(true);
        }, 3000),
        (
          <>
            <BackgroundMusic music={starwarsintro} />
            <div className="nav-container">
              <Title />
              <FavButton />
            </div>
            <div className={`main-container ${visible ? "visible" : ""}`}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </BrowserRouter>
            </div>
          </>
        ))
      )}
      ;
    </div>
  );
}

export default App;
