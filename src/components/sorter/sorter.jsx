import React from "react";
import PropTypes from "prop-types";

const Sorter = ({selectedSortType, onSortTypeChange}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <select className="places__sorting-type" id="places-sorting" value={selectedSortType} onChange={onSortTypeChange}>
        <option className="places__option" value="popular">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
    </form>
  );
};

Sorter.propTypes = {
  selectedSortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired
};

export default Sorter;
