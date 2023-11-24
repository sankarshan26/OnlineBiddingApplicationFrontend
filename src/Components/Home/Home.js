import React from "react";
import Navbar from "../NavigationBar/Navbar";
import ProductSlider from "./ProductSlider";
import Deals from "./Deals";
import Footer from "../Footer/Footer";

function Home() {
  
  

  return (
    <>
      <Navbar />

      <ProductSlider />

      <Deals heading={"Top Deals"}  />

      <Deals heading={"Trending Deals"}  />

      <Deals heading={"Deals You May Like"}  />

      <Footer />

    </>
  );
}

export default Home;
