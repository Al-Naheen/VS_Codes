import React, { useEffect, useState } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import Infobox from './Infobox';
import Table from './Table';

function App() {
  const [ countries, setCountries ] = useState([])
  const [ country, setCountry ] = useState('Worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    // async--> send a request,wait for it, do something with info
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries) 
          setTableData(data)
        })
    }
    getCountriesData()
  }, [])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode)

    const url =
      countryCode === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // setInputCountry(countryCode);
        setCountryInfo(data);
        // setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        // setMapZoom(4);
      });
  };

// console.log('country info', countryInfo);

  return (
    // BEM naming convension
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              onChange={onCountryChange}
              variant="outlined"
              value={country}
            >

              <MenuItem value="Worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Infobox title='CoronaVirus Cases' cases={countryInfo.todayCases} total={countryInfo.cases}></Infobox>
          <Infobox title='Recovered' cases={countryInfo.todayRecovered} total={countryInfo.recovered}></Infobox>
          <Infobox title='Deaths' cases={countryInfo.todayDeaths} total={countryInfo.deaths}></Infobox>
        </div>
        {/* Map */}
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          <Table countries={tableData}></Table>
          <h3>Worldwide New Cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
