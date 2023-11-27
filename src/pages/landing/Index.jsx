import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Footer from "./Footer";

function Index() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <PageTwo />
      <PageThree />
      <Footer />
    </div>
  );
}

export default Index;
