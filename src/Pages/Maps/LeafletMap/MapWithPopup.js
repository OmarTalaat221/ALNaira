import React, { Component } from "react"
import Leaflet from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon } from "react-leaflet"
import "leaflet/dist/leaflet.css"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

const circle = [51.508, -0.11]

const polygon = [
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]

export default class SimpleMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <MapContainer
        center={position}
        zoom={this.state.zoom}
        style={{ height: "300px" }}
        marker={[51.5, -0.09]}
      >
        <TileLayer
          attribution={'&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          id='mapbox/streets-v11'
          tileSize={512}
          zoomOffset={-1}
        />
        <Marker position={position}>
          <Popup>Hello World!</Popup>
        </Marker>
        <Polygon color="#038edc" positions={polygon} fillColor="#038edc" />
        <Circle center={circle} radius={500} fillColor="#f46a6a" color="#f46a6a" />
      </MapContainer>
    )
  }
}
