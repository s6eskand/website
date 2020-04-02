import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="container-fluid padding" id="aboutpage">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <div className="container">
                            <h1 className="display-4"><b>About Me</b></h1>
                            <hr style={{borderTop: '2px solid #b4b4b4'}}/>
                            <div className="col-12">
                                <p className="lead">Welcome to my personal website! I am an Engineering student at the University of Waterloo,
                                with a passion for Web Development, Autonomous systems and vehicles, and music!
                                <br/>
                                <br/>
                                Fun fact, I spent the last summer before University touring Ontario with the Toronto All-Star Big Band.
                                An amazing group of musicians who I had the honor of playing trumpet with.
                                <br/>
                                <br/>
                                I have experience in Python, JavaScript, C/C++, HTML/CSS, React, Django, Bootstrap, and a multitude of different web development tools and technologies
                                <br/>
                                <br/>
                                Scroll down to venture further into my digital portfolio, if you like what you see, feel free to contact me if you need a website, or any related contract work done!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// const aboutStyle = {
//     margin: '50px 100px',
// };

export default About;
