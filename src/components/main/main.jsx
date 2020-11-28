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

const Main = ({currentCity, currentCityOffers, selectedSortType, onSortTypeChange}) => {
  const currentOffers = currentCityOffers.slice();
  const sortedOffers = sorter(currentOffers, selectedSortType);

  return (
    <div className="page page--gray page--main">

      <Header mainScreenStatus={true} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <CitiesList />

          </section>
        </div>
        <div className="cities">
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

                <Map offers={sortedOffers}/>

              </section>
            </div>
          </div>
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
