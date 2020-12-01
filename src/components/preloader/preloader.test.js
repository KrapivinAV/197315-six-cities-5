import React from "react";
import renderer from "react-test-renderer";
import Preloader from "./preloader";

describe(`Render Preloader`, () => {
  it(`Render Preloader`, () => {

    const tree = renderer
      .create(
          <Preloader />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
