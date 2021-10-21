import { Typography } from '@material-ui/core';
import React from 'react'
import { useStyles } from '../hooks/useStyles'
import { Technologies } from './Technologies';

export const Skills = ({ title, dark, id }) => {
    const styles = useStyles();
    return (
        <div className={`${styles.section} ${dark && styles.sectiondark}`}>
            <div className={styles.sectioncontent} id={id}>
                <Typography className={styles.sectiontitle} variant="h3">{title}</Typography>
                <Technologies/>
            </div>
        </div>
    )
}
