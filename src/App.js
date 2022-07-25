import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Trending from "./Views/Trending/Trending";
import Movies from "./Views/Movies/Movies";
import Series from "./Views/Series/Series";
import Search from "./Views/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
