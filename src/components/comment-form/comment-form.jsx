import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const ratingVariants = [
  {
    id: `5-stars`,
    title: `perfect`,
    value: 5
  },
  {
    id: `4-stars`,
    title: `good`,
    value: 4
  },
  {
    id: `3-stars`,
    title: `not bad`,
    value: 3
  },
  {
    id: `2-stars`,
    title: `badly`,
    value: 2
  },
  {
    id: `1-stars`,
    title: `terribly`,
    value: 1
  },
];

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      commentText: null
    };

    this.handleRatingFieldChange = this.handleRatingFieldChange.bind(this);
    this.handleCommentFieldChange = this.handleCommentFieldChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleRatingFieldChange(evt) {
    this.setState({
      rating: +evt.target.value
    });
  }

  handleCommentFieldChange(evt) {
    this.setState({
      commentText: evt.target.value
    });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    const {onCommentFormSubmit} = this.props;

    this.setState({
      rating: null,
      commentText: null
    });

    onCommentFormSubmit();
  }

  render() {
    const submitButtonStatus = this.state.rating && this.state.commentText ? `` : `disabled`;

    return (
      <form onSubmit={this.handleFormSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          {ratingVariants.map((item) => (
            <React.Fragment key={item.title}>
              <input
                onChange={this.handleRatingFieldChange}
                className="form__rating-input visually-hidden"
                name="rating"
                value={item.value}
                id={item.id}
                type="radio"
                checked={this.state.rating === item.value ? true : false}
              />
              <label htmlFor={item.id} className="reviews__rating-label form__rating-label" title={item.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}

        </div>
        <textarea
          onChange={this.handleCommentFieldChange}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={this.state.commentText || ``}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={submitButtonStatus}>Submit</button>
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  onCommentFormSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
