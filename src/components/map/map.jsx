import React, {Component} from "react";
import PropTypes from "prop-types";
import PropTypesSet from "../../prop-types-set";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import {ScreenMarker} from "../../const";

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
    const {offers, currentOfferCardId, screenMarker} = this.props;

    this.map.eachLayer((layer) => {
      if (layer.options.icon) {
        layer.remove();
      }
    });

    offers.forEach((offer) => {
      const offerCoordinates = [
        offer.location.latitude,
        offer.location.longitude,
      ];

      const icon = leaflet.icon({
        iconUrl: (screenMarker === ScreenMarker.MAIN && +currentOfferCardId === offer.id) || (screenMarker === ScreenMarker.PROPERTIES && offers[0].id === offer.id) ? `/img/pin-active.svg` : `/img/pin.svg`,
        iconSize: [30, 30]
      });

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
  offers: PropTypes.arrayOf(PropTypesSet.offer).isRequired,
  currentOfferCardId: PropTypes.string.isRequired,
  screenMarker: PropTypes.string.isRequired
};

const mapStateToProps = ({STATE}) => ({
  currentOfferCardId: STATE.currentOfferCardId
});

export {Map};
export default connect(mapStateToProps)(Map);
