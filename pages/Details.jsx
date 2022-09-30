import { Box, Flex, Image, Heading, Button, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ElemBg, textColor } from '/src/style.jsx'
import Header from '/src/components/Header'
import { useParams, Link } from 'react-router-dom'
import { useCountry } from '/src/CountryProvider'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from "axios";

export default function Details() {
  let { name } = useParams()
  let [isLoading, setLoading] = useState(true)
  const [borders, setBorder] = useState([])
 


  let navigate = useNavigate()

  const { countries } = useCountry()
  let getId = countries.find(country => country.name === name)

  

  const countryName = () => {

    let language = Object.entries(getId.languages)

    const getName = language.map((item) => item[1].name)

    return getName.join(',  ')

  }
  
  const countryCurrency = () => {
    let currency = Object.entries(getId.currencies)

    const getCurrency = currency.map((item) => item[1].name)

    return getCurrency.join(',  ')

  }
  
  
  // const getCountryBorders = () => {
  //    let borders = getId.borders
  //   console.log(borders)
  //   if (isLoading) return <Text>No Border found</Text>;
  //   const countryBorders = countries.filter(country => borders.includes(country.cioc))

  //   return countryBorders
   

  // }
    
  const getBorder = () => {
    let getBorders = getId.borders

     const countryBorders = getBorders && countries.filter(country => getBorders.includes(country.cioc))

    if(!countryBorders) return <div>No Borders</div>

    const list = countryBorders && countryBorders.map(item=>item.name)

    const display = list && list.map(item => {
      return (
     
      <Button onClick={()=>navigate(`/${item}`)} m={{sm:4}} py={2} cursor="pointer" overflow="hidden" textAlign={['left', 'center']} fontSize='sm' key={item} whitespace="nowrap" variant='outline' boxShadow="md" px={{ sm: "4em" }} w={{ sm: '6em', md: '8em' }} ml={2}  my={2} _hover={{ boxShadow: 'md' }}>
        
          {item}
            
      </Button>
      
    )
    }) 
    
  return display
  

  }


 
  return (
    <>
      <Header />
      <Box p={4} maxW="100%" bg={ElemBg} color={textColor} h="100vh">
        <Flex >
          <Box m={2} my={6}>
            <Button onClick={()=>navigate(-1)} variant="outline" leftIcon={<ArrowBackIcon boxSize={5} />} w="6em">
              Back
            </Button>
          </Box>
        </Flex>
        <Flex

          alignContents="flex-start"
          sx={{
            '@media screen and (max-width: 1024px)': {
              flexDirection: 'column',
              maxW: 'lg'

            },
          }}>
          <Box m={2} mr={16} mb={4} >
            <Image src={getId && getId.flags.png}

              flexShrink={0}
              maxH={350}
              maxW={470}
              // w="100%"
              // h="100%"
            />
          </Box>

          <Box display={{ md: "flex", sm: "block" }}

            justifyContents="center"
            flexWrap="wrap"
            sx={{
              '@media screen and (max-width: 1024px)': {
                flexDirection: 'column',
                maxW: 'lg'
              },
            }}>

            <Box m={3} ml={{ xl: 10 }} mr={20} mb={{ sm: 4 }}>
              <Heading my={2}>{getId.name}</Heading>
              <Box>
                <Box><Text noOfLines={1}>Native Name: {' '}   {getId && getId.nativeName} </Text></Box>
                <Box><Text noOfLines={1}>Population:  {' '}  {getId && getId.population}</Text></Box>
                <Box><Text noOfLines={1}>Region: {getId && getId.region}</Text></Box>
                <Box><Text noOfLines={1}>Sub Region: {getId && getId.subregion}</Text></Box>
                <Box><Text noOfLines={1}>Capital: {getId && getId.capital}</Text></Box>
              </Box>

            </Box>

            <Box mb={3} mt={{ sm: 4, md: 15, xl: 20 }} mr={10} p={2} >
              <Box  >Top Level Domain:</Box><Text> {getId && getId.topLevelDomain}</Text>

              <Box noOfLines={1}>
              <Box ><Text>Currencies: {countryCurrency()}</Text></Box></Box>
              <Box  letterSpacings="tight"><Box>Languages:</Box> <Text >{countryName()}</Text></Box>
            </Box>

            


          </Box>
          


        </Flex>
        <Box display={{ sm: "block", md: "flex" }} alignItems='center' flexWrap="wrap" ml={{ md: 2 }} my={{ sm: 6 }} mt={3}>
              <Text as='b'>Border Countries:</Text> {getBorder()}
            </Box>




      </Box>
    </>
  )
}