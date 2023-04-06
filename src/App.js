import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './Stylesheets/main.css';
import './Stylesheets/themes.css';
import './Stylesheets/animations.css';

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
    showMiddle: true,
    closeMenu: false,
    theme: "theme-orange"
  };

  handleLinkClick = () => {
    this.setState({
      showHeader: false,
      showMiddle: false
    });
  };

  handleOnCloseMenu = obj => {
    obj.closeMenu
      ? this.setState({closeMenu: false})
      : this.setState({closeMenu: !this.state.closeMenu});
  }

  handleThemeChange = e => {
    this.setState({theme: e.target.value})
  }

  render() {
    const { showHeader, showMiddle, closeMenu, theme } = this.state;

    return (
      <Router>
        <div className={`main-container ${theme}`}>
          <Navbar onLinkClick={this.handleLinkClick}
                  onCloseMenu={this.handleOnCloseMenu}
                  toggleMenu={closeMenu}
                  onThemeSelected={this.handleThemeChange}
                  theme={theme}
          />
          
          <div className="app-body" onClick={ () => this.handleOnCloseMenu({closeMenu: true})}>

            {showHeader && <Header />}

            <Routes>
              <Route path="/" element={!showHeader && <Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            {showMiddle && <Middle />}
            
          </div>
          
          <Footer />

        </div>
      </Router>
    );
  }

}

export default App;
