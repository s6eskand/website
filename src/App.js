import React from 'react';
import './App.css';
// import Header from "./components/Header";
// import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
// import Projects from './components/Projects';
// import Expertise from "./components/Expertise";
// import Contact from "./components/Contact";
import Home from "./Views/Home";
import Footer from "./components/Footer";
// import Blog from "./Views/Blog";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
        <Router>
            <div>
                <Navbar2/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
  }
}


export default App;
