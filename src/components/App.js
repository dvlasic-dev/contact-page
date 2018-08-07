import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overlay"> </div>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
