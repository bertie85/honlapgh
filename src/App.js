import { Component } from 'react';
import Header from './layout/header/';
import Main from './layout/main/';
import Footer from './layout/footer/';

import './App.css';

class App extends Component {
  
  //TODO: Add global loader

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
