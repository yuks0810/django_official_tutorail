import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import Nav from "./components/react_router_tutorial/Nav";
import About from "./components/react_router_tutorial/About";
import Shop from "./components/react_router_tutorial/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/shop/" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { title : "no title" };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Home1 Page</h1> 
        <div>
          <button onClick={this.handleClick}>Click me</button>
        </div>
        <p>{this.state.title}</p>
      </div>
    )
  }

  handleClick = () => {
    axios
    .get("http://127.0.0.1:8000/api/entries", { params: {} })
    .then((results) => {
      this.setState({title: results.data[0].title})
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
  }
}

export default App;
