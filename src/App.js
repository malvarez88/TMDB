import Container from "@mui/material/Container";
import Navbar from "./components/Navbar/Navbar";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Trending from "./Views/Trending/Trending";
import Movies from "./Views/Movies/Movies";
import Series from "./Views/Series/Series";
import Search from "./Views/Search/Search";
import Login from "./Views/Login/Login";
import Register from './Views/Register/Register'


function App() {
  return (
    <BrowserRouter>
          <Navbar />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
          </Routes>
        </Container>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
