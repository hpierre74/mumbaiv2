import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class MapContainer extends React.Component {
  render() {
    const position = [45.7680692, 4.8329078];
    const map = (
      <Map style={{ width: '100%', height: '400px' }} center={position} zoom={16}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup.<br />Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    );

    return map;
  }
}
