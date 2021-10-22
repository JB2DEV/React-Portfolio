import { Container } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import { useStyles } from '../hooks/useStyles'


export const Footer = () => {
    const styles = useStyles();

    return (
        <div className={styles.footer}>
            <footer>
                <div className={styles.footericons}>
                    <Container >
                        <a href="https://github.com/JB2DEV" className="footerprofileicon"><GitHub fontSize="large" /> </a>
                        <p className="footericontext">Javier Alvarez Caceres</p>
                    </Container>
                    <Container>
                        <a href="mailto: javier.alca.2000@gmail.com"><Email fontSize="large" /></a>
                        <p className="footericontext"><a href="mailto: javier.alca.2000@gmail.com">javier.alca.2000@gmail.com</a></p>
                    </Container>
                    <Container>
                        <a href="https://www.linkedin.com/in/jb2dev/"><LinkedIn fontSize="large" /></a>
                        <p className="footericontext"><a href="https://www.linkedin.com/in/jb2dev/">JB2DEV</a></p>
                    </Container>
                </div>
            </footer>
        </div>
    )
}
