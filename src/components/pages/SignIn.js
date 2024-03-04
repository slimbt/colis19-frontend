import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextDivider from '../TextDivider';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { signin } from '../../actions/auth';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#82171f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#82171f',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'primary',
      },
      '&:hover fieldset': {
        borderColor: '#1c2237',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#82171f',
      },
    },
  },
})(TextField);

const CssButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#1c2237',
    margin: theme.spacing(3, 0, 2),
    '&:hover': {
      backgroundColor: '#82171f',
    },
  },
}))(Button);

// const CssCheckbox = withStyles({
//   root: {
//     color: '#1c2237',
//     '&$checked': {
//       color: '#82171f',
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${"images/bg17.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
    borderTop: '50px solid transparent',
    borderBottom: '50px solid transparent'
  },
  paper: {
    marginTop: theme.spacing(0),
    marginRight: -150,
    marginLeft: -150,
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#82171f'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    backgroundColor: 'white'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#82171f'
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const initState = {
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className={classes.paperContainer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} validate onSubmit={handleSubmit}>
            <CssTextField
              className={classes.margin}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <CssTextField
              className={classes.margin}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {/* <FormControlLabel
              control={<CssCheckbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            /> */}
            <CssButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Sign In
            </CssButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: '#82171f' }}>
                  Mot de passe oublié?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2" style={{ color: '#82171f' }}>
                  {"Vous n'avez pas de compte?? S'inscrire"}
                </Link>
              </Grid>
            </Grid>
            <TextDivider>OU</TextDivider>
          </form>
        </div>
      </Container>
    </div>

  );
}