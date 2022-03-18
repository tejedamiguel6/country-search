import React from 'react'

function CountryList({ country, i }) {
  return (
    <section>
      <ul className='card country-list' data-testid='countryList'>
        <li key={country} className='pa-10 pl-20'>
          {country}
        </li>
      </ul>
    </section>
  )
}

export default CountryList
