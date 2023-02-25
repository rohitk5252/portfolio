import React, { useState } from 'react'

const Theme = () => {

    const [showTheme, setShowTheme] = useState(false)

    const handleRtl= () => {
        const body = document.querySelector("body")
        body.classList.toggle("rtl") ;
    }

  return (
    <div className= {showTheme ? "themebar Btn--shadow theme_show" : "themebar Btn--shadow"}>
        <span  title="Change Theme" className="setting" onClick={() => setShowTheme(!showTheme)}>
        <i className="fa-solid fa-gear"></i>
        </span>
        <ul className="setting_options">
            <li onClick={()=>handleRtl()}>RTL</li>
            <li>Dark Mode</li>
            <li>Seamless</li>
            <li>A+</li>
            <li>A-</li>
            <li className="colors_options">
                <span>Theme</span>
                <ul>
                    {/* <li className="c1"></li>
                    <li className="c2"></li>
                    <li className="c3"></li>
                    <li className="c4"></li>
                    <li className="c5"></li> */}
                    <input type="radio" name='radio'/>
                    <input type="radio" name='radio'/>
                    <input type="radio" name='radio'/>
                    <input type="radio" name='radio'/>
                    <input type="radio" name='radio'/>
                </ul>
            </li>
            <li>Reset</li>
        </ul>
    </div>
  )
}

export default Theme