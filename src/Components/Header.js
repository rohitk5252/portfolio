import React, {useRef, useState} from 'react'

const Header = () => {
  const myRef = useRef(null);
  const [cross, handleCross] = useState(false)
  return (
    <header id="myHeader">
        <div className="container">
                <div className="logo_part">
                      <a href="/"><h1>Rohit Kumar</h1></a>
                </div>
             
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
        </div>
    </header>
  )
}

export default Header