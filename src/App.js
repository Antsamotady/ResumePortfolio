import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './Stylesheets/main.css';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Middle from './Components/Middle';
import Footer from './Components/Footer';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Capabilities from './Components/Pages/Capabilities';
import Contact from './Components/Pages/Contact';

class App extends Component {

  state = {
    showHeader: true,
    showMiddle: true
  };

  handleLinkClick = () => {
    this.setState({
      showHeader: false,
      showMiddle: false
    });
  };

  render() {
    const { showHeader, showMiddle } = this.state;

    return (
      <Router>
        <div className='main-container'>
          <Navbar onLinkClick={this.handleLinkClick} />
          {showHeader && <Header />}
          <Routes>
            <Route path="/" element={!showHeader && <Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {showMiddle && <Middle />}
          <Footer />

        </div>
      </Router>
    );
  }

}

export default App;
