import React from 'react' 

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

// export default MainContent