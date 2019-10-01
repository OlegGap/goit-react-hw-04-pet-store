import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
import * as routes from '../constants/routes';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import PetPage from './pages/Pet/Pet';
import PetsPage from './pages/Pets/Pets';
import NotFoundPage from './pages/Not-found/Not-found';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.ABOUT} component={AboutPage} />
        <Route exact path={routes.PETS} component={PetsPage} />
        <Route path={`${routes.PETS}/:articleId`} component={PetPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
