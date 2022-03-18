import React from 'react'
import './App.css'
import CountryList from './Components/CountryList'
import Search from './Components/Search'
import { response } from './response'
import 'h8k-components'

const title = 'Country Filter'
function App() {
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <section className='w-30 justify-content-center layout-column mt-30 mx-auto'>
        <Search countries={response} />
        <CountryList />
      </section>
    </div>
  )
}

export default App

// things i could have done better
//  I didnt need to pass a prop to countryList
// in search component i should have named item to country
