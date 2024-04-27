

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import vansData from './vansData';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
  
  
}

export default App
