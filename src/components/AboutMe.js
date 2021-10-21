import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import { useStyles } from '../hooks/useStyles';
import profileImage from "../images/profile.jpeg";
import pdf from "../data/CV_JavierAlvarez_2021.pdf";
import Delayed from '../utils/Delayed';


export const AboutMe = ({ title, dark, id }) => {
    const styles = useStyles();
    return (
        <div className={`${styles.section} ${dark && styles.sectiondark}`}>
            <div className={styles.sectioncontent} id={id}>
                <Typography className={styles.sectiontitle} variant="h3">{title}</Typography>
                <Card className={styles.card}>
                    <CardMedia image={profileImage} className={styles.cardmedia} />
                    <CardContent className={styles.cardcontent}>
                        <Typography variant="h3">
                            Hello World!
                        </Typography>
                        <Delayed waitBeforeShow={5000}>
                            <Typography variant="h4">
                                My name is Javier Álvarez and I am a Junior Developer
                            </Typography>
                        </Delayed>
                        <Delayed waitBeforeShow={10000}>
                            <Typography variant="h6" color="textSecondary">
                                I am a 21-year-old boy who lives in Spain, Barcelona and
                                I have recently obtained the Certificate of
                                Higher Education of Multiplatform Applications Development.
                                I would like to dedicate my professional career in
                                mobile software development mainly but I am open
                                to work in other stacks like FrontEnd developer,
                                Backend Developer or FullStack developer.
                            </Typography>

                        </Delayed>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={styles.pdfbutton}>
                            <a href={pdf} download >
                                Download CV
                            </a>

                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}


/*


*/