import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import FavoritesScreenOfferList from "../favorites-screen-offer-list/favorites-screen-offer-list";
import Header from "../header/header";

const FavoritesScreen = ({offers}) => {
  const favoriteOffers = offers.filter((item) => item.isFavorite === true);

  return (
    <div className="page">

      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>

                <FavoritesScreenOfferList offers={favoriteOffers} />

              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={`/`} className="header__logo-link">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
};

export default FavoritesScreen;
