import { Component } from 'react';
import Header from './layout/header/';
import Main from './layout/main/';
// import Footer from './layout/footer/';
import Sidebar from './components/sidebar/sidebar';

import './App.css';

class App extends Component {

  //TODO: Add global loader

  render() {
    return (
      <>
        <Header />
        <Main />
        {/* <Footer /> */}
        <Sidebar />
      </>
    );
  }
}

export default App;
