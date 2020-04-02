import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

class Contact extends React.Component {
    render() {
        return(
            <div>
                <div className="container" id="contactpage" style={{paddingBottom: '0'}}>
                    <div className="contactme">
                        <h1 className="display-4" style={{textAlign: 'center'}}>Contact Me Through these Platforms</h1>
                        <hr style={{borderTop: '2px solid #b4b4b4'}}/>
                        <div className="languages">
                            <div>
                                <a href="https://github.com/s6eskand"><FaGithub size={50} style={{color: '#6e5494'}}/></a>
                            </div>
                            <div>
                                <a href="https://linkedin.com/in/sameskandar"><FaLinkedin size={50} style={{color: '#2965f1'}}/></a>
                            </div>
                            <div>
                                <a href="https://devpost.com/s6eskand?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"><FaDev size={50} style={{color: '#003e54'}}/></a>
                            </div>
                        </div>
                        <img className="profilepic" src="https://sam-eskandar.herokuapp.com/static/images/profile_pic.21be18cd3f8d.png" style={{borderRadius: '50%', borderTop: '50%'}}/>
                    </div>
                </div>
                <footer className="mojFooter" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <div className="container">
                        <div style={{padding: '10px 0 0 0', textAlign: 'center'}}>
                            <p> &copy; Copyright Sam Eskandar 2020</p>
                        </div>
                        <div className="bottom-footer">
                            <div className="col-md-12">
                                <ul className="footer-nav">
                                    <li>s6eskand@uwaterloo.ca</li>
                                    <li>sam.eskandar00@hotmail.com</li>
                                    <li>University of Waterloo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Contact;