import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { navigationPaths } from 'shared/routePath';

import { ReduxStore } from 'libs/redux/variables/storeTypes';

export function GuestRoute({ component: Component }: RouteProps) {
  const isAuth = useSelector(({ app }: ReduxStore) => app.isAuth);

  return (
    <Route
      render={props =>
        isAuth ? (
          <Redirect
            to={{
              pathname: navigationPaths.home,
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
