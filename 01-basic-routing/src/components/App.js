import React, { Component } from 'react';
import '../styles/App.css';

// components shown by the Routes
import Home  from './HomeComponent';
import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>
            </ul>
            <hr/>

            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/hello/good" render={() => { return  <h1>Good Morning</h1> }} />
              <Route path="/hello/andy" render={() => { return  <h1>Andy Knoll</h1> }} />
              <Route path="/hello" component={Hello} />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />   
              {/* catch all */}       
              <Route render={() => { return  <h1>NOT FOUND</h1> }} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}
export default App;
