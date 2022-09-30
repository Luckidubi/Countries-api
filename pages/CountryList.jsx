import { Grid, GridItem } from '@chakra-ui/react'
import Country from '/src/components/Country'
import { useCountry } from '/src/CountryProvider'
import Header from '/src/components/Header'
import { Container } from '@chakra-ui/react'
import SearchFilter from '/src/components/SearchFilter'





export default function CountryList() {
  const { countries, searchResult, showHome } = useCountry()


  if (!countries) {
    return (
      <div>
    No Country found
    </div>
           )
  }

  return (
  <>
    <Header/>
    <Container maxW="1440px" h="100vh">
    <SearchFilter/>
    <Grid templateColumns='repeat(auto-fit, minmax(240px, 1fr))' templateRows="auto" gap={12} my={4}>

      {
        
        showHome && countries.map(country =>
        <GridItem w='100%' key={country.name} >
          
          <Country
           
            imgUrl={country.flag}
            name={country.name}
            population={country.population.toLocaleString()}
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
    </Container>
  </>
  )
}