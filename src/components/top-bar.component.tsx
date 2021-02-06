import React from 'react';
import Auth from '../auth';
import logo from '../assets/images/logo.png';
import AppBar from '@material-ui/core/AppBar';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    logoContainer: {
      display: 'flex'
    },
    logo: {
      height: '2.5rem'
    }
  }),
);

export const TopBar: React.FC = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Link className={classes.logoContainer} to="/">
          <img className={classes.logo} src={logo} alt="App Logo"/>
        </Link>
        <RightSide></RightSide>
      </Toolbar>
    </AppBar>
  );
}

const RightSide: React.FC = () => {
  const auth = Auth.instance;
  const location = useLocation();
  const history = useHistory();
  let showLogin = !auth.isAuthenticated && location.pathname !== '/login'
  let showLogout = auth.isAuthenticated;  

  const handleLogout = () => {
    auth.logout();
    history.push('/');
  }

  if (showLogin) {
    return (
      <Button component={Link} to={'/login'} variant="contained" color="secondary" disableElevation>Login</Button>
    )
  } else if (showLogout) {
    return (
      <Button variant="contained" color="secondary" disableElevation onClick={handleLogout}>Logout</Button>
    )
  } else {
    return (
      <React.Fragment></React.Fragment>
    )
  }
}
