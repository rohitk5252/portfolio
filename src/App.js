import { useState } from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Theme from "./Components/Theme";
import './index.css'

function App() {
  return (
      <>
        <Header />
        <div className="main">
          <Theme  />
          <Banner />
          <About title={"Know Me More"} tafter={"About Me"}/>
          <Services title={"What I Do"} tafter={"Services"}/>
          <Resume title={"Resume"} tafter={"Summery"}/>
          <Testimonial title={"Client Speak"} tafter={"Testimonial"}/>
          <Contact title={"Contact"} tafter={"Get in Touch"}/>
        <Footer />
        </div>
      </>
  );
}

export default App;
