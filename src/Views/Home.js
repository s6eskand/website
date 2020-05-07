import React from 'react';
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Projects/>
                <Expertise/>
                <Contact/>
            </div>
        );
    }
}

export default Home;