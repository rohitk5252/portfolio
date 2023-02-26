import React, {useEffect, useRef, useState} from 'react'

const Header = () => {
  const [cross, handleCross] = useState(false)

  const [windowSize, setWindowSize] = useState(
    window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <header id="myHeader">
                <div className="logo_part">
                 <span className='pfp'><img  src="https://avatars.githubusercontent.com/u/58967842?v=4" alt="Rohit's Image" /></span> 
                 <a href="/"><h1>Rohit Kumar</h1></a>
                </div>
               {windowSize < 770 && <div className="links"> 
                <nav>    
                        <div className={cross ? "toggle_btn cross": "toggle_btn"} onClick={()=>handleCross(!cross)} ><div className="lines"></div><div className="lines"></div><div className="lines"></div></div>
                        <ul className="navigation">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#whatido">What I DO</a></li>
                            <li><a href="resume">Resume</a></li>
                            <li><a href="portfolio">Portfolio</a></li>
                            <li><a href="testimonial">Testimonial</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                </nav>
              
                <ul className="socials">
                  <a href="">
                    <i className="fa-brands fa-instagram"></i> 
                  </a>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-snapchat"></i>
                  </a>
                </ul>
                </div> }
                
                {windowSize >= 770 && <>
                <nav>    
                        <div className={cross ? "toggle_btn cross": "toggle_btn"} onClick={()=>handleCross(!cross)} ><div className="lines"></div><div className="lines"></div><div className="lines"></div></div>
                        <ul className="navigation">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#whatido">What I DO</a></li>
                            <li><a href="resume">Resume</a></li>
                            <li><a href="portfolio">Portfolio</a></li>
                            <li><a href="testimonial">Testimonial</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                </nav>
              
                <ul className="socials">
                  <a href="">
                    <i className="fa-brands fa-instagram"></i> 
                  </a>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-snapchat"></i>
                  </a>
                </ul>
                </>
               }

            
    </header>
  )
}

export default Header