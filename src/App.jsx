import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Player from './pages/Player'; // You'll create this tomorrow
import Navbar from "./components/Navbar"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />

        {/* <Route path="/player" element={<Player />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
