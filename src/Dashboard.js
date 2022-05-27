import React from "react";
import Typewriters from "./Typewriter";
import Socialmedia from "./Socialmedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = props => {
    return (
        <>
            <section style={{'height': '100vh'}}  id="home"  >
                <Typewriters />
                <Socialmedia />
                <p className="scrolldown"><a className="smoothscroll" href="#aboutus"><FontAwesomeIcon icon="fa-solid fa-circle-down" size="2xl" beat style={{color: "#FFF"}} /></a></p>
            </section>
        </>
    )
}

export default Dashboard