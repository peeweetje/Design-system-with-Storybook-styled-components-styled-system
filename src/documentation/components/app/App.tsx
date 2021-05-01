import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from '../sidebar/sidebar';
import ButtonPage from '../../documentation-pages/button-page/button-page';
import HomePage from '../../documentation-pages/home-page/home-page';
import HeaderPage from '../../documentation-pages/header-page/header-page';
import Layout from '../layout/layout';

const App: FC = () => {
  return (
    <>
      <Sidebar />
      <Layout>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/button'>
            <ButtonPage />
          </Route>
          <Route exact path='/header'>
            <HeaderPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default App;
