import "./App.css";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { AppRouter } from "./Router";
import {
  LightsaberActive,
  lightsaberHit,
  LightsaberOff,
  LightsaberOn,
} from "./assets/music";
import {
  BackgroundMusic,
  BackgroundStar,
  HyperSpace,
  FavButton,
  StartButton,
  Title,
  CircleAnimation,
  StartWarning,
} from "./components";
import injectContext, { Context } from "./store/context";

function App() {
  const [startPage, setStartPage] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hyperSpace, setHyperSpace] = useState(false);
  const [circleClean, setCircleCLean] = useState(false);
  const [mouse, setMouse] = useState(true);
  const [warning, setWarning] = useState(true);

  useEffect(() => {
    if (hyperSpace) {
      const timer = setTimeout(() => {
        setCircleCLean(true);
      }, 3000);
      const timer2 = setTimeout(() => {
        setVisible(true);
      }, 2000);
      return () => clearTimeout(timer, timer2);
    }
  }, [hyperSpace]);

  return (
    <BrowserRouter basename="/starwars-blog">
      <div className="App">
        {warning && <StartWarning setWarning={setWarning} />}
        {hyperSpace && <HyperSpace />}
        {circleClean && <CircleAnimation setCircleClean={setCircleCLean} />}
        <BackgroundStar
          hyper={hyperSpace}
          setHyper={setHyperSpace}
          mouse={mouse}
          setMouse={setMouse}
        />
        {startPage && (
          <Link to={"/home"}>
            <StartButton
              setStartPage={setStartPage}
              setHyper={setHyperSpace}
              setMouse={setMouse}
              lSOn={LightsaberOn}
              lSOff={LightsaberOff}
              lSActive={LightsaberActive}
              lSHit={lightsaberHit}
            />
          </Link>
        )}
        {!startPage &&
          (setTimeout(() => {
            setVisible(true);
          }, 3000),
          (
            <>
              <div className="nav-container">
                <BackgroundMusic />
                <Title />
                <FavButton />
              </div>
              <div className={`main-container ${visible ? "visible" : ""}`}>
                <AppRouter />
              </div>
            </>
          ))}
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
