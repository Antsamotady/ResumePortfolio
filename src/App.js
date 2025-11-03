import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';

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
import Gallerie from './Components/Pages/Gallerie';
import FormSubmissions from './Components/Pages/FormSubmissions';

class App extends Component {

  state = {
    showHeader: true,
    showMiddle: true,
    showGallerie: false,
    closeMenu: false,
    theme: "theme-gray"
  };

  handleLinkClick = () => {
    this.setState({
      showHeader: false,
      showMiddle: false,
      showGallerie: false,
      showFormSubmission: false,
      closeMenu: !this.state.closeMenu
    });
  };

  handleGallerieLinkClick = () => {
    this.setState({
      showHeader: false,
      showMiddle: false,
      showGallerie: true,
      showFormSubmission: false,
    });
  };
  
  handleFormSubmissionLinkClick = () => {
    this.setState({
      showHeader: false,
      showMiddle: false,
      showGallerie: false,
      showFormSubmission: true,
    });
  };

  handleOnCloseMenu = obj => {
    obj.closeMenu
      ? this.setState({ closeMenu: false })
      : this.setState({ closeMenu: !this.state.closeMenu });
  }

  handleThemeChange = e => {
    this.setState({ theme: e.target.value })
  }

  render() {
    const { showHeader, showMiddle, showGallerie, closeMenu, theme } = this.state;

    return (
      <LanguageProvider>
        <Router>
          <div className={`main-container ${theme}`}>
            <Navbar onLinkClick={this.handleLinkClick}
              onCloseMenu={this.handleOnCloseMenu}
              toggleMenu={closeMenu}
              onThemeSelected={this.handleThemeChange}
              theme={theme}
            />

            <div className="app-body" onClick={() => this.handleOnCloseMenu({ closeMenu: true })}>
              {showHeader && <Header />}
              <Routes>
                <Route path="/" element={!showHeader && <Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallerie" element={<Gallerie />} />
                <Route path="/submissions" element={<FormSubmissions />} />
              </Routes>
              {showMiddle && <Middle />}
            </div>

            <Footer 
              onGallerieLinkClick={this.handleGallerieLinkClick}
              onFormSubmissionLinkClick={this.handleFormSubmissionLinkClick}
            />

          </div>
        </Router>
      </LanguageProvider>
    );
  }

}

export default App;
