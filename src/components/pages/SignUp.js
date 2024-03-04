import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'react-autocomplete-input/dist/bundle.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signup } from '../../actions/auth';


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
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${"images/bg10.png"})`,
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
    backgroundColor: 'white'
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

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    codepostal: "",
    city: "",
    password: "",
    confirmPassword: ""
  }

  const [formData, setFormData] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // const handleChangeSelect = (e) => {
  //   setFormData({ ...formData, city: e.target.value });
  // };

  return (
    <div className={classes.paperContainer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}  >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{
            color: '#1c2237'
          }}>
            Créer un compte
          </Typography>
          <form className={classes.form} validate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  className={classes.margin}
                  autoComplete="lname"
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Nom"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  className={classes.margin}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  className={classes.margin}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  className={classes.margin}
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  type="tel"
                  label="N° de Téléphone"
                  name="phone"
                  autoComplete="phone"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <CssTextField
                  className={classes.margin}
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  type="text"
                  label="Adresse"
                  name="address"
                  autoComplete="adress"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <CssTextField
                  className={classes.margin}
                  variant="outlined"
                  required
                  fullWidth
                  id="codepostal"
                  type="text"
                  label="Code postal"
                  name="codepostal"
                  autoComplete="codepostal"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.margin}
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  // select
                  label="Ville"
                  name="city"
                  autoComplete="city"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.margin}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.margin}
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmer mot de passe"
                  type="password"
                  id="password"
                  autoComplete="confirm-password"
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={<CssCheckbox value="allowExtraEmails" color="primary" />}
                  label="I have read and agree to Terms and Conditions and Privacy policy."
                />
              </Grid> */}
            </Grid>
            <CssButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Sign Up
          </CssButton>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2" style={{ color: '#82171f' }}>
                  Vous avez déjà un compte? S'identifier
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>

  );
}
