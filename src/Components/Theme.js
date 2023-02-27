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

    const handleRed = () => {
        body.style.color = "#E96479"
    }
    const handleJamni = () => {
        body.style.color = "#393053"
        body.style.backgroundColor = "#EEEEEE"
    }
    const handleBlue = () => {
        body.style.color = "#3E54AC"
        body.style.backgroundColor = "#E9F8F9"
    }
    const handlePurp = () => {
        body.style.color = "#AD7BE9"
        body.style.backgroundColor = "#ECF2FF"

    }
    const reset = () => {
        body.style.color = ""
        body.style.backgroundColor = "#ddd"
        body.style.fontSize = ""
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
                    <input onClick={() => handleRed()} type="radio" name='radio' id='redColor'/>
                    <label htmlFor="redColor"></label>

                    <input onClick={() => handleBlue()} type="radio" name='radio' id='blueColor'/>
                    <label htmlFor="blueColor"></label>

                    <label htmlFor="redColor"></label>
                    <input onClick={() => handleJamni()} type="radio" name='radio' id='jamniColor'/>
                    <label htmlFor="jamniColor"></label>

                    <input onClick={() => handleBlue()} type="radio" name='radio' id='blueColor'/>
                    <label htmlFor="blueColor"></label>

                    <input onClick={() => handlePurp()} type="radio" name='radio' id='purpColor'/>
                    <label htmlFor="purpColor"></label>
                    
                </ul>
            </li>
            <li onClick={() => reset()}>Reset</li>
        </ul>
    </div>
  )
}

export default Theme