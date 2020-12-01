import React from "react";
import renderer from "react-test-renderer";
import CommentForm from "./comment-form";

const RATING = 4;
const COMMENT_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
const noop = () => {};

describe(`Render CommentForm`, () => {
  it(`Render CommentForm`, () => {

    const tree = renderer
      .create(
          <CommentForm
            rating={RATING}
            commentText={COMMENT_TEXT}
            onRatingFieldChange={noop}
            onCommentFieldChange={noop}
            onCommentFormSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
