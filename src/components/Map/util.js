import { Circle, Popup } from "react-leaflet";
import React from "react";
import numeral from "numeral";
import "./Map.css";

const casesTypeColors = {
  cases: {
    rgb: "rgb(0, 0, 255, 0.7)",
    multiplier: 800,
  },
  recovered: {
    rgb: "rgb(0, 255, 0, 0.7)",
    multiplier: 1200,
  },
  deaths: {
    rgb: "rgb(255, 0, 0, 0.7)",
    multiplier: 2000,
  },
};

export const showDataOnMap = (data, caseTypes = "cases") =>
  data.map((country, index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[caseTypes].rgb}
      fillColor={casesTypeColors[caseTypes].rgb}
      radius={
        Math.sqrt(country[caseTypes]) * casesTypeColors[caseTypes].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
