
import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/">
          <Header></Header>
          <Home></Home>
          </Route>
          <Router path ="/header">
            <Header></Header>
          </Router>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path ="/detail/:teamID">
            <TeamDetail></TeamDetail>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
