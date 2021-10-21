import { Container } from '@material-ui/core';
import { Email, Person, LinkedIn } from '@material-ui/icons';
import React from 'react'
import { useStyles } from '../hooks/useStyles'


export const Footer = () => {
    const styles = useStyles();
    return (
        <div className={styles.footer}>
            <footer>
                <div className={styles.footericons}>
                    <Container >
                        <Person fontSize="large" />
                        <p>Javier Alvarez Caceres</p>
                    </Container>
                    <Container>
                        <a href="mailto: javier.alca.2000@gmail.com"><Email fontSize="large" /></a>
                        <p><a href="mailto: javier.alca.2000@gmail.com">javier.alca.2000@gmail.com</a></p>
                    </Container>
                    <Container>
                        <a href="https://www.linkedin.com/in/jb2dev/"><LinkedIn fontSize="large" /></a>
                        <p><a href="https://www.linkedin.com/in/jb2dev/">JB2DEV</a></p>
                    </Container>
                </div>
            </footer>
        </div>
    )
}
