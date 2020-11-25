import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import {connect} from "react-redux";
import {changeCity, getCurrentCityOffers} from "../../store/actions";
import {cities} from "../../const";

const CitiesList = ({offers, currentCity, onCityLinkClick}) => {

  const handleCityLinkClick = (evt) => {
    evt.preventDefault();

    if (evt.currentTarget.id !== currentCity) {
      onCityLinkClick(evt.currentTarget.id, offers);
    }
  };


  return (
    <ul className="locations__list tabs__list">

      {cities.map((city) => (
        <li key={city} className="locations__item">
          <Link
            to="/"
            className={
              currentCity === city ?
                `locations__item-link tabs__item tabs__item--active` :
                `locations__item-link tabs__item`
            }
            id={city}
            onClick={handleCityLinkClick}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}

    </ul>
  );
};

CitiesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, STATE}) => ({
  offers: DATA.offers,
  currentCity: STATE.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  onCityLinkClick(id, offers) {
    dispatch(changeCity(id));
    dispatch(getCurrentCityOffers(id, offers));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
