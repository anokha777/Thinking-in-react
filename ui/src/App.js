import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import SearchAppBar from './components/AppHeader/AppHeader';
// import MediaCard from './components/AppSelectionHomePage/AppSelectionHomePage';
// import AppFooter from './components/AppFooter/AppFooter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SearchAppBar />

        </BrowserRouter>
        {/* <AppFooter /> */}
        
      </div>
    );
  }
}

export default App;
