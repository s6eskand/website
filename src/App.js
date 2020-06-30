import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Home from "./Views/Home";

class App extends React.Component {

  render() {
    return (
        <div>
            <Home />
            <Footer/>
        </div>
    );
  }
}


export default App;
