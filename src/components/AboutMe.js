import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import { useStyles } from '../hooks/useStyles';
import profileImage from "../images/profile.jpeg";
import pdf from "../data/CV_JavierAlvarez_2022.pdf";
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
                                I'm a 21-year-old boy who lives in Spain, Barcelona and
                                I have recently obtained the Certificate of
                                Higher Education of Multiplatform Applications Development.
                                Nowadays, I'm currently developing microservices with Spring and SpringBoot 
                                in the GFT Backend team, working for Caser as a client.
                                Also, I would like to dedicate my professional career in
                                mobile software development mainly.
                            </Typography>

                        </Delayed>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={styles.pdfbutton}>
                            <a href={pdf} download >
                                CV
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