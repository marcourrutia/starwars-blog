import "./App.css";
import { useEffect, useState } from "react";
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
  HyperSpace,
  FavButton,
  StartButton,
  Title,
  CircleAnimation,
} from "./components";
import { Home } from "./views";

function App() {
  const [startPage, setStartPage] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hyperSpace, setHyperSpace] = useState(false);
  const [circleClean, setCircleCLean] = useState(false);
  const [mouse, setMouse] = useState(true);

  useEffect(() => {
    if (hyperSpace) {
      const timer = setTimeout(() => {
        setCircleCLean(true);
      }, 2500);
      const timer2 = setTimeout(() => {
        setVisible(true);
      }, 3000);
      return () => clearTimeout(timer, timer2);
    }
  }, [hyperSpace]);

  return (
    <div className="App">
      <BackgroundStar
        hyper={hyperSpace}
        setHyper={setHyperSpace}
        mouse={mouse}
        setMouse={setMouse}
      />
      {hyperSpace && <HyperSpace />}
      {circleClean && <CircleAnimation />}
      {startPage && (
        <StartButton
          setStartPage={setStartPage}
          setHyper={setHyperSpace}
          setMouse={setMouse}
          lSOn={LightsaberOn}
          lSOff={LightsaberOff}
          lSActive={LightsaberActive}
          lSHit={lightsaberHit}
        />
      )}
      {visible && (
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
      )}
      );
    </div>
  );
}

export default App;
