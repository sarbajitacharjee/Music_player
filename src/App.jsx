import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Musicplayer from "./pages/Player";
// import About from "./pages/About";
import MainLayout from "./pages/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing/Home page - No Navbar */}
        <Route path="/" element={<Home />} />

        {/* All pages after continue - with Navbar using layout */}
        <Route element={<MainLayout />}>
          <Route path="/musicplayer" element={<Musicplayer />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add more routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
