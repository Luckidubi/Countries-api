import { Box, Image} from '@chakra-ui/react'
import {ElemBg, textColor} from './style'

export default function Country(){
  

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
      bg={ElemBg}
      color={textColor}>
    <Image 
      fallbackSrc='https://via.placeholder.com/150' 
    
      src='https://flagcdn.com/w320/au.png'
      w="100%"/>
      <Box p={6}>
        <Box
          mt='1'
          mb='3'
          fontWeight='bold'
          as='h3'
          lineHeight='tight'
          noOfLines={1}
         
        >
          Country
        </Box>
        <Box>Population</Box>
        <Box>Region</Box>
        <Box>Capital</Box>
      
      </Box>
    
    </Box>
  )
  
}