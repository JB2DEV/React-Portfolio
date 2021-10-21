import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,

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
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
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
        }
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
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
        "& h5": {
            margin: theme.spacing(10, 0, 0, 4),
            fontSize: "1.4rem",
            color: theme.palette.secondary.main,
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: theme.palette.primary.main,
            cursor: "pointer",

        }
    },
    section: {
        minHeight: "100vh",
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
    },
    cardmedia: {
        width: "40vw",
        height: "60vw",
        borderRadius: "10px",
        margin: theme.spacing(5),
        [theme.breakpoints.down("xs")]: {
            height: "60vw",
            width: "400px"
        }
    },
    cardcontent: {
        width: "40vw",
        marginTop: theme.spacing(2),
        "& h2": {
            marginTop: theme.spacing(2),
        },
        "& h3": {
            marginTop: theme.spacing(2),
        },
        "& h4": {
            marginTop: theme.spacing(2),
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
        "& p": {
            fontSize: "0.5rem"
        }

    },
    lookingforajoob: {
        marginTop: theme.spacing(2),
        fontSize: "2rem",
        color: "black",
        fontWeight: 700,
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.9rem",
        },
    },
    quote: {
        fontStyle: "italic",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
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
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "1rem",
        }
    },
    timeline: {
        margin: theme.spacing(4)
    },
    timelinelogo: {
        width: "35px",
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
        }

    },
    textfield: {
        paddingTop: theme.spacing(2),
        fontSize: "1.2rem",
        color: "black",

    },
    footer: {
        backgroundColor: theme.palette.primary.main,
        height: "100px",

    },
    footericons: {
        display: "flex",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: theme.spacing(2),
        "& p": {
            fontSize: "1.3rem",
            fontWeight: 700
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
