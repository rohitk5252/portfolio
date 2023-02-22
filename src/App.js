import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import './index.css'

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <About title={"About Me"}/>
      </div>
      </>
  );
}

export default App;
