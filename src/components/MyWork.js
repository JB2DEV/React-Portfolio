import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import React from 'react'
import { projects } from '../data/projects';
import { useStyles } from '../hooks/useStyles'

export const MyWork = ({ title, dark, id }) => {
    const styles = useStyles();

    return (
        <div className={`${styles.section} ${dark && styles.sectiondark}`}>
            <div className={styles.sectioncontent} id={id}>
                <Typography variant="h3" className={styles.sectiontitle}>{title}</Typography>
                <Grid container className={styles.grid}>
                    {
                        projects.map(({ title, image, link }, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={styles.workcard}>
                                    <CardMedia image={image} className={styles.caratula}/>
                                    <CardContent className={styles.textocaratula}>
                                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}
