import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

class App extends Component {
  state = {
    counter : 0
  }

  counterVal = () =>{
      this.state.counter++;
      this.setState({
        counter : this.state.counter
      })
  }


  render() {
    return (
      <div className='app'>
          <Header num={this.state.counter}/>
          <Main fun={this.counterVal}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
