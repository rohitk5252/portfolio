import React, { useState } from 'react'
const Theme = () => {
    const [count, cc] = useState(1.1);
    const [showTheme, setShowTheme] = useState(false)
    const body = document.querySelector("body")

    const handleRtl= () => {
        body.classList.toggle("rtl") ;
    }
    const handleDark= () => {
        body.classList.toggle("dark") ;
    }
    const handleApp = () => {
        body.style.fontSize = `${count}em`
        cc(count+0.1)
    }
    const handleAmm = () => {
        body.style.fontSize = `${count}em`
        cc(count-0.1)
    }
    
  return (
    <div className= {showTheme ? "themebar Btn--shadow theme_show" : "themebar Btn--shadow"}>
        <span  title="Change Theme" className="setting" onClick={() => setShowTheme(!showTheme)}>
        <i className="fa-solid fa-gear"></i>
        </span>
        <ul className="setting_options">
            <li onClick={()=>handleRtl()}>RTL</li>
            <li onClick={()=>handleDark()}>Dark Mode</li>
            <li>Seamless</li>
            <li onClick={()=> handleApp()}>A+</li>
            <li onClick={() => handleAmm()}>A-</li>
            <li className="colors_options">
                <span>Theme</span>
                <ul>
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