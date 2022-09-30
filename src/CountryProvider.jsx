import { createContext, useState, useEffect, useContext } from "react";

import axios from "axios";



const CountryContext = createContext()
export const useCountry = () => useContext(CountryContext)

 const localState = JSON.parse(localStorage.getItem("countrylist"));


export default function CountryProvider({ children }) {

  const [countries, setCountries] = useState(localState || [])

  const [searchResult, setSearchResult] = useState([])


  const [showHome, setShowHome] = useState(true)

  const searchCountries = (name) => {

    setSearchResult(countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()) ? country : null))
  }

  const filterByRegion = (region) => {
    countries && setSearchResult(countries.filter(country => country.region === region))
   
  }

  

  const clearSearch = () => {
    setSearchResult(null)
    // setShowHome(true)
  }


  useEffect(() => {
    if (!countries) return
    localStorage.setItem('countrylist', JSON.stringify(countries));
  }, [countries]);


  useEffect(() => {
   
    axios.get(`https://restcountries.com/v2/all`)
      .then(response => {
       
        const data = response.data


        setCountries(data)
      }

      )
  }, []);


  return (
    <CountryContext.Provider value={{ countries, searchCountries, searchResult, clearSearch, filterByRegion, setShowHome, showHome}}>
      {children}
    </CountryContext.Provider>
  )
}

