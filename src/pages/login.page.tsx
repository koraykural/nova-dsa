import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Auth from '../auth';
import { Footer } from '../components/footer.component';

interface InputState {
  value: string,
  error: null | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 'calc(100% - 3rem - 64px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    card: {
      padding: '1rem',
      maxWidth: '600px',
      width: '100%'
    },
    title: {
      textAlign: 'center'
    },
    submit: {
      display: 'block',
      margin: '1rem auto 0 auto'
    },
    ghostHeader: {
      height: '64px'
    }
  }),
);


export const LoginPage: React.FC = () => {
  const auth = Auth.instance;
  const classes = useStyles();
  
  const [email, setEmail] = useState<InputState>({
    error: null,
    value: ''
  });
  const [password, setPassword] = useState<InputState>({
    error: null,
    value: ''
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errorMessage = auth.login(email.value, password.value);
    if (errorMessage === 'User not found') {
      setEmail({
        ...email,
        error: errorMessage
      });
    }
    if (errorMessage === "Password is incorrect") {
      setPassword({
        ...password,
        error: errorMessage
      });
    }
  }

  return (
    <React.Fragment>
      <div className={classes.ghostHeader}></div>
      <Container className={classes.container} fixed>
        <div className={classes.ghostHeader}></div>
        <Card className={classes.card}>
          <h1 className={classes.title}>Login</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth margin="dense"
              type="email" name="email"
              label="Email" error={email.error ? true : false}
              helperText={email.error ? email.error : ''}
              value={email.value} onChange={(e) => { setEmail({ error: null, value: e.target.value }) }}
              required />
            <TextField
              fullWidth margin="dense"
              type="password" name="password"
              placeholder="************"
              label="Password" error={password.error ? true : false}
              helperText={password.error ? password.error : ''}
              value={password.value} onChange={(e) => { setPassword({ error: null, value: e.target.value }) }}
              required />
            <Button className={classes.submit} type="submit" variant="contained" color="primary"  size="large">
              Login
            </Button>
          </form>
        </Card>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
}
