import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import { useStyles } from '../hooks/useStyles';
import profileImage from "../images/profile.jpeg";
import TypeWriterEffect from "react-typewriter-effect";
import pdf from "../data/JAC-CV.pdf";
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
                        <TypeWriterEffect variant="h4"
                            text="Hello World!"
                            textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "#884EA0" }}
                            startDelay={100}

                        />
                        <TypeWriterEffect variant="h4"
                            text="My name is Javier Álvarez and I am a Junior Developer"
                            textStyle={{ fontSize: "1.2rem", fontWeight: "500px", }}
                            startDelay={2000}

                        />
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
                            <Typography variant="h4" className={styles.lookingforajoob} component="h1">
                                I am looking for a job!
                            </Typography>
                            <Typography variant="h6" className={styles.quote} component="h2" color="textSecondary">
                                "--You don't have to be the best to start, but you need start to become the best--"
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