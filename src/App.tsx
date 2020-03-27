import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
  return (
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
  );
};

export default App;
