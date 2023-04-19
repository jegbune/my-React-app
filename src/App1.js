import React from 'react'
// import logo from "../images=/logo512.png"

export default function MainContent() {
    return (
    <div>
        <header className='header'>
            <nav>
                <img src="./logo512.png"  alt='logo' />
            </nav>
            <ul className='nav-list'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    </div>
    ) 
}
