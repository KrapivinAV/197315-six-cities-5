import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import OfferCard from "../offer-card/offer-card";
import {sorter} from "../../utils/offer-sorter";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      card: null,
      selectedSortType: `popular`
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
  }

  handleCardHover(evt) {
    this.setState({
      card: evt.currentTarget
    });
  }

  handleSortTypeChange(evt) {
    this.setState({
      selectedSortType: evt.target.value
    });
  }

  render() {
    const {offers} = this.props;
    const currentOffers = offers.slice();

    const sortedOffers = sorter(currentOffers, this.state.selectedSortType);

    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortedOffers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <select className="places__sorting-type" id="places-sorting" value={this.state.selectedSortType} onChange={this.handleSortTypeChange}>
                <option className="places__option" value="popular">Popular</option>
                <option className="places__option" value="to-high">Price: low to high</option>
                <option className="places__option" value="to-low">Price: high to low</option>
                <option className="places__option" value="top-rated">Top rated first</option>
              </select>
            </form>
            <div className="cities__places-list places__list tabs__content">

              {sortedOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  onCardHover={this.handleCardHover}
                />
              ))}

            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
};

export default OfferList;
