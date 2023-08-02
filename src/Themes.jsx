import {createTheme} from '@mui/material/styles';


 /* Shared Breakpoint Values between themes */
 const breakpointValues = {
  values: {
    xs: 0,
    tiny: 430,
    sm: 600,
    md: 1030,
    lg: 1200,
    // kind of hack-ey way to break experience
    experiencebr: 1430,
    xl: 1536,
  },
}

/* nestedBreakpoints theme is used to create breakpoints within our main themes */
const nestedBreakpointsTheme = createTheme(
  {breakpoints: breakpointValues}
)

 /* Shared Typography between themes */
const typographyStyles = {
    // Main name
    h2: {
      fontSize: 55,
    },
    // Box headers
    h3: {
      fontSize: 30,
    },
    // Buttons
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    // "Hello There"
    p1: {
      fontSize: 50,
      fontWeight: 10,
      [nestedBreakpointsTheme.breakpoints.down("sm")]: {
        fontSize: 30,
      },
    },
    // Greeting text
    p2: {
      fontSize: 30,
      fontWeight: 10,
      [nestedBreakpointsTheme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    // Normal Text
    p3: {
      fontSize: 20,
      [nestedBreakpointsTheme.breakpoints.down("tiny")]: {
        fontSize: 16,
      },
    },
    // Tiny Text
    p4: {
      fontSize: 16,
      [nestedBreakpointsTheme.breakpoints.down("tiny")]: {
        fontSize: 12,
      },
    },
}




/* dark theme */
const darkTheme = {

  
  palette: {
    // New revised colors
     
    NavbarBackground: { // Handles Navbar and footer background
      main: '#1f1f1f', //dark grey
      contrastText: '#fff', //clean white
    },
    NavbarButtons: { // Handles Navbar and footer buttons
      main: '#fff', //clean white
      contrastText: '#121212', //black
    },
    NavbarFunctionalIcons: { //Handles settings and collpsedNB
      main: '#fbe49b', //yellow
    },

    // old colors
    primary: {
      // navbar color
      // dark grey
      main: '#1f1f1',
      // clean white
      contrastText: '#fff',
    },
    secondary: {
      // cream white
      main: '#BB86FC',
      // deep purple
      contrastText: '#1F1F1F',
    },
    tertiary: {
      // yellow
      main: '#444444',
      // clean white
      contrastText: '#fff',
    },
    background: {
      default: '#121212',
    },
    quaternary: {
      // turqoise
      main: '#1F1F1F',
      contrastText: '#fff',
    },
    nbButtons: {
      // bright purple
      main: '#BB86FC',
      // black
      contrastText: '#1F1F1F',
    },
    nbButtonsALT: {
      // bright purple
      main: '#BB86FC',
      // black
      contrastText: '#1F1F1F',
    },
    nbhighlight: {
      // highlight colors for settings & collapsenb
      main: '#BB86FC',
    },
    welcomeBoxLinks: {
      main: '#BB86FC',
    },
  },
  typography: typographyStyles,
  breakpoints: breakpointValues,
  /* Override Drawer Background for CollapsedNB */
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#1f1f1f', //dark grey,
        },
      },
    },
  },
};
// https://www.color-hex.com/color-palette/1022622

/* light theme */
const lightTheme = {
  palette: {
    // New revised colors
    
    NavbarBackground: { // Handles Navbar and footer background
      main: '#42394b',//less deep purple
      contrastText: '#fff', //clean white
    },
    NavbarButtons: { // Handles Navbar and footer buttons
      main: '#fff', //clean white
      contrastText: '#42394b',//less deep purple
    },
    NavbarFunctionalIcons: { //Handles settings and collpsedNB
      main: '#fbe49b', //yellow
    },

    // old colors
    primary: {
      // less deep purple
      main: '#42394b',
      // clean white
      contrastText: '#fff',
    },
    secondary: {
      // cream white
      main: '#faf4ec',
      // deep purple
      contrastText: '#31293b',
    },
    tertiary: {
      // yellow
      main: '#fbe49b',
      // black
      contrastText: 'black',
    },
    background: {
      default: '#faf4ec',
    },
    quaternary: {
      // turqoise
      main: '#3a6860',
      contrastText: '#fff',
    },
    nbButtons: {
      // clean white
      main: '#fff',
      // deep purple
      contrastText: '#31293b',
    },
    nbButtonsALT: {
      // black
      main: 'black',
      // deep purple
      contrastText: '#31293b',
    },
    nbhighlight: {
      // highlight colors for settings & collapsenb
      // yellow
      main: '#fbe49b',
    },
    welcomeBoxLinks: {
      main: '#42394b',
    },
  },
  typography: typographyStyles,
  breakpoints: breakpointValues,
  /* Override Drawer Background for CollapsedNB */
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#42394b',
        },
      },
    },
  },
};

export {lightTheme};
export {darkTheme};
