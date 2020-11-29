import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertiesScreen from "../properties-screen/properties-screen";
import PrivateRoute from "../private-route/private-route";
import withSorterState from "../../hocs/with-sorter-state/with-sorter-state";
import browserHistory from "../../browser-history";
import {AppRoute, AuthorizationStatus} from "../../const";

const MainWrapped = withSorterState(Main);

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.MAIN}>
          <MainWrapped />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          authorizationValue={AuthorizationStatus.NO_AUTH}
          routeValue={AppRoute.MAIN}
          render={() => {
            return (
              <LoginScreen />
            );
          }}
        />

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          authorizationValue={AuthorizationStatus.AUTH}
          routeValue={AppRoute.LOGIN}
          render={() => {
            return (
              <FavoritesScreen />
            );
          }}
        />

        <Route
          exact
          path={AppRoute.PROPERTIES}
          render={({match}) => {

            return (
              <PropertiesScreen id={match.params.id}/>
            );
          }}
        />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
