import { Component } from 'react';
import Header from './layout/header/';
import Main from './layout/main/';
import Footer from './layout/footer/';


import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <div>{this.state.counter}</div>
        </div> */}

        <Main />

        <Footer />
      </>
    );
  }
}

export default App;
