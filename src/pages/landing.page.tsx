import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import bannerImage from '../assets/images/banner.jpg';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import Security from '@material-ui/icons/Security';
import Speed from '@material-ui/icons/Speed';
import SettingsPower from '@material-ui/icons/SettingsPower';
import { Footer } from '../components/footer.component';
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Toolbar } from '@material-ui/core';
import { Signup } from '../components/signup.component';
import { ContactForm } from '../components/contact-form.component';
import { Email, Phone, Room } from '@material-ui/icons';
import Auth from '../auth';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: '100%',
      height: '40vw',
      minHeight: '400px',
      maxHeight: '70vh',
      backgroundImage: `url(${bannerImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: 'brightness(1.2)',
    },
    bannerDiv: {
      background: 'rgba(155,160,190,0.35)',
      boxShadow: '0 0 1rem 0 rgba(100, 100, 100, .4), inset 0 0 2000px rgba(255, 255, 255, .3)',
      backdropFilter: 'blur(6px)',
      padding: '1rem',
      color: 'black',
      borderRadius: '0.5rem',
      border: '1px solid rgba( 255, 255, 255, 0.2 )',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        padding: '4rem 1rem',
      },
      [theme.breakpoints.down('sm')]: {
        borderRadius: '0',
      },
    },
    bannerText: {
      fontWeight: 'bold',
      color: 'white',
      textShadow: '1px 1px 4px rgba(0,0,0,0.6)'
    },
    resumeContainer: {
      padding: '2rem 0rem',
      margin: '0 0 2rem 0',
      width: '100%',
    },
    resumeIcon: {
      fontSize: '4rem',
      marginBottom: '0.5rem',
    },
    centerText: {
      textAlign: 'center',
      margin: '1rem 0'
    },
    midSection: {
      backgroundColor: 'white',
      boxShadow: '1px 1px 3px rgba(0,0,0,0.3)',
      borderRadius: '0.75rem',
      padding: '1rem',
      margin: '2rem 0',
      width: '100%',
    },
    flexCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      width: '100%',
    },
    contactSection: {
      padding: '2rem 0',
      margin: '2rem 0 0 0',
      width: '100%',
    },
    darkBg: {
      backgroundColor: '#eee',
    }
  }),
);


export const LandingPage: React.FC = () => {
  const auth = Auth.instance;
  const classes = useStyles();
  // const matches = useMediaQuery('(min-width:900px)');  

  if (auth.isAuthenticated) {
    return (
      <Redirect to="/d" />
    );
  }

  return (
    <React.Fragment>
      <Toolbar />
      <Grid container className={classes.banner} justify="center" alignItems="center">
        <Grid item lg={4} md={6} className={classes.bannerDiv}>
          <Typography className={classes.bannerText} variant="h2">Container HUB</Typography>
          <Typography className={classes.bannerText} variant="h6">Pre-made images for all your needs.</Typography>
        </Grid>
      </Grid>
      <div className={classes.darkBg}>
        <Container fixed>
          <Grid container spacing={5} justify="center" alignItems="center" className={classes.resumeContainer}>
            <Grid container item xs={12} sm={4} direction="column" alignItems="center">
              <Grid item>
                <Security className={classes.resumeIcon} color="secondary" />
              </Grid>
              <Grid item>
                <Typography>More Secure</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={4} direction="column" alignItems="center">
              <Grid item>
                <Speed className={classes.resumeIcon} color="secondary"/>
              </Grid>
              <Grid item>
                <Typography>Faster</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={4} direction="column" alignItems="center">
              <Grid item>
                <SettingsPower className={classes.resumeIcon} color="secondary"/>
              </Grid>
              <Grid item>
                <Typography>Easier Setup</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container fixed>
        <Grid container spacing={3} wrap="wrap-reverse" className={classes.midSection}>
          <Grid item md={6}>
            <Signup></Signup>
          </Grid>
          <Grid item md={6} className={classes.flexCenter}>
            <Typography variant="h3" className={classes.centerText}>Signup For Free Now!</Typography>
            <Typography variant="body1" className={classes.centerText}>Access to thousends of images, including AI solutions.</Typography>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.darkBg}>
        <Container fixed>
          <Grid container spacing={4} justify="center" alignItems="center" className={classes.contactSection}>
            <Grid item md={6} lg={4} className={classes.flexCenter}>
              <Typography variant="h4">Contact</Typography>
              <List>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar> <Phone /> </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="+90 212 215 20 30"
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar> <Email /> </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="info@hub.com"
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar> <Room /> </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography>Levent, Karanfil Aralığı No:16, 34330 </Typography>
                        <Typography>Beşiktaş/İstanbul</Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} lg={8} className={classes.flexCenter}>
              <ContactForm></ContactForm>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}
