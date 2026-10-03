import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import Catering from "./pages/Catering";
import Reviews from "./pages/Reviews";
import FindUs from "./pages/FindUs";
import Menu from "./pages/Menu";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
