import React from "react";
import PropTypes from "prop-types";

const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 300;

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

const CommentForm = ({rating, commentText, onRatingFieldChange, onCommentFieldChange, onCommentFormSubmit}) => {
  const submitButtonStatus = rating && commentText ? `` : `disabled`;

  return (
    <form
      onSubmit={onCommentFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {ratingVariants.map((item) => (
          <React.Fragment key={item.title}>
            <input
              onChange={onRatingFieldChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={item.id}
              type="radio"
              checked={rating === item.value ? true : false}
            />
            <label
              htmlFor={item.id}
              className="reviews__rating-label form__rating-label"
              title={item.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}

      </div>
      <textarea
        onChange={onCommentFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={COMMENT_MIN_LENGTH}
        maxLength={COMMENT_MAX_LENGTH}
        value={commentText || ``}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitButtonStatus}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  commentText: PropTypes.string.isRequired,
  onRatingFieldChange: PropTypes.func.isRequired,
  onCommentFieldChange: PropTypes.func.isRequired,
  onCommentFormSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
