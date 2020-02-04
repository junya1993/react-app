import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';//ブラウザが異なる場合でも表示統一
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';

firebase.initializeApp(firebaseConfig);

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  async handleSignIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("success");
    } catch (error) {
      alert(error);
    }
  }

  // handleSignIn = e => {
  //   const {email, password} = this.state;

  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(user => {
  //       console.log("succese", user);
  //     })
  //     .catch(error => {
  //       console.log('firebase error', error);
  //   });
  // }


  handleSignUp = e => {
    e.preventDefault()
    //stateからemailとpasswordを取得する
    const {email, password} = this.state;

    //firebaseにemailとpasswordをPOST
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        this.setState({ email: null, password: null })
      })
      .catch(error => {
        console.log('firebase error', error);
      });
  }

  render() {
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div style={style.paper}>
          <Typography component="h1" variant="h3" style={style.title}>
            Hello React
          </Typography>
          <form style={style.form}>
  
            <TextField
              variant="standard"
              margin="normal"
              fullWidth
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              onChange={e => this.setState({ email: e.target.value })}
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
              onChange={e => this.setState({ password: e.target.value })}
            />
  
            <Grid container justify="space-around">
                <Grid item xs={4}>
                  <Button
                  fullWidth
                  variant="contained"
                  style={style.button}
                  onClick={e => this.handleSignIn(e) }
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  // type="password"
                  fullWidth
                  variant="contained"
                  style={style.button}
                  onClick={e => this.handleSignUp(e) }
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
}

const paper = {
  marginTop: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#364D33',
  padding: '40px 80px',
  color: '#fff',
  boxShadow: '0px 1px 8px 0px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.12)',
  borderRadius: '5px',
};

const form = {
  width: '100%', // Fix IE 11 issue
  marginTop: '10px',
};

const button = {
  margin: '20px',
  backgroundColor: '#388e3c',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2e6b31',
  }
};

const title = {
  color: '#388e3c',
};

const style = {
  paper,
  form,
  button,
  title
};
