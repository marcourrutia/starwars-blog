import "./App.css";
import BackgroundStar from "./components/BackgroundStar";
import { FavButton } from "./components/FavButton";

function App() {
  return (
    <div className="App">
      <BackgroundStar />
      <div className="nav-container">
        <FavButton />
      </div>
      <div className="main-container"></div>
    </div>
  );
}

export default App;
