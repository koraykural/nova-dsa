import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TopBar } from './components/top-bar.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LoginPage } from './pages/login.page';
import { LandingPage } from './pages/landing.page';
import { PostLoginPage } from './pages/post-login.page';

export default () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/d" component={PostLoginPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
