import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route ,useLocation } from "react-router-dom";

import Home from "./pages/Home";
import MusicPlayer from "./pages/MusicPlayer";
// import About from "./pages/About";
import MainLayout from "./pages/MainLayout";
import Favorites from "./pages/Favorites"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing/Home page - No Navbar */}
        <Route path="/" element={<Home />} />

        {/* All pages after continue - with Navbar using layout */}
        <Route element={<MainLayout />}>
          <Route path="/musicplayer" element={<MusicPlayer />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add more routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
