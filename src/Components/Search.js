import React, { useState } from 'react'
import CountryList from './CountryList'

function Search({ countries }) {
  const [searchText, setSearchtext] = useState('')
  const [filteredCountry, setFilteredCountry] = useState(countries)

  const filterdData = () => {
    const filteredData = countries.filter((country) => {
      return country.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredCountry(filteredData)
  }

  const handleChange = (value) => {
    setSearchtext(value)
    filterdData(value)
  }

  return (
    <>
      <input
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
        type='text'
        data-testid='filterInput'
        className='large'
        placeholder='Enter Country Name'
      />
      <div>
        {filteredCountry.map((country, i) => {
          return searchText === '' ? null : <CountryList country={country} />
        })}
      </div>
    </>
  )
}

export default Search
