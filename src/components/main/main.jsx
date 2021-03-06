import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import MainScreenOfferList from "../main-screen-offer-list/main-screen-offer-list";
import Map from "../map/map";
import Sorter from "../sorter/sorter";
import CitiesList from "../cities-list/cities-list";
import Header from "../header/header";
import {sorter} from "../../utils/offer-sorter";
import {getCurrentCity, getCurrentCityOffers} from "../../store/selectors/selectors";
import {ScreenMarker} from "../../const";

const Main = ({currentCity, currentCityOffers, selectedSortType, onSortTypeChange}) => {
  const mainStyle = currentCityOffers && currentCityOffers.length !== 0 ?
    `page__main page__main--index` :
    `page__main page__main--index page__main--index-empty`;

  const currentOffers = currentCityOffers.slice();
  const sortedOffers = sorter(currentOffers, selectedSortType);

  return (
    <div className="page page--gray page--main">

      <Header mainScreenStatus={true} />

      <main className={mainStyle}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <CitiesList />

          </section>
        </div>
        <div className="cities">

          {currentCityOffers && currentCityOffers.length !== 0 ?
            (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{sortedOffers.length} places to stay in {currentCity}</b>

                  <Sorter
                    selectedSortType={selectedSortType}
                    onSortTypeChange={onSortTypeChange}
                  />

                  <MainScreenOfferList offers={sortedOffers} />

                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">

                    <Map offers={sortedOffers} screenMarker={ScreenMarker.MAIN}/>

                  </section>
                </div>
              </div>
            ) :
            (
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
            )
          }
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  selectedSortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  currentCityOffers: getCurrentCityOffers(state)
});

export {Main};
export default connect(mapStateToProps)(Main);
