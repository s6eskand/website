import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

class Contact extends React.Component {
    render() {
        return(
            <div className="container" id="contactpage">
                <div className="expertise">
                    <h1 className="display-4" style={{textAlign: 'center'}}>You can Connect With Me on These Platforms!</h1>
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
                </div>
            </div>
        )
    }
}

export default Contact;