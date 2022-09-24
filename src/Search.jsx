import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import {ElemBg} from './style'

export default function Search(){

  const {colorMode} = useColorMode()
 
  
  return (
    
    <Box m={5} rounded="md" bg={ElemBg} maxW="md">
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