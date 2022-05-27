import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Socialmedia = props => {
    return (
        <>
        <ul className="social-media-icons">
            <li> <a href="https://www.linkedin.com/in/prasanth-ram/" target="_blank" > <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" style={{color: "#ffffff"}} /> </a> </li>
            <li> <a href="https://github.com/prasanth1019?tab=repositories" target="_blank" > <FontAwesomeIcon icon="fa-brands fa-github-square"  size="2xl" style={{color: "#ffffff"}} /> </a> </li>
        </ul>
        </>
    )
}

export default Socialmedia