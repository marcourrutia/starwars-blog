import "./App.css";
import BackgroundStar from "./components/BackgroundStar";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BackgroundStar />
      <div className="main-container">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
