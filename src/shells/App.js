import React from 'react';
import PropTypes from 'prop-types';

import 'typeface-roboto';

import {
  BrowserRouter as Router,
  Route,
  //Link,
} from 'react-router-dom';


import HomeContainer from '../containers/Home';
import AppContainer from '../containers/App';
import { withStyles, createStyleSheet } from 'material-ui/styles';


//import { Link, IndexLink } from 'react-router';


const styleSheet = createStyleSheet('App', theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },
//  appFrame: {
//    display: 'flex',
//    alignItems: 'stretch',
//    minHeight: '100vh',
//    width: '100%',
//  },
//  grow: {
//    flex: '1 1 auto',
//  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    transition: theme.transitions.create('width'),
  },
  appBarHome: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
//  [theme.breakpoints.up('lg')]: {
//    drawer: {
//      width: '250px',
//    },
//    appBarShift: {
//      width: 'calc(100% - 250px)',
//    },
//    navIconHide: {
//      display: 'none',
//    },
//  },
}));


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/app" component={AppContainer} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default withStyles(styleSheet)(App);
