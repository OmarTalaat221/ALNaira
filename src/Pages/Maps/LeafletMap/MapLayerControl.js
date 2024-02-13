import React, { Component } from "react"
import Leaflet from "leaflet"
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const { BaseLayer, Overlay } = LayersControl
export default class MapLayerControl extends Component {
  state = {
    lat: 39.73,
    lng: -104.99,
    zoom: 10,
  }
  state1 = {
    lat: 39.77,
    lng: -0.09,
    zoom: 13,
  }
  state2 = {
    lat: 39.61,
    lng: -105.02,
    zoom: 13,
  }
  state3 = {
    lat: 39.74,
    lng: -104.99,
    zoom: 13,
  }
  state4 = {
    lat: 39.73,
    lng: -104.8,
    zoom: 13,
  }

  render() {
    const center = [this.state.lat, this.state.lng]
    const center1 = [this.state1.lat, this.state1.lng]
    const center2 = [this.state2.lat, this.state2.lng]
    const center3 = [this.state3.lat, this.state3.lng]
    const center4 = [this.state4.lat, this.state4.lng]

    return (
      <MapContainer
        center={center}
        zoom={this.state.zoom}
        style={{ height: "300px" }}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay name="Marker with popup" checked>
            <Marker position={center1}>
              <Popup>This is Golden, CO</Popup>
            </Marker>
            <Marker position={center2}>
              <Popup>This is Littleton, CO.</Popup>
            </Marker>
            <Marker position={center3}>
              <Popup>This is Denver, CO.</Popup>
            </Marker>
            <Marker position={center4}>
              <Popup>This is Aurora, CO</Popup>
            </Marker>

          </Overlay>

        </LayersControl>
        <Marker position={[39.77, -105.23]}>
          <Popup>This is Golden, CO</Popup>
        </Marker>
      </MapContainer>
    )
  }
}

