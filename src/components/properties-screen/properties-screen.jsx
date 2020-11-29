import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from "../header/header";
import OfferProperties from "../offer-properties/offer-properties";
import Preloader from "../preloader/preloader";
import {getOfferPropertiesLoadStatus} from "../../store/selectors/selectors";
import {changeOfferPropertiesLoadStatus} from "../../store/actions";
import {fetchOffer, fetchNearOfferList, fetchReviewList} from "../../store/api-actions";

class PropertiesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id, changeOfferPropertiesLoadStatusAction, fetchOfferAction, fetchNearOfferListAction, fetchReviewListAction} = this.props;

    Promise.all([
      fetchOfferAction(id),
      fetchNearOfferListAction(id),
      fetchReviewListAction(id)
    ])
    .then(() => {
      changeOfferPropertiesLoadStatusAction(true);
    });
  }

  componentDidUpdate() {
    const {id, changeOfferPropertiesLoadStatusAction, fetchOfferAction, fetchNearOfferListAction, fetchReviewListAction} = this.props;

    Promise.all([
      fetchOfferAction(id),
      fetchNearOfferListAction(id),
      fetchReviewListAction(id)
    ])
    .then(() => {
      changeOfferPropertiesLoadStatusAction(true);
    });
  }

  componentWillUnmount() {
    const {changeOfferPropertiesLoadStatusAction} = this.props;

    changeOfferPropertiesLoadStatusAction(false);
  }

  render() {
    const {offerPropertiesLoadStatus} = this.props;

    return (
      <div className="page">

        <Header />

        {
          offerPropertiesLoadStatus ?
            <OfferProperties /> :
            <Preloader />
        }

      </div>
    );
  }
}

PropertiesScreen.propTypes = {
  id: PropTypes.string.isRequired,
  offerPropertiesLoadStatus: PropTypes.bool.isRequired,
  changeOfferPropertiesLoadStatusAction: PropTypes.func.isRequired,
  fetchOfferAction: PropTypes.func.isRequired,
  fetchNearOfferListAction: PropTypes.func.isRequired,
  fetchReviewListAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offerPropertiesLoadStatus: getOfferPropertiesLoadStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeOfferPropertiesLoadStatusAction(status) {
    dispatch(changeOfferPropertiesLoadStatus(status));
  },
  fetchOfferAction(id) {
    return dispatch(fetchOffer(id));
  },
  fetchNearOfferListAction(id) {
    return dispatch(fetchNearOfferList(id));
  },
  fetchReviewListAction(id) {
    return dispatch(fetchReviewList(id));
  }
});

export {PropertiesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PropertiesScreen);
