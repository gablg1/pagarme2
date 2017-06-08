import React from 'react';
import { Router, Route } from 'react-router';

import SessionsNew from './pages/sessions/new';
import TransactionsIndex from './pages/transactions/index';
import CompaniesIndex from './pages/companies/index';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={SessionsNew} />
    <Route path="/login" component={SessionsNew} />
    <Route path="/transactions" component={TransactionsIndex} />
    <Route path="/company" component={CompaniesIndex} />
  </Router>
);

export default Routes;
