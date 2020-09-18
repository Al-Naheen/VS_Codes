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

function App() {
  const [ countries, setCountries ] = useState([])
  const [ country, setCountry ] = useState('Worldwide')

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
        })
    }
    getCountriesData()
  }, [])

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    // console.log(countryCode);

    setCountry(countryCode)
  }

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
          <Infobox title='coronaVirus Cases' cases='555' total='55M'></Infobox>
          <Infobox title='coronaVirus Cases' cases='555' total='55M'></Infobox>
          <Infobox title='coronaVirus Cases' cases='555' total='55M'></Infobox>
        </div>
      {/* Map */}
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
        {/* Table */}
        <h3>Worldwide New Cases</h3>
        {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
