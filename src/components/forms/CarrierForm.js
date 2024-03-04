import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../../assets/css/CarrierForm.css'

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
                borderColor: '#242424',
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

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(images/recrute01.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: '100%',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '85%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(4, 0, 0),
    },
}));

export default function CarrierForm() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={5} md={5} className={classes.image} />
            <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <h3>Postuler pour un poste de travail</h3>
                    </Typography>
                    <form className={classes.form} validate>
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nom & Prénom"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Addresse Email"
                            name="email"
                            autoComplete="email"
                        />
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Numéro du téléphone"
                            name="phone"
                            autoComplete="phone"
                        />
                        <input type="file" class="custom-file-input"/>
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            autoComplete="message"
                        />
                        <CssButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Postuler
                        </CssButton>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}