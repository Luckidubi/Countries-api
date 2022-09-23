import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function Search(){

  const {colorMode} = useColorMode()

  const bg = useColorModeValue('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)')
 
  
  return (
    
    <Box m={5} rounded="md" bg="hsl(0, 0%, 100%)" maxW="md">
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input boxShadow="md" type='search' 
      placeholder='Search for a country...'
      _placeholder={{ fontSize: '14px', color: colorMode == 'light' ? 'hsl(0, 0%, 52%)': 'hsl(0, 0%, 100%)'  }}/>
  </InputGroup>
    </Box>

  
  )
}