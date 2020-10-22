import React from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertiesScreen from "../properties-screen/properties-screen";

const ID_INDEX = 7;

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers}/>
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offer={offers}/>
        </Route>
        <Route
          exact
          path="/offer/:id"
          render={({location}) => {
            const id = location.pathname.slice(ID_INDEX);
            const selectedOffer = offers.filter((item) => item.id === id);
            const selectedReview = reviews.filter((item) => item.id === id);

            return <PropertiesScreen offer={selectedOffer[0]} review={selectedReview}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  reviews: PropTypes.arrayOf(PropTypesSet.review).isRequired
};

export default App;
