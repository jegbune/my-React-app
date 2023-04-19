import React from "react"

function Header() {
    return(
        <nav>
        <div className="logo-container">
            <img src="./logo512.png" className = "logo" alt ="logo" />
            <h3 className="logo-Text">ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Header