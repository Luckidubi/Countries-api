import { Box, Image} from '@chakra-ui/react'
import {ElemBg, textColor} from './style'

export default function Country({imgUrl, name, population, region, capital}){
  

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
      bg={ElemBg}
      color={textColor} >
      <Box>
    <Image 
      fallbackSrc='https://via.placeholder.com/150' 
    
      src={imgUrl}
      w="100%"
      h="100%"
      boxSizing="border-box"
      />
        </Box>
      <Box p={4} w='100%' h="100%" >
        <Box
          mt='1'
          mb='3'
          fontWeight='bold'
          as='h3'
          lineHeight='tight'
          noOfLines={1}
         
        >
          {name}
        </Box>
        <Box noOfLines={1}>Population: {population}</Box>
        <Box noOfLines={1}>Region: {region}</Box>
        <Box noOfLines={1}>Capital: {capital}</Box>
      
      </Box>
    
    </Box>
  )
  
}