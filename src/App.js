import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Create from './components/create';
import Edit from './components/edit';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <h2>MERN Sample App</h2>
            <div>
              <ul>
                <li>
                  <Link to="/">To Do</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={List}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/edit/:id" component={Edit}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
