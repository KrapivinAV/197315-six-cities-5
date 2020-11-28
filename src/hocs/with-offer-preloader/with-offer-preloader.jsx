import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchOffer, fetchNearOfferList, fetchReviewList} from "../../store/api-actions";

const withOfferPreloader = (props) => {
  const {Component, id, fetchOfferAction, fetchNearOfferListAction, fetchReviewListAction} = props;

  class WithOfferPreloader extends PureComponent {
    constructor() {
      super(props);

      this.state = {
        preloaderStatus: true
      };
    }

    componentDidMount() {

      Promise.all([
        fetchOfferAction(id),
        fetchNearOfferListAction(id),
        fetchReviewListAction(id)
      ])
      .then(() => {
        this.preloaderStatus = false;
      });
    }

    render() {
      return (
        <Component
          preloaderStatus={this.preloaderStatus}
        />
      );
    }
  }

  return WithOfferPreloader;
};

withOfferPreloader.propTypes = {
  fetchOfferAction: PropTypes.func.isRequired,
  fetchNearOfferListAction: PropTypes.func.isRequired,
  fetchReviewListAction: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => ({
  fetchOfferAction(id) {
    dispatch(fetchOffer(id));
  },
  fetchNearOfferListAction(id) {
    dispatch(fetchNearOfferList(id));
  },
  fetchReviewListAction(id) {
    dispatch(fetchReviewList(id));
  }
});

export {withOfferPreloader};
export default connect(null, mapDispatchToProps)(withOfferPreloader);
