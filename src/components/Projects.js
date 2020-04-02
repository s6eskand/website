import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGithub, FaDev } from 'react-icons/fa';
import {MdDevices} from 'react-icons/md';
import moodify from '../media/moodify.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'

AOS.init({
    offset: 1100,
    delay: 0,
    duration: 1000,
    disable: 'mobile',
});

class Projects extends React.Component {

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

                <section className="proj" data-aos="fade-right" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
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

                <section className="proj" data-aos="fade-left" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
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
                            <a href="https://findmyfam.herokuapp.com"><i className="link-button"><MdDevices size={30}/></i></a>
                        </div>
                    </div>
                </section>

                <section className="proj" data-aos="fade-right" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <img src="https://sam-eskandar.herokuapp.com/static/images/quizzapp.b31523acaa56.png" alt=""/>
                    <div style={{textAlign: 'center'}}>
                        <h3><b>Quiz App</b></h3>
                        <p>
                            A quiz app built using JavaScript, HTML, and CSS. Utilizes the Open Trivia Database API for trivia questions
                            <br/>
                            <br/>
                            The front end utilizes CSS flex box properties for a responsive web design, as well as a JavaScript loader animation.
                            <br/>
                            <br/>
                            User scores as well as high scores are stored in local storage.
                            <br/>
                            <br/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <a href="https://github.com/s6eskand/quizapp"><i className="link-button"><FaGithub size={30}/></i></a>
                            <a href="https://s6eskand.github.io/quizapp/"><i className="link-button"><MdDevices size={30}/></i></a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Projects;