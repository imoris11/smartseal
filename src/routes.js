import React, { lazy, Suspense, Fragment } from 'react';
import Layout from './containers/Layout/layout';
import Home from './containers/Home';
import Loading from './components/loading';

import { Redirect, Route, Switch } from 'react-router-dom';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component || Fragment;
        const Layout = route.layout || Fragment;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                <Component {...props} />
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/About')),
  },
  {
    path: '/blog',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/Blog')),
  },
  {
    path: '/blog/:slug',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/BlogPost')),
  },
  {
    path: '/contact',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/Contact')),
  },
  {
    path: '/engineering',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/Engineering')),
  },
  {
    path: '/fashion',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/Fashion')),
  },
  {
    path: '/features',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/Features')),
  },
  {
    path: '/pharmaceutical',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/Pharmaceutical')),
  },
  {
    path: '/privacypolicy',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/Privacy-Policy')),
  },
  {
    path: '/product',
    exact: true,
    layout: '',
    component: lazy(() => import('./containers/Product')),
  },
  {
    path: '/termsandconditions',
    exact: true,
    layout: Layout,
    component: lazy(() => import('./containers/TermsAndConditions')),
  },
  {
    path: '/404',
    exact: true,
    layout: '',
    component: lazy(() => import('./containers/Not-found')),
  },
  {
    path: '*/*',
    exact: true,
    component: () => <Redirect to={'/404'} />,
  },
];

export default routes;
