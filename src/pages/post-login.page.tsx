import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TopBar } from '../components/top-bar.component';
import { CustomDrawer } from '../components/drawer.component';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { ProjectsPage } from './projects.page';
import { DashboardPage } from './dashboard.page';
import Auth from '../auth';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      height: '100%',
      padding: theme.spacing(3),
      paddingTop: '84px',
    },
  }),
);

export const PostLoginPage: React.FC = () => {
  const classes = useStyles();
  let { path } = useRouteMatch();
  const auth = Auth.instance;

  if (!auth.isAuthenticated) {
    return <Redirect to="/login"></Redirect>
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.appBar}>
          <TopBar></TopBar>
        </div>
        <Router>
          <CustomDrawer></CustomDrawer>
          <main className={classes.content}>
            {/* <Toolbar /> */}
            <Switch>
              <Route exact path={`${path}/`} component={DashboardPage} />
              <Route path={`${path}/projects`} component={ProjectsPage} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
