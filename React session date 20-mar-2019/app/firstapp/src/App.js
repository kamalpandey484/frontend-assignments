import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

class App extends Component {
  state = {
    counter : 0
  }

  incVal = () =>{
      this.state.counter++;
      this.setState({
        counter : this.state.counter
      })
  }

    decVal = () =>{
        this.state.counter--;
        this.setState({
            counter : this.state.counter
        })
    }

    resetVal = () =>{
        this.state.counter = 0;
        this.setState({
            counter : this.state.counter
        })
    }

  render() {
    return (
      <div className='app'>
          <Header num={this.state.counter}/>
          <Main inc={this.incVal} dec={this.decVal} reset={this.resetVal}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
