import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import PropertiesScreenOfferList from "../properties-screen-offer-list/properties-screen-offer-list";
import Header from "../header/header";
import withCommentFormState from "../../hocs/with-comment-form-state/with-comment-form-state";
import {offerTypes} from "../../const";
import {connect} from "react-redux";
import {addNewComment} from "../../store/actions";

const NEAR_OFFERS_MAX_QUANTITY = 3;

const CommentFormWrapped = withCommentFormState(CommentForm);

class PropertiesScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this);
  }

  handleCommentFormSubmit(rating, commentText) {
    const {offer, addNewCommentAction} = this.props;

    addNewCommentAction(offer.id, rating, commentText);
  }

  render() {
    const {offer, offers, reviews, loggedInStatus} = this.props;
    const {title, isPremium, isFavorite, type, rating, price, images, bedrooms, maxAdults, goods, host, description} = offer;

    const nearOffers = offers.slice(0, NEAR_OFFERS_MAX_QUANTITY);

    const naturalRating = `${Math.round(rating) * 20}%`;

    const premiumType = isPremium ?
      (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      ) :
      null;

    const favoriteButtonStyle = isFavorite ?
      `property__bookmark-button property__bookmark-button--active button` :
      `property__bookmark-button button`;

    return (
      <div className="page">

        <Header/>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {images.map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))}

              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                {premiumType}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={favoriteButtonStyle} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: naturalRating}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating.toFixed(1)}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offerTypes[type]}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    {goods.map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>
                    ))}

                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

                  <ReviewsList offerReviews={reviews}/>

                  {loggedInStatus ? <CommentFormWrapped onCommentFormSubmit={this.handleCommentFormSubmit}/> : null}

                </section>
              </div>
            </div>
            <section className="property__map map">

              <Map />

            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <PropertiesScreenOfferList offers={nearOffers} />

            </section>
          </div>
        </main>
      </div>
    );
  }
}

PropertiesScreen.propTypes = {
  offer: PropTypesSet.offer.isRequired,
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  reviews: PropTypes.arrayOf(PropTypesSet.review).isRequired,
  loggedInStatus: PropTypes.bool.isRequired,
  addNewCommentAction: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
  reviews: DATA.reviews
});

const mapDispatchToProps = (dispatch) => ({
  addNewCommentAction(id, rating, commentText) {
    dispatch(addNewComment(id, rating, commentText));
  },
});

export {PropertiesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PropertiesScreen);
