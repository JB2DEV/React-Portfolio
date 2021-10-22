import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from '../hooks/useStyles'
import { Link} from 'react-scroll'
import { BuildTwoTone, Cancel, ContactMailTwoTone, EmojiObjectsTwoTone, Info } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'



export const NavBar = () => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);

    const links = [
    {
        id: "about",
        text: "About me",
        icon: <Info fontSize="large" className={styles.abouticon}/>,

    },
    {
        id: "skills",
        text: "Skills",
        icon: <EmojiObjectsTwoTone fontSize="large" className={styles.skillsicon}/>,

    },
    {
        id: "work",
        text: "My work",
        icon: <BuildTwoTone fontSize="large" className={styles.workicon}/>,

    },
    {
        id: "contact",
        text: "Get in touch",
        icon: <ContactMailTwoTone fontSize="large" className={styles.contacticon}/>,

    },
]
    return (
        <>
            <AppBar position="sticky" className={styles.appBar}>
                <Toolbar className={styles.toolbar}>
                    <List className={styles.menu}>
                        {
                            links.map(({ id, text }, index) => (
                                <Link
                                    key={index}
                                    to={id}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    {text}
                                </Link>
                            ))
                        }
                    </List>
                    <span className={styles.appbartitle}>PORTFOLIO</span>
                    <IconButton className={styles.menubutton} onClick={() => setOpen(!open)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                {<IconButton className={styles.cancelicon} onClick={() => setOpen(false)}>
                    <Cancel></Cancel>
                </IconButton>}
                <Divider />
                {
                    links.map(({ id, text, icon }, index) => (
                        <Link
                            className={styles.sidebar}
                            key={index}
                            to={id}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={() => setOpen(false)}
                        >
                            <ListItem component="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                        </Link>
                    ))
                }
            </Drawer>
        </>
    )
}
