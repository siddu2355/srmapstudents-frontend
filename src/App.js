import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar"
import LinkScreen from './components/LinkScreen';
import ProfileScreen from './components/ProfileScreen';
import Home from "./components/Home"
import GitHubDetailScreen from "./components/GitHubDetailScreen"
import CodeChefScreen from './components/CodeChefScreen';
import CodeForcesScreen from './components/CodeForcesScreen';
import NotFound from './components/NotFound';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={ProfileScreen} />
        <Route exact path="/student" component={SearchPage} />
        <Route exact path="/student/:id" component={LinkScreen} />
        <Route path="/student/:id/github" component={GitHubDetailScreen} />
        <Route path="/student/:id/codechef" component={CodeChefScreen} />
        <Route path="/student/:id/codeforces" component={CodeForcesScreen} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from='/' exact to='/home' />
        <Redirect to="/not-found"/>
      </Switch>
    </React.Fragment>
  );
}

export default App;