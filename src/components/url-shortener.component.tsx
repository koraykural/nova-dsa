import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Divider, Link, Typography } from "@material-ui/core";

interface InputState {
  value: string;
  error: null | string;
}

interface ShortUrl {
  label: string;
  link: string;
}

const API_URL = 'https://api-ssl.bitly.com/v4/shorten';
const API_TOKEN = '044e0c700de46daceb8e7584b999cb021498f7fb';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnContainer: {
      padding: '0.75rem 0',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    shortUrl: {
      display: 'block',
      marginTop: '0.75rem',
    }
  })
);

export const UrlShortener: React.FC = () => {
  const classes = useStyles();

  const [url, setUrl] = useState<InputState>({
    error: null,
    value: "",
  });
  const [res, setRes] = useState<ShortUrl>();

  const fetchUrl = async (url: string): Promise<ShortUrl> => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify({ long_url: url }),
    };
    
    const res = await fetch(API_URL, requestOptions);
    const response = await res.json();
    if (response.description) {
      throw response.description;
    } else {
      return { label: response.id, link: response.link };
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (url.value === "") setUrl({ ...url, error: 'URL is required' });

    try {
      const shortUrl = await fetchUrl(url.value);
      setRes(shortUrl);
    } catch (err) {
      setUrl({ ...url, error: err });
      setRes({ label: '', link: '' });
    }
    return;
  };

  return (
    <>
        <Typography variant="h5">URL Shortener</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
              fullWidth
              margin="dense"
              type="url"
              name="url"
              label="URL"
              error={url.error ? true : false}
              helperText={url.error ? url.error : ""}
              value={url.value}
              onChange={(e) => {
              setUrl({ error: null, value: e.target.value });
              }}
              required
          />
          <div className={classes.btnContainer}>
            <Button type="submit" variant="contained" color="primary" size="large">
                Shorten URL
            </Button>
          </div>
        </form>
        {res && (
          <React.Fragment>
            <Divider />
            <Typography className={classes.shortUrl}>Result:</Typography>
            <Typography>
              <Link href={res.link} target="_blank" rel="noopener noreferrer">{res.label}</Link>
            </Typography>
          </React.Fragment>
        )}
    </>
  );
};
