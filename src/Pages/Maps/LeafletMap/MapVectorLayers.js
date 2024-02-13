import React, { Component } from "react"
import Leaflet from "leaflet"
import {
  MapContainer,
  TileLayer,
  Circle,
  Polygon,
  Marker,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const polygon = [
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]

export default class MapVectorLayers extends Component {
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
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon color="#038edc" positions={polygon} fillColor="#038edc" />
        <Circle center={[51.508, -0.11]} radius={500} fillColor="#34c38f" color="#34c38f" />
        <Marker position={position} />
      </MapContainer>
    )
  }
}
