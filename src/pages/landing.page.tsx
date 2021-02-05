import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import bannerImage from '../assets/images/banner.jpg';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Security from '@material-ui/icons/Security';
import Speed from '@material-ui/icons/Speed';
import SettingsPower from '@material-ui/icons/SettingsPower';
import { Footer } from '../components/footer.component';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Signup } from '../components/signup.component';
import { ContactForm } from '../components/contact-form.component';
import { Email, Phone, Room } from '@material-ui/icons';
import Auth from '../auth';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ghostHeader: {
      height: '48px'
    },
    banner: {
      width: '100%',
      height: '40vw',
      minHeight: '200px',
      maxHeight: '70vh',
      backgroundImage: `url(${bannerImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: 'brightness(1.2)',
      position: 'relative'
    },
    bannerDiv: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      marginTop: '16px',
      background: 'rgba(155,160,180,0.4)',
      boxShadow: '0 0 1rem 0 rgba(100, 100, 100, .4), inset 0 0 2000px rgba(255, 255, 255, .3)',
      backdropFilter: 'blur(7px)',
      padding: '4rem',
      color: 'black',
      borderRadius: '0.5rem',
      border: '1px solid rgba( 255, 255, 255, 0.2 )',
      textAlign: 'center'
    },
    bannerText: {
      fontWeight: 'bold',
      color: 'white',
      textShadow: '1px 1px 5px rgba(0,0,0,0.5)'
    },
    resumeContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: '2rem 4rem',
    },
    resumeItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      backgroundColor: 'white',
      boxShadow: '1px 1px 3px rgba(0,0,0,0.3)',
      borderRadius: '0.75rem',
      padding: '1rem',
      margin: '2rem 0',
    },
    formContainer: {
      width: '50%',
    },
    midRight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      flexGrow: 1,
    },
    contactSection: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#eee',
      padding: '2rem 4rem',
    },
  }),
);


export const LandingPage: React.FC = () => {
  const auth = Auth.instance;
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');  

  if (auth.isAuthenticated) {
    return (
      <Redirect to="/d" />
    );
  }

  return (
    <React.Fragment>
      <div className={classes.ghostHeader}></div>
      <div className={classes.banner}>
        <div className={classes.bannerDiv}>
          <Typography className={classes.bannerText} variant="h2">Container HUB</Typography>
          <Typography className={classes.bannerText} variant="h6">Pre-made images for all your needs.</Typography>
        </div>
      </div>
        <div className={classes.resumeContainer}>
          <div className={classes.resumeItem}>
            <Security className={classes.resumeIcon} color="secondary" />
            <Typography>More Secure</Typography>
          </div>
          <div className={classes.resumeItem}>
            <Speed className={classes.resumeIcon} color="secondary"/>
            <Typography>Faster</Typography>
          </div>
          <div className={classes.resumeItem}>
            <SettingsPower className={classes.resumeIcon} color="secondary"/>
            <Typography>Easier Setup</Typography>
          </div>
        </div>
      <Container fixed>
        <div className={classes.midSection}>
          <div className={classes.formContainer}>
            <Signup></Signup>
          </div>
          <div className={classes.midRight}>
            <Typography variant="h3" className={classes.centerText}>Signup For Free Now!</Typography>
            <Typography variant="body1" className={classes.centerText}>Access to thousends of images, including AI solutions.</Typography>
          </div>
        </div>
      </Container>
      <div className={classes.contactSection}>
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
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}
