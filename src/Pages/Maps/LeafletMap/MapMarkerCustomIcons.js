import React, { Component } from "react"
import Leaflet from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

Leaflet.Icon.Default.imagePath = 'assets/images/logo-sm.svg'

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

export default class MapMarkerCustomIcons extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }
  options = {
    iconSize: [45, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <MapContainer
        center={position}
        zoom={this.state.zoom}
        style={{ height: "300px" }}
        options={this.options}

      >
        <TileLayer
          attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  }
}
