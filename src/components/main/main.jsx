import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import MainScreenOfferList from "../main-screen-offer-list/main-screen-offer-list";
import Map from "../map/map";
import Sorter from "../sorter/sorter";
import {sorter} from "../../utils/offer-sorter";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedSortType: `popular`
    };

    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
  }

  handleSortTypeChange(evt) {
    this.setState({
      selectedSortType: evt.target.value
    });
  }

  render() {
    const {offers, loggedInStatus} = this.props;
    const currentOffers = offers.slice();

    const sortedOffers = sorter(currentOffers, this.state.selectedSortType);

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={loggedInStatus ? `/favorites` : `/login`} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{loggedInStatus ? `Oliver.conner@gmail.com` : `Sign in`}</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item tabs__item--active">
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in Amsterdam</b>

                <Sorter
                  selectedSortType={this.state.selectedSortType}
                  onSortTypeChange={this.handleSortTypeChange}
                />

                <MainScreenOfferList offers={sortedOffers} />

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">

                  <Map offers={offers} />

                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  loggedInStatus: PropTypes.bool.isRequired,
};

export default Main;
