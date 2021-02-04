import React from 'react';
import Auth from './auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TopBar } from './components/top-bar.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LoginPage } from './pages/login.page';
import { LandingPage } from './pages/landing.page';
import { PostLoginPage } from './pages/post-login.page';

export default function ClippedDrawer() {
  const auth = Auth.instance;

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Route exact path="/" component={auth.isAuthenticated ? PostLoginPage : LandingPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
