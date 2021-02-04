import React from 'react';
import logo from '../assets/images/logo.png';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '3rem',
      position: 'static',
      backgroundColor: '#3f51b5',
      color: 'white'
    },
    toolbar: {
      margin: '0 2rem 0 2rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      height: '2rem'
    }
  }),
);

export const Footer: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <img className={classes.logo} src={logo} alt="Logo"/>
        <span>Koray Kural</span>
      </div>
    </div>
  );
}
