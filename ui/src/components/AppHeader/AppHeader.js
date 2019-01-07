import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { Route } from 'react-router-dom';
import Trello from '../Trello/Trello';
import Slack from '../Slack/Slack';
import './AppHeader.css';

class SearchAppBar extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className="title" variant="h4" color="inherit" noWrap>
            <a href="/" style={{color: 'white', textDecoration: 'none'}}>Stackroute fsd</a>
            </Typography>
            <Typography variant="h5" color="inherit" noWrap style={{marginLeft: 50}}>
              <a href="/trello" style={{color: 'rgb(32, 34, 10)', textDecoration: 'none'}}>Trello</a>
            </Typography>
            <Typography variant="h5" color="inherit" noWrap style={{marginLeft: 50}}>
              <a href="/slack" style={{color: 'rgb(32, 34, 10)', textDecoration: 'none'}}>Slack</a>
            </Typography>
            <div className="grow" />
          </Toolbar>
        </AppBar>
        <Route path="/" exact render={() => <h1>Welcome to Stackroute learning...</h1>} />
        {/* <Route path="/trello" render={() => <h1>Trello</h1>} />
        <Route path="/slack" render={() => <h1>Slack</h1>} /> */}
        <Route path="/trello" exact component={Trello} />
        <Route path="/slack" component={Slack} />
      </div>
    );
  }
}

export default SearchAppBar;