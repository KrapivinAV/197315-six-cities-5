import React from "react";
// import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
// import PropertiesScreen from "../properties-screen/properties-screen";
import PrivateRoute from "../private-route/private-route";
import withSorterState from "../../hocs/with-sorter-state/with-sorter-state";
import {AppRoute, AuthorizationStatus} from "../../const";
import {fetchOffer, fetchNearOfferList, fetchReviewList} from "../../store/api-actions";
import {PropertiesScreen} from "../properties-screen/properties-screen";

const MainWrapped = withSorterState(Main);

const App = () => {
  // const {fetchOfferAction, fetchNearOfferListAction, fetchReviewListAction} = props;

  return (
    <BrowserRouter>
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
          // render={({match}) => {
          //   Promise.all([
          //     fetchOfferAction(match.params.id),
          //     fetchNearOfferListAction(match.params.id),
          //     fetchReviewListAction(match.params.id)
          //   ])
          //   .then(() => {
          //     return (
          //       <PropertiesScreen />
          //     );
          //   });
          // }}
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

App.propTypes = {
  // fetchOfferAction: PropTypes.func.isRequired,
  // fetchNearOfferListAction: PropTypes.func.isRequired,
  // fetchReviewListAction: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  fetchOfferAction(id) {
    dispatch(fetchOffer(id));
  },
  fetchNearOfferListAction(id) {
    dispatch(fetchNearOfferList(id));
  },
  fetchReviewListAction(id) {
    dispatch(fetchReviewList(id));
  }
});

export {App};
export default connect(null, mapDispatchToProps)(App);
