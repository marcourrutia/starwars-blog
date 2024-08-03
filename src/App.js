import "./App.css";
import "./styles/NavBar.css";
import BackgroundStar from "./components/BackgroundStar";
import { FavButton } from "./components/FavButton";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <BackgroundStar />
      <div className="nav-container">
        <Title />
        <FavButton />
      </div>
      <div className="main-container"></div>
    </div>
  );
}

export default App;
