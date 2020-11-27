import React from "react";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import Main from "../main/main";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertiesScreen from "../properties-screen/properties-screen";
import PrivateRoute from "../private-route/private-route";
import withSorterState from "../../hocs/with-sorter-state/with-sorter-state";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";

const MainWrapped = withSorterState(Main);

const App = (props) => {
  const {authorizationStatus} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainWrapped />
        </Route>

        <Route exact path="/login">
          {authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to="/" /> : <LoginScreen />}
        </Route>

        <PrivateRoute
          exact
          path={`/favorites`}
          render={() => {
            return (
              <FavoritesScreen />
            );
          }}
        />

        <Route exact path="/offer/:id">
          <PropertiesScreen />;
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export {App};
export default connect(mapStateToProps)(App);
