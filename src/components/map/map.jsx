import React, {Component} from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = null;
  }

  componentDidMount() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(`map`, {
      center: [offers[0].city.location.latitude, offers[0].city.location.longitude],
      zoom: offers[0].city.location.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView([offers[0].city.location.latitude, offers[0].city.location.longitude], offers[0].city.location.zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.forEach((offer) => {
      const offerCoordinates = [
        offer.location.latitude,
        offer.location.longitude
      ];

      leaflet
        .marker(offerCoordinates, {icon})
        .addTo(this.map);
    });
  }

  componentDidUpdate() {
    const {offers} = this.props;

    this.map.eachLayer((layer) => {
      if (layer.options.icon) {
        layer.remove();
      }
    });

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((offer) => {
      const offerCoordinates = [
        offer.location.latitude,
        offer.location.longitude,
      ];

      leaflet
        .marker(offerCoordinates, {icon})
        .addTo(this.map);
    });

    this.map.setView([offers[0].city.location.latitude, offers[0].city.location.longitude], offers[0].city.location.zoom);
  }

  render() {
    return (
      <div
        id="map"
        style={{height: `100%`}}>
      </div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired
};

export default Map;
