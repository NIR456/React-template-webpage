import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";
import Bootstrap from "./Bootstrap";
import "./styles.css";

const App = () =>{
    return(
<div>
    <NavBar/>
    <HeroSection/>
      <Footer/>
    <CopyrightSection/>
    <Bootstrap/>
</div>
    );
};
export default App;