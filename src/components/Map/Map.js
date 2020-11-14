import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import { showDataOnMap } from "./util";

function Map({ countries, caseTypes, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, caseTypes)}
      </LeafletMap>
    </div>
  );
}

export default Map;
