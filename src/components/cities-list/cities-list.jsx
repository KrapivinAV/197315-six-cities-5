import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {cities} from "../../const";

const CitiesList = ({currentCity, onCityLinkClick}) => {

  return (
    <ul className="locations__list tabs__list">

      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={
              currentCity === city ?
                `locations__item-link tabs__item tabs__item--active` :
                `locations__item-link tabs__item`
            }
            id={city}
            onClick={onCityLinkClick}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}

    </ul>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  onCityLinkClick(evt) {
    dispatch(ActionCreator.changeCity(evt.currentTarget.id));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
