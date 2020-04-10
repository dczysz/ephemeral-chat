import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { GlobalStyle, darkTheme, lightTheme } from './components/styles';
import Join from './components/Join';
import Chat from './components/Chat';
import ThemeToggleContext from './store/ThemeToggleContext';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />

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
    </>
  );
};

export default App;
