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
import withSorterState from "../../hocs/with-sorter-state/with-sorter-state";
import {fetchReviewList} from "../../store/api-actions";

const MainWrapped = withSorterState(Main);

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
    const {offers, currentCityOffers, currentOfferCardId, fetchReviewListAction} = this.props;
    const {loggedIn} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentCityOffers && currentCityOffers.length !== 0 ? <MainWrapped loggedInStatus={loggedIn}/> : <Redirect to="/no-offers" />}
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
            render={({}) => {
              const selectedOffer = offers.filter((item) => item.id === +currentOfferCardId);
              fetchReviewListAction(currentOfferCardId);

              return <PropertiesScreen offer={selectedOffer[0]} loggedInStatus={loggedIn}/>;
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
  currentOfferCardId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  fetchReviewListAction: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA, STATE}) => ({
  offers: DATA.offers,
  currentCityOffers: STATE.currentCityOffers,
  currentOfferCardId: STATE.currentOfferCardId
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviewListAction(id) {
    dispatch(fetchReviewList(id));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
