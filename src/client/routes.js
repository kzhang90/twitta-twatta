import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/pages/IndexPage';
import TagPage from './components/pages/TagPage';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';

// a path to see all of the details of a tag
const routes = (
    <Route path="/" component={Layout}>
      <IndexRoute component={IndexPage} />
      <Route path="tag/:id" component={TagPage} />
      <Route path="signup" component={SignupPage} />
      <Route path="login" component={LoginPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
);

export default routes;
