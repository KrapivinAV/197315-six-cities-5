import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import {connect} from "react-redux";
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

    this.handleLoggedIn = this.handleLoggedIn.bind(this);
  }

  handleLoggedIn() {
    this.setState({
      loggedIn: true
    });
  }

  render() {
    const {offers, currentCityOffers, reviews} = this.props;
    const {loggedIn} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentCityOffers && currentCityOffers.length !== 0 ? <Main currentCityOffers={currentCityOffers} loggedInStatus={loggedIn}/> : <Redirect to="/no-offers" />}
          </Route>
          <Route exact path="/no-offers">
            <MainEmpty loggedInStatus={loggedIn} />
          </Route>
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/" /> : <LoginScreen onLoggedIn={this.handleLoggedIn}/>}
          </Route>
          <Route exact path="/favorites">
            {loggedIn ? <FavoritesScreen offers={offers} /> : <Redirect to="/login" />}
          </Route>
          <Route
            exact
            path="/offer/:id"
            render={({location}) => {
              const id = location.pathname.slice(ID_INDEX);
              const selectedOffer = currentCityOffers.filter((item) => item.id === id);
              const selectedReview = reviews.filter((item) => item.id === id);

              return <PropertiesScreen offer={selectedOffer[0]} offers={currentCityOffers} review={selectedReview} loggedInStatus={loggedIn}/>;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  currentCityOffers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  reviews: PropTypes.arrayOf(PropTypesSet.review).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentCityOffers: state.currentCityOffers,
  reviews: state.reviews
});

export {App};
export default connect(mapStateToProps)(App);
