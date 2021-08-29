import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/react_router_tutorial/Nav';
import About from './components/react_router_tutorial/About';
import Shop from './components/react_router_tutorial/Shop';

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

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
