import React, { Component } from 'react';
import './App.css';
import Main from "./Main";
import 'whatwg-fetch';
import SeriesList from './SeriesList'

class App extends Component {
  state = {
    series : []
  }


  onSeriesChange = (e) =>{
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({series: json}))
    console.log(e.target.value)
  }

  render() {
    return (
     <div>
        <Main seriesLength = {this.state.series.length}/>
        <SeriesList list = {this.state.series} change = {this.onSeriesChange}/>
     </div>
    );
  }
}

export default App;
