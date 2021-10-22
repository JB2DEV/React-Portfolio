import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,

    },
    appbartitle: {
        display: "none",
        color: theme.palette.primary.main,
        fontWeight: 700,
        margin: "0 auto",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
        },
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo: {
        height: "2.5rem",
        objectFit: 'contain',
        "&:hover": {
            cursor: "pointer"
        }
    },
    menu: {

        "& a": {
            color: theme.palette.secondary.main,
            fontSize: "1.6rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: theme.palette.primary.main,
            borderBottom: "3px solid #884EA0"
        },
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: theme.palette.primary.main,
            position: "absolute",
            right: 10
        }
    },
    abouticon: {
        color: "blue"
    },
    skillsicon: {
        color: "#ffcc00"
    },
    workicon: {
        color: "grey"
    },
    contacticon: {
        color: "red"
    },
    cancelicon: {
        color: theme.palette.primary.main,
        position: "absolute",
        top: 0,
        right: 10,

    },
    sidebar: {
        width: "40vw",
        "& h5": {
            margin: theme.spacing(10, 0, 0, 4),
            fontSize: "1.4rem",
            color: theme.palette.secondary.main,
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: theme.palette.primary.main,
            cursor: "pointer",

        },
        [theme.breakpoints.down("xs")]: {
            width: "65vw",
            "& h5": {
                fontSize: "1rem",
            },
        },
    },
    section: {
        minHeight: "100vh",
        [theme.breakpoints.down("sm")]: {
            minHeight: "70vh",

        }
    },
    sectiontitle: {
        textAlign: "center",
        paddingTop: theme.spacing(2)
    },
    sectiondark: {
        background: theme.palette.secondary.main,
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: "70vw",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            width: "auto"
        }
    },
    cardmedia: {
        width: "40vw",
        height: "60vw",
        borderRadius: "10px",
        margin: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            height: "230px",
            width: "300px",
            margin: theme.spacing(2),
        },

    },
    cardcontent: {
        width: "40vw",
        "& h2": {
            marginTop: theme.spacing(2),

        },
        "& h3": {
            marginTop: theme.spacing(2),
            color: theme.palette.primary.main,
            fontSize: "2rem",
            fontWeight: "700px",
            [theme.breakpoints.down("xs")]: {
                fontSize: "1rem"
            }
        },
        "& h4": {
            marginTop: theme.spacing(2),
            fontSize: "1.5rem",

            [theme.breakpoints.down("xs")]: {
                fontSize: "0.6rem"
            }
        },
        "& h6": {
            marginTop: theme.spacing(2),
            textAlign: "justify",
            fontSize: "1.2rem",
            [theme.breakpoints.down("xs")]: {
                display: "none"
            },
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        },

    },
    pdfbutton: {
        position: "absolute",
        bottom: "5rem",
        right: "4rem",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: "#fff"
        },
        "& a": {
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900
        },
        "& a:hover": {
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.down("xs")]: {
            width: "60px",
            height: "40px",
            fontSize: "0.6rem",
            bottom: "2rem",
            right: "1rem",
        },
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "1rem",
        },

    },
    timeline: {
        marginTop: theme.spacing(2),
        "& h6": {
            fontSize: "10px"
        }
    },
    timelinelogo: {
        width: "35px",
        [theme.breakpoints.down("xs")]: {
            width: "30px",
        }
    },
    stars: {
        [theme.breakpoints.down("xs")]: {
            margin: "0,40",
            size: 10
        }
    },
    grid: {
        marginTop: "60px",
    },
    workcard: {
        minHeight: 275,
        maxWidth: 345,
        margin: theme.spacing(3),

    },
    caratula: {
        height: 0,
        paddingTop: '56.25%',

    },
    textocaratula: {
        textAlign: "center",
        marginTop: theme.spacing(3),
    },
    contactmepaper: {

        backgroundColor: "#fff",
        borderRadius: "15px",
        marginTop: "20px",
        maxWidth: "80vw"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(2),
        border: "2px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "15px",
        "& button": {
            backgroundColor: "#fff",
            fontWeight: "900",
            marginTop: "40px",
            marginBottom: "30px"
        },
        "& button:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff"
        },
        [theme.breakpoints.down("xs")]: {
            "& button": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
            },
        },
        [theme.breakpoints.down("sm")]: {
            "& button": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
            },
        }

    },
    textfield: {
        paddingTop: theme.spacing(2),
        fontSize: "1.2rem",
        color: "black",

    },
    footer: {
        backgroundColor: theme.palette.primary.main,
        height: "auto",
        width: "auto",
    },
    footericons: {
        display: "flex",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),

        "& p": {
            fontSize: "1.3rem",
            fontWeight: 700
        },
        "& p.footericontext": {
            [theme.breakpoints.down("xs")]: {
                display: "none"
            },
        },
        "& a": {
            textDecoration: "none",
            color: "black"
        },
        "& a:hover": {
            textDecoration: "underline",
            color: "blue"
        }
    },


}));
