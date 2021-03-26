import React, {useState, useEffect} from 'react';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import Table from './Components/Table'
import './App.css';
import InfoBox from './Components/InfoBox';
import Map from './Components/Map';
import { sortData } from './utils';
import LineGraph from './Components/LineGraph';
function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('WorldWide');
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData]  = useState([])
  //https://disease.sh/v3/covid-19/countries
  useEffect(() => {
    const getCountries = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(response =>response.json())
        .then(data => {
          const sortedData = sortData(data)
          setTableData(sortedData)
          const fetchedCountries = data.map(country => ({
              name: country.country,
              value:country.countryInfo.iso2
            }))
            setCountries(fetchedCountries)

        })
        .catch(error=>console.log(error.message))
    }
    getCountries()
    return ()=>getCountries
  }, [])
  useEffect(() => {
    const getAllData = async () => {
      await fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => setCountryInfo(data))
        .catch(error => console.log(error.message))
    }
    getAllData()
    return ()=>getAllData
  }, [])
  const onCountryChange = async (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)
    const url =
      countryCode === 'WorldWide' ?
      'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    //https://disease.sh/v3/covid-19/countries/[countrycode]
    //https://disease.sh/v3/covid-19/countries/all
    await fetch(url)
      .then(response => response.json())
      .then(data =>setCountryInfo(data))
       .catch(error=>console.log(error.message))
    
  }
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
        <h1>Covid 19Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            onChange = {onCountryChange}
            variant="outlined" value={country}>
            <MenuItem value="WorldWide">WorldWide</MenuItem>
            {
              countries&&countries.map(({name, value}, index) => (
                <MenuItem key={index} value={value}>{ name}</MenuItem>
              ))
            }
        </Select>
      </FormControl>
      </div>
      <div className="app__stats">
          <InfoBox
            title="Corona Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases} />
          <InfoBox
            title="Recovered Cases"
            cases={countryInfo.todayRecovered }
            total={countryInfo.recovered} />
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths} />
      </div>
      <Map/>

      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData} />
          <h3>WorldNewCases</h3>
          <LineGraph/>
        </CardContent>
      </Card>
      
    </div>
  
      );
}

export default App;
