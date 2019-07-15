// @flow
import * as React from 'react';
import makeInspectable from 'mobx-devtools-mst';
import Loadable from 'react-loadable';
import { Router } from 'react-router';
import { Provider as MobXProvider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import createStores from 'shared/stores';
import Layout from './common/Layout';

const history = createBrowserHistory();
const { app, domain } = createStores();

const LoadableDashboard = Loadable({
  loader: () => import('./dashboard'),
  loading: () => <div>Loading...</div>,
});

const LoadableFranchises = Loadable({
  loader: () => import('./franchises'),
  loading: () => <div>Loading...</div>,
});

const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    href: '/',
    content: LoadableDashboard,
  },
  {
    key: 'teams',
    label: 'Teams',
    href: '/teams',
    content: LoadableFranchises,
  },
  {
    key: 'players',
    label: 'Players',
    href: '/players',
    content: () => <div>This is teams</div>,
  },
  {
    key: 'seasons',
    label: 'Seasons',
    href: '/seasons',
    content: () => <div>This is seasons</div>,
  },
];

// ========================================================
// Dev Tools Setup
// ========================================================

if (process.env.NODE_ENV === 'development') makeInspectable(domain);

export default () => (
  <MobXProvider store={domain}>
    <Router history={history}>
      <Layout menuItems={menuItems} />
    </Router>
  </MobXProvider>
);
