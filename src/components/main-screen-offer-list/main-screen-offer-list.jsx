import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import OfferList from "../offer-list/offer-list";
import {OfferListStyle, OfferCardStyleSet} from "../../const";

class MainScreenOfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      card: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(evt) {
    this.setState({
      card: evt.currentTarget
    });
  }

  render() {
    const {offers} = this.props;

    return (

      <OfferList
        offers={offers}
        offerListStyle={OfferListStyle.MAIN_SCREEN}
        offerCardStyleSet={OfferCardStyleSet.MAIN_SCREEN}
        onCardHover={this.handleCardHover}
      />

    );
  }
}

MainScreenOfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
};

export default MainScreenOfferList;
