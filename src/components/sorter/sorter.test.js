import React from "react";
import renderer from "react-test-renderer";
import Sorter from "./sorter";

const SELECTED_SORT_TYPE = `popular`;
const noop = () => {};

describe(`Render Sorter`, () => {
  it(`Render Sorter`, () => {

    const tree = renderer
      .create(
          <Sorter
            selectedSortType={SELECTED_SORT_TYPE}
            onSortTypeChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
