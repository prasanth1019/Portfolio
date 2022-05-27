import CircularProgressbarComp from "./CircularProgressbar"

const Resume = props => {

    return (
        <>
            <section id="resume" style={{ 'height': '100vh' }} className="resume-container" >
                <div id="edu-container" >
                    <div id="edu-left-container" >
                        <h1> <span>EDUCATION</span> </h1>
                    </div>
                    <div id="edu-right-container" >
                        <h3> Anna University </h3>
                    </div>
                </div>
                <div className="horizontal-line" > </div>
                <div id="works-container" >
                    <div id="works-left-container" >
                        <h1> <span>WORKS</span> </h1>
                    </div>
                    <div id="works-right-container" >
                        <div> <h3 style={{ 'margin': 0 }} > Comcast India Engineering Center LLP </h3> </div>
                        <div> <em>Senior Frontend Engineer - Development • December 2017 - Present</em>  </div>
                        <div> <h3 style={{ 'margin': 0 }} > Cognizant technology solutions </h3> </div>
                        <div> <em> Technical Lead • Feburary 2016 - December 2017 </em> </div>
                        <div> <h3 style={{ 'margin': 0 }} > Htc Global Services </h3> </div>
                        <div> <em> Mobile App Developer • June 2012 - January 2016 </em> </div>
                    </div>
                </div>
                <div className="horizontal-line" > </div>
                <div id="skills-container" >
                    <div id="skills-left-container" >
                        <h1> <span>SKILLS</span> </h1>
                    </div>

                    <div id="skills-right-container" >
                        <div id="skills-right-container-display" >
                            <div id="skills-right-container-displayOne" >

                                <CircularProgressbarComp value="80" technology="Web Development" />
                                <CircularProgressbarComp value="85" technology="JavaScript" />
                                <CircularProgressbarComp value="70" technology="CI / CD" />
                            </div>
                            <br />
                            <br />
                            <div id="skills-right-container-displayTwo" >
                                <CircularProgressbarComp value="80" technology="Angular Js 2 / 4" />
                                <CircularProgressbarComp value="75" technology="REACT-REDUX" />
                                <CircularProgressbarComp value="70" technology="MATERIAL UI" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Resume