import React, { useState } from 'react'
import CountryList from './CountryList'

function Search({ countries }) {
  const [searchText, setSearchText] = useState('')
  const [filteredCountry, setFilteredCountry] = useState(countries)

  const handleChange = (value) => {
    setSearchText(value)
    filterData(value)
  }

  const filterData = () => {
    const filterData = countries.filter((item) => {
      return item.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredCountry(filterData)
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
        {filteredCountry.map((country, i) =>
          searchText === '' ? null : <CountryList country={country} key={i} />
        )}
      </div>
    </>
  )
}

export default Search
