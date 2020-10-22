import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import Main from "../main/main";
import MainEmpty from "../main-empty/main-empty";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertiesScreen from "../properties-screen/properties-screen";

const ID_INDEX = 7;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render() {
    const {offers, reviews} = this.props;
    const {loggedIn} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {offers && offers.length !== 0 ? <Main offers={offers} /> : <Redirect to="/no-offers" />}
          </Route>
          <Route exact path="/no-offers">
            <MainEmpty />
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/favorites">
            {loggedIn ? <FavoritesScreen offer={offers} /> : <Redirect to="/login" />}
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
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  reviews: PropTypes.arrayOf(PropTypesSet.review).isRequired
};

export default App;
