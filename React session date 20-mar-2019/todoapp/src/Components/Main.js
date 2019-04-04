import React, { Component } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Todo from "./components/todo/todo";
import Login from "./components/login/login";

class App extends Component {
    state = {
        user: {
            name: "yoyo",
            password: "1234",
            isAuth: false
        }
    };

    loginAuth = (e, user) => {
        e.preventDefault();
        let name = this.state.user.name === user.name;
        let password = this.state.user.password === user.password;
        if (name && password) {
            this.setState({
                user: { isAuth: true }
            });
        } else {
            this.setState({
                user: { isAuth: false }
            });
        }
    };

    render() {
        return (
            <Router>
                <header className="App-header ">
                    <i className="fa fa-check-square App-logo " aria-hidden="true" />
                    <h1>To Do</h1>
                </header>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Login
                            loginAuth={this.loginAuth}
                            isUserAuthed={this.state.user.isAuth}
                        />
                    )}
                />
                <Route
                    path="/todo"
                    render={() =>
                        this.state.user.isAuth ? <Todo /> : <Redirect to="/" />
                    }
                />
            </Router>
        );
    }
}

export default App;