import { Grid, GridItem } from '@chakra-ui/react'
import Country from './Country'
export default function CountryList(){

  return(
    <Grid 
      
      templateColumns='repeat(auto-fit, minmax(160px, 1fr))' 
      gap={12} my={6}>
  <GridItem w='100%' >
    <Country/>
    
    </GridItem>
      <GridItem w='100%' >
    <Country/>
    
    </GridItem>
      <GridItem w='100%' >
    <Country/>
    
    </GridItem>
      <GridItem w='100%' >
    <Country/>
    
    </GridItem>
      <GridItem w='100%' >
    <Country/>
    
    </GridItem>
  
</Grid>
  )
}