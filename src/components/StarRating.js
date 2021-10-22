import React from 'react'
import { Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { useStyles } from '../hooks/useStyles'


export const StarRating = ({ stars }) => {
    const styles = useStyles();
    return (
        <div className={styles.stars}>
            <Box component="fieldset" borderColor="transparent">
                <Rating name="read-only" readOnly value={stars} max={3}></Rating>
            </Box>
        </div>
    )

}
