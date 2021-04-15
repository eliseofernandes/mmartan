import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Search from '../pages/Search';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
