import React, { Component } from 'react';
import { Header } from './Header';
import { Sidenav } from './Sidenav';
import { Content } from './Content';

// CSS imports
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Header />
            <Sidenav />
            <Content />
         </div>
      );
   }
}

export default App;
