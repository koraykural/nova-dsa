import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
    container: {
      padding: '1rem',
      maxWidth: '600px',
    },
  })
);

export const ContactForm: React.FC = () => {
  const classes = useStyles();

  const [name, setName] = useState<InputState>({
    error: null,
    value: "",
  });
  const [message, setMessage] = useState<InputState>({
    error: null,
    value: "",
  });
  const [email, setEmail] = useState<InputState>({
    error: null,
    value: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.value === "") setName({ ...name, error: 'Name is required' });
    if (email.value === "") setEmail({ ...email, error: 'Email is required' });
    if (message.value === "") setMessage({ ...message, error: 'Message is required' });
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Typography variant="h5">Send Us a Message</Typography>
      <TextField
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        name="name"
        label="Your Name"
        error={name.error ? true : false}
        helperText={name.error ? name.error : ""}
        value={name.value}
        onChange={(e) => {
          setName({ error: null, value: e.target.value });
        }}
        required
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        name="email"
        label="Your Email"
        
        error={email.error ? true : false}
        helperText={email.error ? email.error : "We will not send you any unnecessary emails."}
        value={email.value}
        onChange={(e) => {
          setEmail({ error: null, value: e.target.value });
        }}
        required
      />     
      <TextField
        variant="outlined"
        fullWidth
        required
        margin="dense"
        type="text"
        name="message"
        label="Message"
        multiline
        rows={4}
        rowsMax={6}
        error={message.error ? true : false}
        helperText={message.error ? message.error : ""}
        value={message.value}
        onChange={(e) => {
          setMessage({ error: null, value: e.target.value });
        }}
      />
      <Button className={classes.submitBtn} type="submit" variant="contained" disableElevation color="primary" size="large">
        Send Message
      </Button>
    </form>
  );
};
