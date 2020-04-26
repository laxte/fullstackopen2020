import React,  { useState , useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    console.log(newFilter)
  }

  return (
    <div>
      <Filtteri inputValue={filter} onChangeValue={handleFilterChange} />
      <ShowCountries countries={countries} filter={filter}/>
    </div>
  )
}

const ShowCountries = (props) => {
  if (props.countries.length === 0){
    return null
  }

  const fileteredCountries = props.countries.filter(country =>
    country.name.toLowerCase().includes(props.filter.toLowerCase()
    ))

  if (fileteredCountries.length === 1) {
    return (
      <CountryInfo country={fileteredCountries[0]} />
    )
  }
  else if (fileteredCountries.length < 10) {
    return (
      fileteredCountries.map(countryEntry => <CountryEntry key={countryEntry.name} name={countryEntry.name} />)
    )
  }
  else {
    return (
      <div>
        too many maches, specify another filter
      </div>
    )
  }
}

const CountryInfo = (props) => {
  console.log(props.country)
  return (
    <div>
      <h2>
        {props.country.name} {props.country.demonym}
      </h2>
      <div>capital: {props.country.capital}</div>
      <div>population: {props.country.population}</div>
      <h3>languages</h3>
      <Languages languages={props.country.languages} />
      <img src={props.country.flag} alt="flag" style={{ width: '200px' }} />
    </div>
  )
}

const Languages = (props) => {
  return (
    <div>
      <ul>
        {props.languages.map(language => <li>{language.name}</li>
        )}
      </ul>
    </div>
  )
}

const Filtteri = (props) => {
  return (
    <form>
      <div>
        find countries: <input value={props.inputValue}
          onChange={props.onChangeValue} />
      </div>
    </form>
  )
}

const CountryEntry = (props) => {
  return (
    <div>{props.name} </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
