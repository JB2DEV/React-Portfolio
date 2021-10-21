import React from 'react'
import { Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'


export const StarRating = ({ stars }) => {

    return (
        <div>
            <Box component="fieldset" borderColor="transparent">
                <Rating name="read-only" readOnly value={stars} max={3}></Rating>
            </Box>
        </div>
    )

}
