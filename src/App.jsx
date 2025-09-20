import { Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Listing from "./Listing";
import Footer from "./Footer";
import Help from "./Help";
import Navbar from "./Navbar";
import Buy from "./Buy";
import Slide from "./Slide";
import { useEffect, useState } from "react";

function App() {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Menu = mobile ? Slide : Navbar;
  

  return (
    <>
      <Routes>
        <Route path="/" element={<><Menu /><Home /></>} />
        <Route path="/home" element={<><Menu /><Home /></>} />
        <Route path="/listing" element={<><Menu /><Listing /><Footer /></>} />
        <Route path="/about" element={<><Menu /><About /><Footer /></>} />
        <Route path="/help" element={<><Menu /><Help /><Footer /></>} />
        <Route path="/buy" element={<><Menu /><Buy /><Footer /></>} />
      </Routes>      
    </>
  );
}

export default App;