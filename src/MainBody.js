import React from "react"

function MainBody() {
    return(
        <div className="container">
            <h1 className="title">Fun facts about React</h1>
            <img src="./logo512.png" className="side-image" alt="side"/>
                <ul className = "ulist">
                    <li className="list"><p className="listext">Was first released in 2013</p></li>
                    <li className="list"><p className="listext">was originally created by Jordan Walke</p></li>
                    <li className="list"><p className="listext">Has well over 100K stars on GitHub</p></li>
                    <li className="list"><p className="listext">is maintianed by Facebook</p></li>
                    <li className="list"><p className="listext">Powers thousand of enterprise apps, including mobile apps</p></li>
                        
                </ul>
        </div>
    )
    
}
export default MainBody