import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" onClick={() => scroll.scrollToTop()}><h2><b>Home</b></h2></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="aboutpage" spy={true} smooth={true} offset={-70} duration={2000}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="projectpage" spy={true} smooth={true} offset={-70} duration={2000}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="expertisepage" spy={true} smooth={true} offset={-20} duration={2000}>Expertise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contactpage" spy={true} smooth={true} offset={100} duration={2000}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;