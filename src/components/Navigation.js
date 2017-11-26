import React, { Component } from 'react';

class Navigation extends Component {


  render() {
      return (
        <nav className="main-nav">
            <ul className="navigation-as">
              <li><a  href='http://localhost:3000/search/cats'>Cats</a></li>
              <li><a  href='http://localhost:3000/search/dogs'>Dogs</a></li>
              <li><a  href='http://localhost:3000/search/coffee'>Coffee</a></li>
            </ul>
        </nav>
      );
  };  
}


export default Navigation;