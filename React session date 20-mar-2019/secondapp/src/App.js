import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import CounterAll from './CounterAll';

class App extends Component {

  state = {
    counter1 : 0,
    counter2 : 0,
    counter3 : 0
  }

    incVal = (count, counter) =>{
    counter++;
    this.setState({
      [count] : counter
    })
  }

  decVal = (count, counter) =>{
    counter--;
    this.setState({
      [count] : counter
    })
  }

  incAll = () =>{
    this.state.counter1++;
    this.state.counter2++;
    this.state.counter3++;
    this.setState({
      counter1 : this.state.counter1,
      counter2 : this.state.counter2,
      counter3 : this.state.counter3

    })
  }

  decAll = () =>{
    this.state.counter1--;
    this.state.counter2--;
    this.state.counter3--;
    this.setState({
      counter1 : this.state.counter1,
      counter2 : this.state.counter2,
      counter3 : this.state.counter3

    })
  }

  render() {
    return (
      <div className="App">
        <Counter inc={()=>{this.incVal('counter1', this.state.counter1)}}
                 dec={()=>{this.decVal('counter1', this.state.counter1)}}
                 num={this.state.counter1}/>
        <Counter inc={()=>{this.incVal('counter2', this.state.counter2)}}
                 dec={()=>{this.decVal('counter2', this.state.counter2)}}
                 num={this.state.counter2}/>
        <Counter inc={()=>{this.incVal('counter3', this.state.counter3)}}
                 dec={()=>{this.decVal('counter3', this.state.counter3)}}
                 num={this.state.counter3}/>
      <CounterAll incAll={this.incAll} decAll={this.decAll}/>
      </div>
    );
  }
}
export default App;
