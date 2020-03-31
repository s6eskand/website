import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Projects from './components/Projects';

class App extends React.Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Projects/>
        </div>
    );
  }
}


export default App;
