import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Auth from "../auth";

interface InputState {
  value: string;
  error: null | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    submitBtn: {
      margin: '1rem 0',
      float: 'right',
    },
  })
);

export const Signup: React.FC = () => {
  const auth = Auth.instance;
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState<InputState>({
    error: null,
    value: "",
  });
  const [organization, setOrganization] = useState<InputState>({
    error: null,
    value: "",
  });
  const [email, setEmail] = useState<InputState>({
    error: null,
    value: "",
  });
  const [password, setPassword] = useState<InputState>({
    error: null,
    value: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.value === "") setName({ ...name, error: 'Name is required' });
    if (email.value === "") setEmail({ ...email, error: 'Email is required' });
    if (password.value === "") setPassword({ ...password, error: 'Password is required' });

    const errorMessage = auth.register({
      name: name.value,
      email: email.value,
      organization: organization.value,
      password: password.value
    });
    if (errorMessage === "Email is already in use") {
      setEmail({
        ...email,
        error: errorMessage,
      });
    } if (errorMessage === "Name is already in use") {
      setName({
        ...name,
        error: errorMessage,
      });
    } else {
      history.push("/d");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        margin="dense"
        type="text"
        name="name"
        label="Name"
        error={name.error ? true : false}
        helperText={name.error ? name.error : ""}
        value={name.value}
        onChange={(e) => {
          setName({ error: null, value: e.target.value });
        }}
        required
      />
      <TextField
        fullWidth
        margin="dense"
        type="text"
        name="organization"
        label="Organization"
        value={organization.value}
        onChange={(e) => {
          setOrganization({ error: null, value: e.target.value });
        }}
      />
      <TextField
        fullWidth
        margin="dense"
        type="email"
        name="email"
        label="Email"
        error={email.error ? true : false}
        helperText={email.error ? email.error : ""}
        value={email.value}
        onChange={(e) => {
          setEmail({ error: null, value: e.target.value });
        }}
        required
      />
      <TextField
        fullWidth
        margin="dense"
        type="password"
        name="password"
        placeholder="************"
        label="Password"
        error={password.error ? true : false}
        helperText={password.error ? password.error : ""}
        value={password.value}
        onChange={(e) => {
          setPassword({ error: null, value: e.target.value });
        }}
        required
      />
      <Button className={classes.submitBtn} type="submit" variant="contained" color="primary" size="large">
        Signup
      </Button>
    </form>
  );
};
