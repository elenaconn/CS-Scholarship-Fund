import React, { Component } from "react";

export  class DemoMapTooltip extends Component {
  render() {
    let mountain = this.props.mountain;
    return mountain ? (
      <div className="resortCard">
        <p>Ten Highest Peaks of the Oregon Cascades<br />
        <b>#{mountain.id}: {mountain.name}</b><br />
        {mountain.elevation} ft.</p>
        <b>#{mountain.id}: {mountain.name}</b><br />

      </div>
    ) : (
      ""
    );
  }
}

export  class CityMapTooltip extends Component {
  render() {
    let city = this.props.city;
    return city ? (
      <div className="resortCard">
        <p>CS Schorlarship Fund</p>
        <p><b>#{city._id}: {city.city}</b></p>
        <p>Donors: {city.donationscount}</p>
      </div>
    ) : (
      ""
    );
  }
}