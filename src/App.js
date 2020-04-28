import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Projects from './components/Projects';
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";

class App extends React.Component {

  render() {
    return (
        <div>
            <Navbar2/>
            <Header/>
            <About/>
            <Projects/>
            <Expertise/>
            <Contact/>
        </div>
    );
  }
}


export default App;
