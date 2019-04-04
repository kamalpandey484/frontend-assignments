import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home'
import './App.css';
import Dynamic from './Dynamic'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to={"/Home"}>Home</Link><br/>
          <Link to={"/About"}>About</Link><br/>
          <Link to={"/User"}>User</Link><br/>
          <Route path={"/Home"} component={Home}/> {/*Default Component*/}
          {/*<Route path={"/Us  er"} render={()=><div>User Page</div>}/> /!*Default Component*!/*/}
          <Route path={"/About"} render={()=><div>About Page</div>}/> {/*Second Method*/}
          <Route path ="/Dynamic/:id/:name" render={(props)=><Dynamic {...props}/>} />
          <PrivateRoute path={'/User'} component={User} />
        </Router>
      </div>
    );
  }
}

export default App;

const User = () => <div> User Page</div>

const isAuth = !true;
const PrivateRoute =({component:Component, ...props})=>(
    <Route {...props} render={()=>(isAuth?<Component/>:<Redirect to={'/About'}/>)} />
)