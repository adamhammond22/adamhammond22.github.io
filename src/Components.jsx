import React, {useContext} from 'react';
// import Drawer from '@mui/material/Drawer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import MenuItem from '@mui/material/MenuItem';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import {ThemeStateContext} from './Contexts';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Link as RouterLink} from 'react-router-dom';
import {Link as MuiLink} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const resumeLink = 'AdamHammondResumeNov22-4.pdf';

const githubLink = 'https://github.com/adamhammond22';
const linkedInLink = 'https://www.linkedin.com/in/adamhammond22/';



/**
 * Navbar Drawer creator
 * @param {props} props for current page
 * @return {object} JSX
 */
function CustomNavbar(props) {
  /* Acquire themestate from parent's context */
  const {themeState, changeThemeState} = useContext(ThemeStateContext);

  /* State to track if collapsed navbar is open */
  const [CollapsedNBOpen, setCollapsedNBOpen] = React.useState(false);

  /* Handles a change in collapsed NB, setting it to usable boolean */
  const handleChangeCollapsed = (bool) => {
    if (CollapsedNBOpen) {
      setCollapsedNBOpen(false);
    } else {
      setCollapsedNBOpen(true);
    }
  };

  /* State to track anchor of contact */
  const [contactAnchor, setContactAnchor] = React.useState(null);

  const contactOpen = Boolean(contactAnchor);

  /* Handles opening and closing of  Contact */
  const handleContactClick = (event) => {
    setContactAnchor(event.currentTarget);
  };
  const handleContactClose = () => {
    setContactAnchor(null);
  };

  /* State to track anchor of settings */
  const [settingsAnchor, setsettingsAnchor] = React.useState(null);

  const settingsOpen = Boolean(settingsAnchor);

  /* Handles opening and closing settings */
  const handleSettingsClick = (event) => {
    setsettingsAnchor(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setsettingsAnchor(null);
  };

  /* Handles theme change */
  const handleDarkModeChange = () => {
    if (themeState === 'dark') {
      changeThemeState('light');
    } else {
      changeThemeState('dark');
    }
  };

  /* Return all menu buttons of navbar*/
  const menuButtons = () => {
    return (
      <Box>
        <RouterLink to='/'>
          <Button
            sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
            color = 'NavbarButtons'
            variant = 'contained'
            startIcon={<HomeIcon />}
            name = {'Home button'}
            key = 'Home'>
            <Typography variant = "h6">
              Home
            </Typography>
          </Button>
        </RouterLink>
        <RouterLink to='/Projects'>
          <Button
            sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
            color = 'NavbarButtons'
            variant = 'contained'
            startIcon={<WorkHistoryIcon />}
            name = {'Projects button'}
            key = 'Projects'>
            <Typography variant = "h6">
              Projects
            </Typography>
          </Button>
        </RouterLink>
        <MuiLink href= {resumeLink} target="_blank">
          <Button
            sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
            color = 'NavbarButtons'
            variant = 'contained'
            startIcon={<ContactPageIcon />}
            name = {'Resume button'}
            key = 'Resume'>
            <Typography variant = "h6">
              Resume
            </Typography>
          </Button>
        </MuiLink>
        <Button
          onClick = {handleContactClick}
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'NavbarButtons'
          variant = 'contained'
          startIcon={<QuestionAnswerIcon />}
          name = {'Contact button'}
          key = 'Contact'>
          <Typography variant = "h6">
            Contact
          </Typography>
        </Button>
        {/* Contact Menu */}
        <Menu
          anchorEl = {contactAnchor}
          open = {contactOpen}
          onClose = {handleContactClose}
          sx = {{minWidth:400}}>
            <Typography>abhammond22@gmail.com</Typography>
        </Menu>
      </Box>
    );
  };
  
  /* Actual Return of navbar */
  return (
    <Box sx={{flexGrow: 1}}>
      {/* Collapsed Navbar */}
      <Drawer
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx = {{xs: 'block', md: 'none', minWidth: 100}}
        label = 'Main Navbar'
        anchor = 'left'
        name = 'left navbar'
        open = {CollapsedNBOpen}
        onClose = {handleChangeCollapsed}
        variant = 'temporary'
        PaperProps={{sx: {width: 160}}}>
        <IconButton />
        {menuButtons()}
      </Drawer>
      {/* Top Navbar */}
      <AppBar position="static"
        color = 'NavbarBackground' name = 'top navbar'>
        <Toolbar>
          {/* Collapsed Options */}
          <IconButton sx =
            {{display: {xs: 'flex', md: 'none', padding: 0},
              fontSize: 40, height: 60, width: 60}}
            name = 'navbar options' color = 'NavbarFunctionalIcons' size = 'large'
            onClick = {handleChangeCollapsed}>
            <MenuIcon sx = {{height: 40, width: 40}} />
          </IconButton>
          {/* Typography box */}
          <Box sx = {{display: 'flex', flexGrow: 1,
            justifyContent: 'left'}}name = 'typography box'>
            <Typography component="div" sx={{fontSize: {xs: 30, sm: 55},
              display: 'flex'}}>
              Adam Hammond
            </Typography>
          </Box>
          {/* Button Box */}
          <Box sx = {{flexGrow: 2, justifyContent: 'flex-end',
            display: {xs: 'none', md: 'flex'}}} name = 'button box'>
            {/* Buttons Box*/}
            {menuButtons()}
          </Box>
          {/* Settings Box*/}
          <Box sx = {{flexShrink: 1, mr: 2,
            width: 0, justifyContent: 'flex-end'}}
          name = 'settings box'>
            <IconButton onClick = {handleSettingsClick}
              name = 'settings button'>
              <SettingsIcon color = 'NavbarFunctionalIcons'/>
            </IconButton>
            <Menu
              anchorEl = {settingsAnchor}
              open = {settingsOpen}
              onClose = {handleSettingsClose}>
              <MenuItem>
                <FormGroup>
                  <FormControlLabel control={<Switch
                    checked = {themeState === 'dark'}
                    onChange = {handleDarkModeChange}/>} label="Dark Mode" />
                </FormGroup>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

/**
 * Custom Footer creator
 * @return {object} JSX
 */
function CustomFooter() {
  return (
    <Box sx = {{display: 'flex', backgroundColor: 'NavbarBackground.main'}}
      color = 'NavbarBackground.contrastText' name = 'footer'
      alignItems = 'center' justifyContent='center'>
      <Typography variant = 'p2'>
        Adam Hammond
      </Typography>
      <Box sx = {{width: 10}} />
      <IconButton>
        <MuiLink href= {linkedInLink} target="_blank">
          <LinkedInIcon color = 'NavbarButtons'
            sx = {{height: 30, width: 30}}/>
        </MuiLink>
      </IconButton>
      <Box sx = {{width: 10}} />
      <IconButton>
        <MuiLink href= {githubLink} target="_blank">
          <GitHubIcon color = 'NavbarButtons'
            sx = {{height: 30, width: 30}}/>
        </MuiLink>
      </IconButton>
    </Box>
  );
};

/**
 * Routing Navbar creator
 * @return {object} JSX
 */
function routingNavbar() {
  return (
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Projects">Projects</RouterLink>
    </div>
  );
};

export {routingNavbar};
export {CustomNavbar};
export {CustomFooter};

