import React from 'react';
import { FaCss3Alt, FaHtml5, FaPython, FaReact, FaGit, FaJs } from 'react-icons/fa';
import { DiDjango, DiHeroku } from "react-icons/di";

class Expertise extends React.Component {
    render() {
        return (
            <div className="container" id="expertisepage">
                <div className="expertise">
                    <h1 className="display-4" style={{textAlign: 'center'}}>My Favourite Languages and Frameworks!</h1>
                    <hr style={{borderTop: '2px solid #b4b4b4'}}/>
                    <div className="languages">
                        <div>
                            <FaJs size={50} style={{color: '#F0DB4F'}}/>
                            <p>An essential language for interactive web pages</p>
                        </div>
                        <div>
                            <FaCss3Alt size={50} style={{color: '#2965f1'}}/>
                            <p>The stylesheets that gives a website it's iconic look</p>
                        </div>
                        <div>
                            <FaHtml5 size={50} style={{color: '#F16529'}}/>
                            <p>An essential language for interactive web pages</p>
                        </div>
                    </div>
                    <div className="languages">
                        <div>
                            <FaPython size={50} style={{color: '#4B8BBE'}}/>
                            <p>One of the best languages for scripting and backend features</p>
                        </div>
                        <div>
                            <FaReact size={50} style={{color: '#61dbfb'}}/>
                            <p>A seamless framework for well organized, UI's</p>
                        </div>
                        <div>
                            <DiDjango size={70} style={{color: '#092E20'}}/>
                            <p>An intricate web framework for full-stack applications</p>
                        </div>
                    </div>
                    <div className="languages">
                        <div>
                            <FaGit size={50} style={{color: '#F1502F'}}/>
                            <p>The best and most used Version Control System</p>
                        </div>
                        <div>
                            <DiHeroku size={50} style={{color: '#6762a6'}}/>
                            <p>An easy to use web hosting service</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Expertise;