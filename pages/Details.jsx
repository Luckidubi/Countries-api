import { Box, Flex, Image, Heading, Button, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ElemBg, textColor } from '/src/style.jsx'
import Header from '/src/components/Header'
import { useParams } from 'react-router-dom'
import { useCountry } from '/src/CountryProvider'
import { useNavigate } from 'react-router-dom'


export default function Details() {
  let { name } = useParams()

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


  const getBorder = () => {
    let getBorders = getId.borders

    const countryBorders = getBorders && countries.filter(country => getBorders.includes(country.cioc))

    if (!countryBorders) {


      return (
        <div>No Borders</div>
      )

    }



    const list = countryBorders && countryBorders.map(item => item.name)

    const display = list && list.map(item => {
      return (

        <Button onClick={() => navigate(`/${item}`)} m={{ sm: 4 }} py={2} cursor="pointer" overflow="hidden" textAlign={['left', 'center']} fontSize='sm' key={item} whitespace="nowrap" variant='outline' boxShadow="md" px={{ sm: "4em" }} ml={2} my={2} _hover={{ boxShadow: 'md' }} textOverflow="ellipsis">

          {item}

        </Button>

      )
    })

    return display


  }


  return (
    <>
      <Header />
      <Box p={4} maxW="100%" bg={ElemBg} color={textColor} h="100vh" mb={4}>
        <Flex >
          <Box m={2} my={6}>
            <Button onClick={() => navigate(-1)} variant="outline" leftIcon={<ArrowBackIcon boxSize={5} />} w="6em">
              Back
            </Button>
          </Box>
        </Flex>
        <Flex

          alignContents="baseline"
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
                <Box><Text noOfLines={1}><b>Native Name:</b> {' '}   {getId && getId.nativeName} </Text></Box>
                <Box><Text noOfLines={1}><b>Population:</b>  {' '}  {getId && getId.population.toLocaleString()}</Text></Box>
                <Box><Text noOfLines={1}><b>Region:</b>{' '} {getId && getId.region}</Text></Box>
                <Box><Text noOfLines={1}><b>Sub Region:</b>{' '}  {getId && getId.subregion}</Text></Box>
                <Box><Text noOfLines={1}><b>Capital:</b> {' '} {getId && getId.capital}</Text></Box>
              </Box>

            </Box>

            <Box mb={3} mt={{ sm: 4, md: 15, xl: 16 }} mr={20} pr={{ lg: 20 }} >
              <Box ><Text noOfLines={1} ><b>Top Level Domain:</b> {' '} {getId && getId.topLevelDomain}</Text></Box>

              <Box >
                <Box ><Text noOfLines={1}><b>Currencies:</b> {' '} {countryCurrency()}</Text></Box></Box>
              <Box ><Text noOfLines={1}><b>Languages:</b> {' '} {countryName()}</Text></Box>
            </Box>


          </Box>


        </Flex>
        
        
        <Box  display={{ sm: "block", md: "flex" }} alignItems='center' flexWrap="wrap" ml={{ md: 2 }} my={{ sm: 6 }} mt={3} mb={4}>
          <Text as='b'>Border Countries:</Text>{' '} {getBorder()}
        </Box>
    
      </Box>
    </>
  )
}