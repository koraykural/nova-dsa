import React from 'react';
import Container from '@material-ui/core/Container';
import bannerImage from '../assets/images/banner.jpg';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ghostHeader: {
      height: '48px'
    },
    banner: {
      width: '100%',
      height: '30vw',
      minHeight: '200px',
      backgroundImage: `url(${bannerImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }),
);


export const LandingPage: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.ghostHeader}></div>
      <div className={classes.banner} />
      <Container fixed>
      </Container>
    </React.Fragment>
  );
}
