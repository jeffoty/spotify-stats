import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Artists from "./Components/Top Artists/Top Artists.jsx";
import TopTracks from "./Components/Top Tracks/Top Tracks.jsx";
import Home from "./Components/Home";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/TopTracks" element={<TopTracks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
