import React, { Component } from 'react';

import './Stylesheets/main.css';

import Header from './Components/Header';
import Middle from './Components/Middle';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className='main-container'>

          <Header />
          <Middle />
          <Footer />

        </div>
      </React.StrictMode>
    );
  }

}

export default App;
