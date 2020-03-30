import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { theme } from './components/styles';
import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
