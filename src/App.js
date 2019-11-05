import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {signinPage} from './pages/SigninPage';
import {HomePage} from './pages/HomePage';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={signinPage}/>
        <Route exact path="/home" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
