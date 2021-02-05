import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { UrlShortener } from "../components/url-shortener.component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        boxShadow: '1px 1px 3px rgba(0,0,0,0.3)',
        borderRadius: '0.5rem',
        padding: '1rem 1.5rem',
        maxWidth: '600px',
        width: '100%',
    }
  })
);

export const ProjectsPage: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.main}>
        <div className={classes.card}>
            <UrlShortener></UrlShortener>
        </div>
    </div>
  );
}