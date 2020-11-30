import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import FavoritesScreenOfferList from "../favorites-screen-offer-list/favorites-screen-offer-list";
import {cities} from "../../const";
import {getFavorites} from "../../store/selectors/selectors";

const FavoritesMain = ({favoriteOffers}) => {

  return favoriteOffers && favoriteOffers.length !== 0 ?
    (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {cities.map((city) => {
                const currentCityFavoritesOffers = favoriteOffers.filter((item) => item.city.name === city);
                return currentCityFavoritesOffers.length === 0 ?
                  null :
                  (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>

                      <FavoritesScreenOfferList offers={currentCityFavoritesOffers} />

                    </li>
                  );
              })}

            </ul>
          </section>
        </div>
      </main>
    ) :
    (
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
            </div>
          </section>
        </div>
      </main>
    );
};

FavoritesMain.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypesSet.offer).isRequired
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavorites(state)
});

export {FavoritesMain};
export default connect(mapStateToProps)(FavoritesMain);
