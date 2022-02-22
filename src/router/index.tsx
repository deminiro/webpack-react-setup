import { Route, Switch, Redirect } from 'react-router-dom';

import { AuthRoute } from './AuthRoute';
import { GuestRoute } from './GuestRoute';

import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { NotFound } from 'pages/notFound';

import { navigationPaths } from 'shared/routePath';
import { useSelector } from 'react-redux';
import { ReduxStore } from 'libs/redux/variables/storeTypes';

export function Router() {
  const isInitialized = useSelector(({ app }: ReduxStore) => app.isInitialized);

  return (
    isInitialized && (
      <Switch>
        <GuestRoute exact path={navigationPaths.login} component={Login} />
        <GuestRoute
          exact
          path={navigationPaths.notFound}
          component={NotFound}
        />
        <AuthRoute exact path={navigationPaths.home} component={Home} />
        <Route
          exact
          path='*'
          render={() => (
            <Redirect
              to={{
                pathname: navigationPaths.notFound,
              }}
            />
          )}
        />
      </Switch>
    )
  );
}
