import { Grid, GridItem } from '@chakra-ui/react'
import Country from './Country'
import { useCountry } from './CountryProvider'
import { v4 } from "uuid";


export default function CountryList() {
   
  const { countries, searchResult } = useCountry()


  return (
    <Grid templateColumns='repeat(auto-fit, minmax(240px, 1fr))' gap={12} my={4}>

      {searchResult !== null ? searchResult.map(country =>
        <GridItem w='100%' key={v4()} >
          <Country
            imgUrl={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />

        </GridItem>
      ) : countries.map(country =>
        <GridItem w='100%' h="100%" key={v4()} >
          <Country
            imgUrl={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />

        </GridItem>
      )}
     

     


    </Grid>
  )
}