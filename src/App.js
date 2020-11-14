import React, { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import "./App.css";
import { getCountriesData, getCountryInfo } from "./api/index";

import InfoBox from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";
import Table from "./components/Table/Table";
import LineGraph from "./components/Graph/LineGraph";
import { formatNumber, formatDate } from "./format";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [caseTypes, setCaseTypes] = useState("cases");
  const [updateDate, setUpdateDate] = useState("");

  useEffect(() => {
    const fetchCountryInfo = async () => {
      let countryCode = "worldwide";
      const response = await getCountryInfo(countryCode);
      setCountryInfo(response);
      setUpdateDate(response.updated);
    };
    fetchCountryInfo();
  }, []);

  useEffect(() => {
    const fetchCountriesData = async () => {
      setCountries(await getCountriesData());
      const tableList = await getCountriesData();
      const sortedList = tableList.sort((a, b) => {
        return a.cases > b.cases ? -1 : 1;
      });
      setMapCountries(tableList);
      setTableData(sortedList);
    };
    fetchCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    getCountryInfo(countryCode).then((data) => {
      setCountryInfo(data);
      if (countryCode !== "worldwide") {
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      } else {
        setMapCenter([34.80746, -40.4796]);
        setMapZoom(2);
      }
    });
  };

  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <div>
            <Typography variant="h1" className="app_title">
              COVID-19 TRACKER
            </Typography>
            <Typography className="app_updated" color="textSecondary">
              Updated on: {formatDate(updateDate)}
            </Typography>
          </div>
          <FormControl>
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((item, i) => (
                <MenuItem key={i} value={item.value}>
                  {item.country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app_stats">
          <InfoBox
            isBlue
            onClick={(e) => setCaseTypes("cases")}
            active1={caseTypes === "cases"}
            title="Coronavirus Cases"
            cases={formatNumber(countryInfo.todayCases)}
            total={formatNumber(countryInfo.cases)}
          ></InfoBox>
          <InfoBox
            isGreen
            onClick={(e) => setCaseTypes("recovered")}
            title="Recovered"
            active2={caseTypes === "recovered"}
            cases={formatNumber(countryInfo.todayRecovered)}
            total={formatNumber(countryInfo.recovered)}
          ></InfoBox>
          <InfoBox
            isRed
            onClick={(e) => setCaseTypes("deaths")}
            active3={caseTypes === "deaths"}
            title="Deaths"
            cases={formatNumber(countryInfo.todayDeaths)}
            total={formatNumber(countryInfo.deaths)}
          ></InfoBox>
        </div>

        <Map
          caseTypes={caseTypes}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        ></Map>
      </div>

      <Card className="app_right">
        <CardContent>
          <Table countries={tableData}></Table>
          <LineGraph caseTypes={caseTypes}></LineGraph>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
