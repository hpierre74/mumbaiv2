import React from 'react';
import PropTypes from 'prop-types';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MapContainer = props => {
  const { geo, address } = props;
  const position = geo;
  if (!geo[0]) {
    return null;
  }

  return (
    <Map scrollWheelZoom={false} style={{ width: '100%', height: '400px' }} center={position} zoom={16}>
      <TileLayer
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <p>{address}</p>
        </Popup>
      </Marker>
    </Map>
  );
};

MapContainer.propTypes = {
  geo: PropTypes.arrayOf(PropTypes.number).isRequired,
  address: PropTypes.string.isRequired,
};

export default MapContainer;
