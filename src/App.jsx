/* App.jsx holds the main application */

import React, {lazy, useEffect, Suspense} from 'react';

import {Route, Routes} from 'react-router-dom';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import { Box, CssBaseline} from '@mui/material';

import {darkTheme, lightTheme} from './Themes';
import {ThemeStateContext} from './Contexts';
import {CustomNavbar} from './Components';
import {setLocalstorageItemAsync} from './helperFunctions';
import {CustomFooter} from './Components';

export const allLinks = {
  github: 'https://github.com/adamhammond22',
  linkedin: 'https://www.linkedin.com/in/adamhammond22/',
  email: 'abhammond22@gmail.com',
  website: 'https://adamhammond22.github.io'
}


/* Lazyload the Home and Projects imports, why load both costly components
  when only one is ever displayed at a time? */
const Home = lazy(() => import('./routes/Home'));
const Projects = lazy(() => import('./routes/Projects'));

/**
 * App Component, routes all other components.
 * @return {object} JSX
 */
function App() {

  /* ========== States ========== */

  /* Page Theme State */
  const [themeState, setThemeState] = React.useState(() => {
    // Synchronous operation to get the theme state
    const saved = localStorage.getItem('themeState');
    if (saved === 'dark') {
      return 'dark';
    } else {
      // if nothing was saved, it defaults to light theme
      return 'light';
    }
  });

  /* When themestate is changed, force a reload & save it asynchronously */
  useEffect(() => {
    setLocalstorageItemAsync('themeState', themeState)
    .catch(error => console.error('Error setting the themeState:', error));
  }, [themeState]);

  /* ========== Helpers ========== */

  /* Helper "sanity" function when changing the theme state */
  const changeThemeState = (newState) => {
    if (themeState !== newState) {
      setThemeState(newState);
    }
  };


  /* ========== Rendering ========== */


  /* Set current theme according to theme state */
  const currentTheme = themeState === 'dark'? createTheme(darkTheme) :
    createTheme(lightTheme);

  return (
    /* Wrapper that handles the theme */
    <ThemeProvider theme = {currentTheme}>

      {/* This component changes the root background color */}
      <CssBaseline />

      {/* Wrapper that passes down the themeState to compoents that need it */}
      <ThemeStateContext.Provider value = {{themeState, changeThemeState}}>

        {/* Suspense Wrapper displays the fallback component if any lazyloaded components are not loaded */}
        <Suspense fallback = {null}>

          <Box name="PageContentContainer">
          {/* Navbar component */}
          <CustomNavbar currentPage={'Home'}/>

          {/* Routes for different page contents */}
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/Projects" element={<Projects />} />
          </Routes>
          <CustomFooter />

          </Box>

        </Suspense>

      </ThemeStateContext.Provider>

    </ThemeProvider>
  );
};

export default App;
