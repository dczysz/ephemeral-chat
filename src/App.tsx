import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { GlobalStyle, darkTheme, lightTheme } from './components/styles';
import Join from './components/Join';
import Chat from './components/Chat';
import ThemeToggleContext from './store/ThemeToggleContext';
import { ThemeProvider } from 'styled-components';

const localStorageTheme = window.localStorage.getItem('theme');
const defaultThemeMode =
  localStorageTheme === 'light' || localStorageTheme === 'dark'
    ? localStorageTheme
    : 'dark';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultThemeMode);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Helmet>
        <title>ephemeral chat</title>
      </Helmet>

      <ThemeToggleContext.Provider value={{ themeMode: theme, toggleTheme }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Join} />
            <Route path="/chat/:room" component={Chat} />
            <Route>
              {/* Default to '/' if no match */}
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};

export default App;
