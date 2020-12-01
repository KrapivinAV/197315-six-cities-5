import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item";
import {REVIEW_FIRST} from "../../test-mocks";

describe(`Render ReviewsItem`, () => {
  it(`Render ReviewsItem`, () => {

    const tree = renderer
      .create(
          <ReviewsItem
            item={REVIEW_FIRST}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
