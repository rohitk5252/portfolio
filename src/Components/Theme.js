import React, { useState } from 'react'

const Theme = () => {
    const [showTheme, handleShowTheme] = useState(false)

  return (
    <div className= {showTheme ? "themebar Btn--shadow theme_show" : "themebar Btn--shadow"}>
        <span className="setting" onClick={() => handleShowTheme(!showTheme)}>
        <i className="fa-solid fa-gear"></i>
        </span>
        <ul className="setting_options">
            <li>RTL</li>
            <li>Dark Mode</li>
            <li>Seamless</li>
            <li>A+</li>
            <li>A-</li>
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