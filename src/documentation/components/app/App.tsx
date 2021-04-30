import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from '../sidebar/sidebar';
import ButtonPage from '../../documentation-pages/button-page/button-page';
import HomePage from '../../documentation-pages/home-page/home-page';
import Header from '../../../components/header/header';
import Layout from '../layout/layout';

const App: FC = () => {
  return (
    <>
      <Sidebar />
      <Layout>
        <Switch>
          <Header left='left' middle='middle' right='right' />
          <Route exact path='/button'>
            <ButtonPage />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default App;
