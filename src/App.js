import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { useContext } from "react";
import { Context } from "./store/context";
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
import injectContext from "./store/context";
import { Loading } from "./components/Loading/Loading";

function App() {
  const [startPage, setStartPage] = useState(true);
  const [hyperSpace, setHyperSpace] = useState(false);
  const [circleClean, setCircleCLean] = useState(false);
  const [mouse, setMouse] = useState(true);
  const [warning, setWarning] = useState(true);
  const { actions } = useContext(Context);

  useEffect(() => {
    if (hyperSpace) {
      const timer = setTimeout(() => {
        setCircleCLean(true);
      }, 3000);
      const timer2 = setTimeout(() => {
        actions.setHomeVisible(true);
      }, 2800);
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
        {!startPage && (
          <>
            <div className="nav-container">
              <BackgroundMusic />
              <Title />
              <FavButton />
            </div>
            <AppRouter />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
