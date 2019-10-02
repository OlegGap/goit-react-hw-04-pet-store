import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
import * as routes from '../constants/routes';
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() => import('./pages/Home/Home'));
const AboutPage = lazy(() => import('./pages/About/About'));
const PetPage = lazy(() => import('./pages/Pet/Pet'));
const PetsPage = lazy(() => import('./pages/Pets/Pets'));
const NotFoundPage = lazy(() => import('./pages/Not-found/Not-found'));

function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route exact path={routes.PETS} component={PetsPage} />
          <Route path={`${routes.PETS}/:articleId`} component={PetPage} />
          <Route path={routes.ERROR} component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
