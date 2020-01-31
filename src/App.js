import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';//ブラウザが異なる場合でも表示統一
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import firebase from 'firebase';
import firebaseConfig from './config/firebase';

firebase.initializeApp(firebaseConfig);



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#364D33',
    padding: '40px 80px',
    color: '#fff',
    boxShadow: '0px 1px 8px 0px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.12)',
    borderRadius: '5px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#388e3c',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2e6b31',
    }
  },
  title: {
    color: '#388e3c',
  }
}));




export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3" className={classes.title}>
          Hello React
        </Typography>
        <form className={classes.form}>

          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          
          <Grid container justify="space-around">
              <Grid item xs={4}>
                <Button
                fullWidth
                variant="contained"
                className={classes.button}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="password"
                fullWidth
                variant="contained"
                className={classes.button}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

// export default App;
