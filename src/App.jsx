import { Routes, Route } from "react-router-dom";
import Artists from './Components/Top Artists';
import TopTracks from "./Components/Top Tracks";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";

import './App.css'

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
 
export default App
