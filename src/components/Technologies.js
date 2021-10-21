import { Typography } from '@material-ui/core'
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import React from 'react'
import { skills } from '../data/skillsData'
import { useStyles } from '../hooks/useStyles'
import { StarRating } from './StarRating'


export const Technologies = () => {

    const styles = useStyles();
    return (
        <div>
            <Timeline align="alternate" className={styles.timeline}>
                {
                    skills.sort(function(a,b){
                        return b.stars - a.stars;
                    }),
                    skills.map(({ src, title, stars }, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent>
                                <Typography variant="h6" component="h1" color="textSecondary">
                                    {title}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <img className={styles.timelinelogo} src={src} alt={title}></img>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <StarRating stars={stars} />
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    )
}
