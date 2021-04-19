import React from 'react'

const Experience = () => {
    return (
        <div className="experience">
            <div className="justify-content-centre my-3">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"> </div>
                    <div className="timeline-content">
                        <h3>Nov 2020 - Present</h3>
                        <h6>Code for Australia</h6>
                        <h>Role: Jr.ReactDeveloper</h>
                    </div>
                </div>
                {/*- */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Jan 2020 - Oct 2020</h3>
                        <h6>Portfolio</h6>
                        <h>Web Developer</h>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Nov 2019 - Dec 2019</h3>
                        <h6>Your creative Agency</h6>
                        <h>Software Tester</h>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>April 2018 - Sep 2019</h3>
                        <h6>OTSI</h6>
                        <h>Graduate Engineer</h>
                    </div>
                </div>



            </div>
            
        </div>
    )
}

export default Experience;
