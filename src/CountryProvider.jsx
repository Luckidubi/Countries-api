import { createContext, useState, useEffect, useContext } from "react";
import { v4 } from "uuid";
import axios from "axios";


const CountryContext = createContext()
export const useCountry = () => useContext(CountryContext)

const localState = JSON.parse(localStorage.getItem("countries"));


export default function CountryProvider({ children }) {

  const [countries, setCountries] = useState(localState || [])

  const [searchResult, setSearchResult] = useState([])

  
   const searchCountries = (name) => {
     
    setSearchResult(countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()) ? country : null))
   }
  
  console.log(searchResult)

  const clearSearch = () => {
    setSearchResult(null)
     // setCountries(countries)
  }

  const addCountries = (data) => setCountries(prev => [
    ...prev, {
      data
    }
  ])

  useEffect(() => {
    localStorage.setItem('countries', JSON.stringify(countries));
  }, [countries]);


  useEffect(() => {

    axios.get(`https://restcountries.com/v2/all`)
      .then(response => {
        console.log(response.data)
        const data = response.data


        setCountries(data)
      }

      )
  }, []);


  return (
    <CountryContext.Provider value={{ countries, addCountries, searchCountries, searchResult, clearSearch }}>
      {children}
    </CountryContext.Provider>
  )
}

// id: v4(),
// {
//   name, population, region, capital, topLevelDomain, alpha3Code, subregion, borders, nativeName, languages, currencies,
//     flag
// }

