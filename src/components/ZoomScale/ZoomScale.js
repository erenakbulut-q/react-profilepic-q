import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

import stylesheet from "./ZoomScale.scss";

const MIN = "MIN";
const MAX = "MAX";

class ZoomScale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limitReached: MIN
    };
  }

  onChange(event) {
    const value = Number(event.target.value).toFixed(2);
    const minValue = Number(this.props.min).toFixed(2);
    const maxValue = Number(this.props.max).toFixed(2);
    let limitReached = false;

    if (value === minValue) limitReached = MIN;
    if (value === maxValue) limitReached = MAX;

    this.setState({ limitReached });

    this.props.onChange.call(this, event);
  }

  render() {
    const zoomMinCssClasses = [stylesheet["zoom-scale__min"], stylesheet["zoom-scale__icon"]];
    const zoomMaxCssClasses = [stylesheet["zoom-scale__max"], stylesheet["zoom-scale__icon"]];
    console.log(this.props)
    if (this.state.limitReached === MIN)
      zoomMinCssClasses.push(stylesheet["zoom-scale__icon--disabled"]);

    if (this.state.limitReached === MAX)
      zoomMaxCssClasses.push(stylesheet["zoom-scale__icon--disabled"]);

    return (
      <div style={{display: "flex"}} className={stylesheet["zoom-scale"]}>
        <img style={{margin: 5}} src="https://cdn.qubitro.com/portal/icon_chart_zoom_out.svg" height="20" width="20" name="trash" size={20} />
        {this.props.slider}
        {/* <input
          type="range"
          className={stylesheet["zoom-scale__handler"]}
          max={Number(this.props.max).toFixed(2)}
          min={Number(this.props.min).toFixed(2)}
          step={Number(this.props.step).toFixed(2)}
          value={Number(this.props.value).toFixed(2)}
          onChange={this.onChange.bind(this)}
          style={{margin: 8}}
        /> */}
        <img style={{margin: 5}} src="https://cdn.qubitro.com/portal/icon_chart_zoom_in.svg" height="20" width="20" name="trash" size={20} />
      </div>
    );
  }
}

ZoomScale.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

ZoomScale.defaultProps = {
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.5,
  onChange: () => { }
};

export default ZoomScale;
