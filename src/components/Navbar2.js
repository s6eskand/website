import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaHome} from 'react-icons/fa';
import { Link as RouteLink } from 'react-router-dom';

class Navbar2 extends React.Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
            counter: 0,
            transform: 'translateX(100%)',
            isViewed: false,
            opacity: '0',
            opacity3: '1',
            transition: 'opacity 0.75s ease-in',
            burger1: '',
            burger2: '',
            burger3: '',
            transitionx1: '',
            transitionx2: '',
            transitionx3: '',
            transitiony1: '',
            transitiony2: '',
            transitiony3: '',
            transformBurgerX: '',
            transformBurgerY: 'translateX(-200%)',
        };
    }

    logoClick = () => {
        scroll.scrollToTop();
        if (this.state.isViewed) {
            this.setState({
                transform: 'translateX(100%)',
                opacity:'0',
                opacity2: '0',
                opacity3: '1',
                transition: 'opacity 0.75s ease-in, transform 0.01s ease-out 0.75s',
                transformBurgerX: 'translateX(10%)',
                transformBurgerY: 'translateX(-200%)'
            })
        }
    };

    navSlide = () => {
        this.setState({
            isViewed: !this.state.isViewed,
            counter: this.state.counter++,
            transitionx1: 'opacity 0.5s ease-in, transform 0.5s ease-in',
            transitionx2: 'opacity 0.5s ease-in 0.2s, transform 0.5s ease-in 0.2s',
            transitionx3: 'opacity 0.5s ease-in 0.4s, transform 0.5s ease-in 0.4s',
            transitiony1: 'opacity 0.5s ease-in, transform 0.5s ease-in',
            transitiony2: 'opacity 0.5s ease-in 0.2s, transform 0.5s ease-in 0.2s',
            transitiony3: 'opacity 0.5s ease-in 0.4s, transform 0.5s ease-in 0.4s',
            transform: this.state.isViewed ? 'translateX(100%)' : "translateX(0%)",
            opacity: this.state.isViewed ? '0' : '1',
            opacity2: this.state.isViewed ? '0' : '0.8',
            opacity3: this.state.isViewed ? '1' : '0',
            transition: this.state.isViewed ? 'opacity 0.75s ease-in, transform 0.01s ease-out 0.75s' : 'opacity 0.75s ease-in',
            transformBurgerX: this.state.isViewed ? 'translateX(10%)' : 'translateX(-200%)',
            transformBurgerY: this.state.isViewed ? 'translateX(-200%)' : 'translateX(10%)',
        })
    };

    render() {
        return (
            <div>
            <div className="background-dark" style={{transform: this.state.transform, opacity: this.state.opacity2, transition: this.state.transition}}/>
            <div className="nav2" style={{position: 'fixed', width: '100%'}}>
                <Link className="phone-logo" onClick={this.logoClick}><FaHome size={30} style={{cursor: 'pointer'}}/></Link>
                <div className="samlogo" onClick={this.logoClick} style={{cursor: 'pointer'}}>
                    <h4>Sam Eskandar</h4>
                </div>
                    <ul className="nav2-links" style={{transform: this.state.transform, opacity: this.state.opacity, transition: '1s'}}>
                        <li className="nav-item">
                            <Link onClick={this.navSlide.bind(this)} to="aboutpage" spy={true} smooth={true} offset={-58} duration={2000}>About</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <RouteLink style={{textDecoration: 'none', color: 'black'}} to="/blog">Blog</RouteLink>*/}
                        {/*</li>*/}
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
                    <div style={{transform: this.state.transformBurgerX, transition: this.state.transitionx1, opacity: this.state.opacity3}} className="line1"/>
                    <div style={{transform: this.state.transformBurgerX, transition: this.state.transitionx2, opacity: this.state.opacity3}} className="line2"/>
                    <div style={{transform: this.state.transformBurgerX, transition: this.state.transitionx3, opacity: this.state.opacity3}} className="line3"/>
                </div>
                <div className="burgericon-rotate" onClick={this.navSlide.bind(this)}>
                    <div style={{transform: this.state.transformBurgerY, transition: this.state.transitiony1, opacity: this.state.opacity}} className="line1"/>
                    <div style={{transform: this.state.transformBurgerY, transition: this.state.transitiony2, opacity: this.state.opacity}} className="line2"/>
                    <div style={{transform: this.state.transformBurgerY, transition: this.state.transitiony3, opacity: this.state.opacity}} className="line3"/>
                </div>
            </div>
            </div>
        )
    }
}

export default Navbar2;