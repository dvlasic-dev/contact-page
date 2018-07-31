import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overlay"> </div>
        <Nav />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
