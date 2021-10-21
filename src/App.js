
import { NavBar } from './components/NavBar';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { MyWork } from './components/MyWork';
import { Contact } from './components/Contact';
import { useStyles } from './hooks/useStyles';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { Footer } from './components/Footer';

const theme = createTheme({
  palette: {
    primary: { main: "#884EA0" },
    secondary: { main: "#333" }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
});

function App() {
  const classNames = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classNames.root}>
        <NavBar />
        <AboutMe id="about" title="About me" dark={true} />
        <Skills id="skills" title="My Skills" dark={false} />
        <MyWork id="work" title="My work" dark={true} />
        <Contact id="contact" title="Contact me" dark={false} />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}


export default App;
