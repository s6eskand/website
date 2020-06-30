import React from 'react';
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar2 from "../components/Navbar2";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar2 />
                <Header/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

export default Home;