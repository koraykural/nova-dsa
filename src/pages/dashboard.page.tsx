import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

export const DashboardPage: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.main}>
        <h3>Edit 'src/pages/dashboard.page.tsx'</h3>
    </div>
  );
}