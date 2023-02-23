import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import './index.css'

function App() {
  return (
      <>
        <Header />
        <div className="main">
          <Banner />
          <About title={"About Me"}/>
          <Services title={"What I Do"} />
          <Resume title={"Resume"} />
          <Testimonial title={"Client Speak"}/>
          <Contact title={"Get in Touch"}/>
        </div>
      </>
  );
}

export default App;
