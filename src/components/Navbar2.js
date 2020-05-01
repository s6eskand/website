import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';
import ReactCSSTransitionGroup from 'react-transition-group';
import {FaHome} from 'react-icons/fa';

const navStyle = {
    // transition: 'navLinkFade 0.5s ease forwards'
};

class Navbar2 extends React.Component {
    constructor() {
        super();
        this.state = {
            transform: 'translateX(100%)',
            isViewed: false,
            opacity: '0'
        };
    }

    logoClick = () => {
        scroll.scrollToTop();
        if (this.state.isViewed) {
            this.setState({
                transform: 'translateX(100%)',
                opacity:'0',
                opacity2: '0',
            })
        }
    };

    navSlide = () => {
        this.setState({
            isViewed: !this.state.isViewed,
            transform: this.state.isViewed ? 'translateX(100%)' : "translateX(0%)",
            opacity: this.state.isViewed ? '0' : '1',
            opacity2: this.state.isViewed ? '0' : '0.8'
        })
    };

    render() {
        return (
            <div>
            <div className="background-dark" style={{opacity: this.state.opacity2}}/>
            <div className="nav2" style={{position: 'fixed', width: '100%'}}>
                <Link className="phone-logo" onClick={this.logoClick}><FaHome size={30} style={{cursor: 'pointer'}}/></Link>
                <div className="samlogo" onClick={this.logoClick} style={{cursor: 'pointer'}}>
                    <h4>Sam Eskandar</h4>
                </div>
                    <ul className="nav2-links" style={{transform: this.state.transform, opacity: this.state.opacity, transition: '1s'}}>
                        <li className="nav-item">
                            <Link onClick={this.navSlide.bind(this)} to="aboutpage" spy={true} smooth={true} offset={-58} duration={2000}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={this.navSlide.bind(this)} to="projectpage" spy={true} smooth={true} offset={-70} duration={2000}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={this.navSlide.bind(this)} to="expertisepage" spy={true} smooth={true} offset={-20} duration={2000}>Expertise</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={this.navSlide.bind(this)} to="contactpage" spy={true} smooth={true} offset={100} duration={2000}>Contact</Link>
                        </li>
                    </ul>
                <div className="burgericon" onClick={this.navSlide.bind(this)}>
                    <div className="line1"/>
                    <div className="line2"/>
                    <div className="line3"/>
                </div>
            </div>
            </div>
        )
    }
}

export default Navbar2;