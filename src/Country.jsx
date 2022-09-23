import { Box, Image} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export default function Country(){
  const ElemBg = useColorModeValue('hsl(0, 0%, 100%)','hsl(209, 23%, 22%)')
  const textColor = useColorModeValue('hsl(200, 15%, 8%)','hsl(0, 0%, 100%)')

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