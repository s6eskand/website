import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGithub, FaDev } from 'react-icons/fa';
import {MdDevices} from 'react-icons/md';
import moodify from '../media/moodify.png';
import foolstack from '../media/foolstack-video.gif';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'

const mobileOffset = () => {
    if (window.innerWidth > 760) {
        return 1100;
    }
    else return 400;
};

AOS.init({
    offset: mobileOffset(),
    delay: 0,
    duration: 1000
});


console.log(window.innerWidth);

class Projects extends React.Component {

    displayAOS = (dir) => {
        if (window.screen.width < 900) {
            return '';
        }
        else {
            return `fade-${dir}`;
        }
    };

    render() {
        return(
            <div className="container" id="projectpage">
                <div className="container">
                    <div style={{paddingTop: '50px'}} className="col-12">
                        <h1 style={{textAlign: 'center'}} className="display-4">My Projects</h1>
                        <hr style={{borderTop: '2px solid #b4b4b4'}}/>
                    </div>
                </div>

                <section className="proj" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <img src={foolstack} alt="Video demonstration of Foolstack"/>
                    <div style={{textAlign: 'center'}}>
                        <h3><b>Foolstack</b></h3>
                        <p>
                            An interactive software architecture design, and documentation web application, built with React,
                            Grails, MongoDB, Azure, and the Github API.
                            <br/>
                            <br/>
                            Users can document database schema information, api endpoints, and sample code
                            in an intuitive and user friendly manner. Input supports markdown, as well as displaying
                            query params, request methods, sample requests and responses, in multiple languages.
                            <br/>
                            <br/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href="https://github.com/s6eskand/Foolstack"><i className="link-button"><FaGithub size={30}/></i></a>
                        </div>
                    </div>
                </section>

                <section className="proj" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <img src="https://sam-eskandar.herokuapp.com/static/images/coollistings.f1dd0ecf95a9.png" alt=""/>
                    <div style={{textAlign: 'center'}}>
                        <h3><b>Coollistings, a Craigslist Clone</b></h3>
                        <p>
                            A web-app that displays postings made on craigslist in a much more presentable fashion.
                            <br/>
                            <br/>
                            Built using Django, HTML/CSS, and Materialize, a CSS framework similar to Bootstrap, and hosted on Heroku.
                            <br/>
                            <br/>
                            Python library BeautifulSoup 4 is used to take queried listing title, cost, and display image from Craigslist.
                            <br/>
                            <br/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href="https://github.com/s6eskand/craigslist-clone"><i className="link-button"><FaGithub size={30}/></i></a>
                            <a href="https://coollistings.herokuapp.com"><i className="link-button"><MdDevices size={30}/></i></a>
                        </div>
                    </div>
                </section>

                <section className="proj" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <img src={moodify} alt=""/>
                    <div style={{textAlign: 'center'}}>
                        <h3><b>Moodify</b></h3>
                        <p>
                            Personalized Spotify playlists based on a users mood.
                            <br/>
                            <br/>
                            User records an audio log which is then converted to text and analyzed using NLP sentiment analysis.
                            The determined sentiment is then used to generate a custom Spotify playlist.
                            <br/>
                            <br/>
                            Built using React for frontend, Django for backend, and integrated through a REST API.
                            <br/>
                            <br/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href="http://github.com/s6eskand/Moodify"><i className="link-button"><FaGithub size={30}/></i></a>
                            <a href="https://devpost.com/software/moodify-9roijv"><i className="link-button"><FaDev size={30}/></i></a>
                        </div>
                    </div>
                </section>

                <section className="proj" data-aos-once={true} data-aos={this.displayAOS('right')} style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <img src="https://sam-eskandar.herokuapp.com/static/images/claw_machine.97bdaed67082.jpg" alt=""/>
                    <div style={{textAlign: 'center'}}>
                        <h3><b>Autonomous Claw Machine</b></h3>
                        <p>
                            An autonomous claw machine built in a group of four, highlighting our interest in autonomous systems.
                            <br/>
                            <br/>
                            Developed algorithm that retrieves objects based on color with 90% accuracy
                            <br/>
                            <br/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href="https://github.com/s6eskand/claw-machine"><i className="link-button"><FaGithub size={30}/></i></a>
                        </div>
                    </div>
                </section>

                <section className="proj" data-aos-once={true} data-aos={this.displayAOS('left')}  style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <img src="https://sam-eskandar.herokuapp.com/static/images/deltahacks.6a526cb38f11.png" alt=""/>
                    <div style={{textAlign: 'center'}}>
                        <h3><b>Find My Fam</b></h3>
                        <p>
                            A web app made at Deltahacks VI designed to help individuals with Alzheimers and their primary care-takers.
                            <br/>
                            <br/>
                            The primary caretaker registers a loved one diagnosed with Alzheimer's and then sets a "safe area". If the loved one leaves that area, the user is notified
                            <br/>
                            <br/>
                            Built using Django, Python, Javascript, and HTML/CSS
                            <br/>
                            <br/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href="https://github.com/s6eskand/alz_locate"><i className="link-button"><FaGithub size={30}/></i></a>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Projects;