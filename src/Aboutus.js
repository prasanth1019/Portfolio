import React from "react"
import profilePic from "./assets/Prasanth.jpeg"
import './btn.css';
import resume from "./assets/Prasanth_9+_yearsExp_FullStack_Developer.doc";

const Aboutus = props => {

    // const btnRef = React.useRef(null);

    // React.useEffect(() => {
    //     const btn = btnRef.current;
    //     btn.addEventListener("click", () => {
    //         btn.classList.add("animating")
    //         // return () => btn.removeEventListener("click");
    //     });
    // });

    return (
        <>
            <section id="aboutus" >

                <article id="item-1" >
                    <div id="pic-container">
                        <img src={profilePic} alt="Prasanth-profile" className="profilePic" />
                    </div>
                </article>

                <article id="item-2" >
                    <div>
                        <h2 style={{ "textAlign": "left" }}>About Me</h2>
                        <p className="article-p-element" >
                            Having 9+ years of experience in web and mobile full stack development with focus on problem solving.
                            To find a position that is challenging, rewarding and provides an opportunity to expand my knowledge and abilities in creating client centric solutions.
                            I am willing to try new things and challenging opportunities emerge.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ "textAlign": "left" }} >Contact Details</h2>
                        <div className="flexx">
                            <div>
                                <address className="article-p-element" >
                                    <span> Prasanth Ramanathan </span> <br />
                                    <span> #33, 5th Main Road </span> <br />
                                    <span> Chrompet, Chennai, TN - 600_044 </span> <br />
                                    <span> (+91) 91899-24452 </span> <br />
                                    <span> prasanthram1019@ymail.com </span> <br />
                                </address>
                            </div>
                            <div className="download-container flex-1">
                                {/* <input type="button" ref={btnRef} id="download-btn" name="download-btn" value="Download Resume" data-btn className="btn" ></input> */}
                                <a 
                                    download="Prasanth_Resume.doc" 
                                    href={resume}
                                    target="_blank" 
                                    id="download-btn" 
                                    name="download-btn" 
                                    className="" >Download Resume</a>

                                {/* <div className="checkmark-container">
                                    <svg x="0px" y="0px" fill="none" className="checkmark-svg" viewBox="0 0 25 30">
                                        <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </article>

                <article id="item-3" >

                </article>
            </section>
        </>
    )
}

export default Aboutus