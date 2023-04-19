import React from "react"

function ProfileInfo() {
    return(
        <div className="profile-info">
            <img src="./profileImg1.jpg" className="ProfileImg" alt = "profile-pic" />
            <h3>Laura Smith</h3>
            <h5>Frontend Developer</h5>
            <h6>laurasmith module</h6>
            <div className="button">
            <button className="email-btn">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 24V9H24H4V24V39H24" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 36L36 40L44 30" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9L24 24L44 9" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Email
            </button>
            
            <button className="linkedin-btn">
                <img className="linkedin" src = "./linkedin.png"  alt = "linkedin" />
                LinkedIn
            </button>
            </div>
        </div>
    )
}

export default ProfileInfo