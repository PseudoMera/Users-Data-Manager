import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {signinPage} from './pages/SigninPage';
import {homePage} from './pages/HomePage';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={signinPage}/>
        <Route exact path="/home" component={homePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
