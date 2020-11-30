import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";

const CURRENT_CITY = `Paris`;

describe(`Render CitiesList`, () => {
  it(`Render CitiesList`, () => {
    const tree = renderer
      .create(
          <CitiesList
            currentCity={CURRENT_CITY}
            onCityLinkClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
