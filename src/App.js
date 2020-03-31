import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Projects from './components/Projects';
import Expertise from "./components/Expertise";

class App extends React.Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Projects/>
            <Expertise/>
        </div>
    );
  }
}


export default App;
