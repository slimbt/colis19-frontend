import { Button, makeStyles, TextField, withStyles } from '@material-ui/core'
import React from 'react'

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
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(3, 0, 0, 0),
    },
}));

function FeedbackForm() {

    const classes = useStyles();

    return (
        <div>
            <form>
                <CssTextField
                    className={classes.margin}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nom & Prénom"
                    name="name"
                    autoComplete="name"
                />
                <CssTextField
                    className={classes.margin}
                    margin="normal"
                    required
                    fullWidth
                    id="ville"
                    label="Ville"
                    name="ville"
                    autoComplete="ville"
                />
                <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type='text'
                    id="message"
                    label="Message"
                    name="message"
                    autoComplete="message"
                    multiline
                    rows='3'
                />
                <CssButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Confirmer
                </CssButton>
            </form>
        </div>
    )
}

export default FeedbackForm
