import React from "react"

function Header() {
    return(
        <nav>
        <div className="logo-container">
            <img src="./logo512.png" className = "logo" alt ="logo" />
            <h1 className="logo-Text">ReactFacts</h1>
        </div>
        <p>React Course - Project 1</p>
        </nav>
    )
}

export default Header