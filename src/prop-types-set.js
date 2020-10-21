import PropTypes from "prop-types";

export default {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bedroomsQuantity: PropTypes.number.isRequired,
    maxAdultsQuantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string).isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired
    })
  }),
  review: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    offerReviews: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      text: PropTypes.string.isRequired
    }))
  }))
};
