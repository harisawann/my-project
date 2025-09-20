import { Route, Routes, Link } from "react-router"
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import Listing from "./Listing";
import Footer from "./Footer";
import Slide from "./Slide";


const Home = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Menu = mobile ? Slide : Navbar;
    return (
        <div>
            <Menu />
            <Cover />
            <Listing />
            <Footer />
        </div>
    )
}


export default Home