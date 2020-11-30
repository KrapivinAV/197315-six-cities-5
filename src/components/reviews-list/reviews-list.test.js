import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {REVIEW_FIRST, REVIEW_SECOND} from "../../test-mocks";

describe(`Render ReviewsList`, () => {
  it(`Render ReviewsList`, () => {

    const tree = renderer
      .create(
          <ReviewsList
            offerReviews={[REVIEW_FIRST, REVIEW_SECOND]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
