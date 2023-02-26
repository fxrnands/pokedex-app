import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import PokedexPages from "./pages/pokedex";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex" element={<PokedexPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
