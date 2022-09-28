import { Grid, GridItem } from '@chakra-ui/react'
import Country from './Country'
import { useCountry } from './CountryProvider'
import { v4 } from "uuid";
import { useState, useEffect } from 'react';
import axios from "axios";


export default function CountryList() {
  const { countries, searchResult, showHome } = useCountry()


  return (
    <Grid templateColumns='repeat(auto-fit, minmax(240px, 1fr))' gap={12} my={4}>

      {
        
        showHome && countries.map(country =>
        <GridItem w='100%' key={country.name} >
          <Country
            imgUrl={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />

        </GridItem>
      )} 
      
      { searchResult && searchResult.map(country =>
        <GridItem w='100%' h="100%" key={country.name} >
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