import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withCommentFormState = (Component) => {
  class WithCommentFormState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        commentText: ``
      };

      this.handleRatingFieldChange = this.handleRatingFieldChange.bind(this);
      this.handleCommentFieldChange = this.handleCommentFieldChange.bind(this);
      this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this);
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

    handleCommentFormSubmit(evt) {
      evt.preventDefault();

      const {id, onCommentFormSubmit} = this.props;

      onCommentFormSubmit(
          id,
          this.state.commentText,
          this.state.rating
      );

      this.setState({
        rating: ``,
        commentText: ``
      });
    }

    render() {
      return (
        <Component
          rating={this.state.rating}
          commentText={this.state.commentText}
          onRatingFieldChange={this.handleRatingFieldChange}
          onCommentFieldChange={this.handleCommentFieldChange}
          onCommentFormSubmit={this.handleCommentFormSubmit}
        />
      );
    }
  }

  WithCommentFormState.propTypes = {
    id: PropTypes.number.isRequired,
    onCommentFormSubmit: PropTypes.func.isRequired
  };

  return WithCommentFormState;
};

export default withCommentFormState;
