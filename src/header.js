import React, { useState, useEffect } from "react";

const Header = props => {
    const [showbg, setShowbg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowbg(true);
            } else {
                setShowbg(false);
            }
        });
    }, []);

    const makeActiveNavBar = (e) => {
        const len = e.target.children.length;
        if (!len) {
        const menuLength = e.currentTarget.children.length;
        for (let index = 0; index < menuLength; index++) {
                e.currentTarget.children[index].className = '';
            }
            e.target.className = 'active';
        }
    }

    return(
    <>
        {/* <ul className={`header-nav-bar ${showbg ? "nav-bar-with-bg" : ""}`} onClick={makeActiveNavBar()} >
            
            <li className="" >
                <a href="#home" id="homediv" >HOME</a>
            </li>

            <li className="" >
                <a href="#aboutus" id="about" >ABOUT</a>
            </li>

            <li className="" >
                <a href="#resume" id="resumePrasanth" >RESUME</a>
            </li>

            <li className="" >
                <a href="#works" id="worksByPrasanth" >WORKS</a>
            </li>

            <li className="" >
                <a href="#testimonials-section" id="testimonialsByPrasanth">TESTIMONIALS</a>
            </li>

            <li className="" >
                <a href="#contactus" id="contact" >CONTACT</a>
            </li>

        </ul> */}
        
        <div className={`navbar header-nav-bar ${showbg ? "nav-bar-with-bg" : ""}`} onClick={(e) => makeActiveNavBar(e)}>
            <a className="active" href="#" id="homediv" > HOME</a>
            <a href="#aboutus" id="about" > ABOUT</a>
            <a href="#resume" id="resumePrasanth" > RESUME</a>
            <a href="#works" id="worksByPrasanth" > WORKS</a>
            <a href="#testimonials-section" id="testimonialsByPrasanth" > TESTIMONIALS</a>
            <a href="#contactus" id="contact" > CONTACT</a>
        </div>

        </>
    )
}

export default Header