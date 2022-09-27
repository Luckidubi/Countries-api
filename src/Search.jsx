import { Input, InputGroup, InputLeftElement, Box, FormControl } from '@chakra-ui/react'
import { useState, useEffect } from "react"
import { SearchIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import { ElemBg } from './style'
import { useCountry } from './CountryProvider'


export default function Search() {

  const { colorMode } = useColorMode()
  const { searchCountries, clearSearch } = useCountry()
  const [searchValue, setSearchValue] = useState('')
  
  
  
  

  
  
  const handleChange = (e) => { 
    setSearchValue(e.target.value)
    
  }
  
  useEffect(()=>{
    if (searchValue !== '') {
      searchCountries(searchValue);

    } else if (searchValue === '') {
       clearSearch();
    } 
  }, [searchValue])


  return (

    <Box m={5} rounded="md" bg={ElemBg} maxW="md">
      <FormControl>
        <InputGroup>
          <InputLeftElement
            
            children={<SearchIcon color='gray.300' />}
          />
          <Input boxShadow="md" type='search'
            placeholder='Search for a country...'
            _placeholder={{ fontSize: '14px', color: colorMode == 'light' ? 'hsl(0, 0%, 52%)' : 'hsl(0, 0%, 100%)' }}
            onChange={handleChange}
            value={searchValue}
          />
        </InputGroup>
        </FormControl>
      
    </Box>


  )
}