import {Box, Flex, Image, Heading, Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import {ElemBg, textColor} from './style'
import Header from './Header'

export default function Details(){

  return (
    <>
    <Header/>
    <Box p={4} w="100%" bg={ElemBg} color={textColor}>
      <Flex>
      <Box m={2} my={6}>
        <Button variant="outline" leftIcon={<ArrowBackIcon boxSize={5}/>} w="6em">
          Back
          </Button>
      </Box>
      </Flex>
    <Flex 
      justify="space-between" 
      
      sx={{
    '@media screen and (max-width: 1024px)': {
      flexDirection: 'column',
      maxW: 'lg'
    },
  }}>
      <Box m={2} mr={20}>
        <Image src="https://flagcdn.com/bs.svg"
          w="100%"
          h="100%"
        
          />
      </Box>

      <Box display="flex"
       
        
        flexWrap="wrap"
        sx={{
    '@media screen and (max-width: 1024px)': {
      flexDirection: 'column',
      maxW: 'lg'
    },
  }}>

      <Box m={2} mt={{sm:4,md:8}} ml={{xl: 15}} mr={52}>
        <Heading my={4}>Country</Heading>
        <Box >
        <Box>Native Name: </Box>
        <Box>Population:</Box>
        <Box>Region:</Box>
       <Box>Sub Region:</Box> 
        <Box>Capital:</Box>
        </Box>
      
      </Box>

      <Box >
      <Box mt={{sm: 4, lg:32, }} mr={15} >Top Level Domain:</Box>
      <Box>Currencies:</Box>
      <Box>Languages: </Box>
      </Box>

      
      <Box display="flex"  alignItems="baseline" ml={{ md:6}} my={{sm:6}}>
        Border Countries: <Button variant='outline' boxShadow="md" px={{md:'4em'}} w={{base:'4em',md:'6em'}} ml={6}>Country</Button>
        </Box>
      </Box>
    
    </Flex>

      
      
        
      
      
      </Box>
    </>
  )
}