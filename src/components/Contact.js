
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useStyles } from '../hooks/useStyles'
import emailjs from 'emailjs-com'
import { Stack,Snackbar,Alert } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll'


export const Contact = ({ title, dark, id }) => {
    const styles = useStyles();
    const [open, setOpen] = useState(false)
    const form = useRef();

    const handleSucces = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vvm5chi', 'template_y5ixxdg', e.target, 'user_ahRtZvAiPCLPEszcoqjLB')
            .then((result) => {
                handleSucces()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        scrollToTop();
    };
    return (
        <div className={`${styles.section} ${dark && styles.sectiondark}`}>
            <div className={styles.sectioncontent} id={id}>
                <Typography variant="h3" className={styles.sectiontitle} >{title}</Typography>
                <Paper className={styles.contactmepaper}>
                    <form ref={form} className={styles.form} noValidate autoComplete="off" onSubmit={sendEmail}>
                        <TextField type="text" className={styles.textfield} label="Your Name/Company" name="from_name" />
                        <TextField type="email" className={styles.textfield} label="Your Email" name="from_email" />
                        <TextField type="text" className={styles.textfield} label="Your Message" name="message" multiline maxRows={6} />
                        <Button variant="contained" type="submit">Submit</Button>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Your information has been sent to Javier's email. Thanks you! See you ^^
                                </Alert>
                            </Snackbar>
                        </Stack>
                    </form>
                </Paper>
            </div>
        </div>
    )
}
