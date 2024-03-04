import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../../assets/css/ContactPage.css'


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

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    contact: {
        width: '20%'
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
        margin: theme.spacing(3, 0, -5),
    },
}));

export default function ContactPage() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={4} md={4} className={classes.contact} >
                <div class='contact-section'>
                    <h2>contact</h2>
                    <hr class="solid" />
                    <div className="contact-icons">
                        <i class="fas fa-map-marker-alt"></i>
                        <span> Rond-point En face -Sonede Monastir</span>
    
                   
                   
                   
                   </div>
                    <div className="contact-icons">
                        <i class="fas fa-phone-alt"></i>
                        <span> Service Client</span>
                        <br />
                        <p><a href="tel:+21655742938">(+216) 22136703 </a> </p>
                    </div>
                    <div className="contact-icons">
                        <i class="fas fa-phone-alt"></i>
                        <span> Service Commercial</span>
                        <br />
                        <p><a href="tel:+21655742938">(+216) 22136703 </a> </p>
                    </div>
                    <div className="contact-icons">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:contact@example.com"> contact@example.com</a>
                    </div>
                    <div className="contact-icons">
                        <i class="far fa-clock"></i>
                        <span> Lun- Sam: 8:00 - 22:00</span>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <h3>Formulaire de Contact</h3>
                    </Typography>
                    <form className={classes.form} validate>
                        <h6>Besoin d'aide ou d'informations ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.</h6>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nom & Prénom"
                                    name="name"
                                    autoComplete="name"
                                // autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='text'
                                    id="message"
                                    label="Votre message"
                                    name="message"
                                    autoComplete="message"
                                    multiline
                                    rows='4'
                                />
                            </Grid>
                        </Grid>
                        <CssButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Envoyer Message
                        </CssButton>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}










