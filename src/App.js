import React, { Component } from 'react';
import './App.css';

import {Route, BrowserRouter, Switch} from 'react-router-dom'

//Components
import Fetch from './components/Fetch';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import InsertSearch from './components/InsertSearch';
import WrongPath from './components/WrongPath';


class App extends Component {

  render() {
    return (
      
      <div className="App"> 
        <BrowserRouter>
          <Switch>
            <Route  exact path="/" render={ () => { 
                return (
                  <div className="overlay">
                  <InsertSearch />
                  <Navigation />
                  </div>
                  );
                }
              } 
            />
            <Route exact path="/search" component={SearchForm} />
            <Route path="/search/:tag" component={Fetch}/>
            <Route component={WrongPath} />
          </Switch>
        </BrowserRouter> 
      </div>
    );
  };
}

export default App;
