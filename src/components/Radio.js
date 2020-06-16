import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Radio extends Component {
  constructor() {
    super();
    this.state = {
      radioClick: "compareNames",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(type) {
    this.setState({ radioClick: type.target.value });
    this.props.sortBy(type.target.value);
  }

  componentDidMount() {
    this.props.sortBy(this.state.radioClick);
  }

  render() {
    return (
      <div className="radioButtons">
        <div className="left">
          <input
            type="radio"
            name="sortBy"
            value="compareNames"
            checked={this.state.radioClick === "compareNames"}
            onChange={this.onChange}
          />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className="right">
          <input
            type="radio"
            name="sortBy"
            value="compareDates"
            checked={this.state.radioClick === "compareDates"}
            onChange={this.onChange}
          />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );
  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func,
};

export default Radio;
