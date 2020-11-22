import React, {PureComponent} from "react";

const withSorterState = (Component) => {
  class WithSorterState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedSortType: `popular`
      };

      this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
    }

    handleSortTypeChange(evt) {
      this.setState({
        selectedSortType: evt.target.value
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          selectedSortType={this.state.selectedSortType}
          onSortTypeChange={this.handleSortTypeChange}
        />
      );
    }
  }

  return WithSorterState;
};

export default withSorterState;
