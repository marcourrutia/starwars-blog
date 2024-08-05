import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackgroundStar, FavButton, Title } from "./components";
import { Home } from "./views";

function App() {
  return (
    <div className="App">
      <BackgroundStar />
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
    </div>
  );
}

export default App;
