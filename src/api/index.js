import axios from "axios";

export const getCountriesData = async () => {
  const url = "https://disease.sh/v3/covid-19/countries";

  try {
    const { data } = await axios.get(url);
    const modifiedCountry = data.map((item) => ({
      country: item.country,
      value: item.countryInfo.iso2,
      cases: item.cases,
      deaths: item.deaths,
      recovered: item.recovered,
      countryInfo: item.countryInfo,
    }));
    return modifiedCountry;
  } catch (error) {
    console.log(error);
  }
};

export const getCountryInfo = async (countryCode) => {
  const url =
    countryCode === "worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHistoricalData = async () => {
  const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=120";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
