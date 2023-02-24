import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Model from "./Components/Model";
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
          <Theme />
          <Banner />
          <About title={"Know Me More"} tafter={"About Me"}/>
          <Services title={"What I Do"} tafter={"Services"}/>
          <Resume title={"Resume"} />
          <Testimonial title={"Client Speak"}/>
          <Contact title={"Get in Touch"}/>
        </div>
        <Footer />
        <Model />
      </>
  );
}

export default App;
