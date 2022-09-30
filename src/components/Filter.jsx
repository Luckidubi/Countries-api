import { Select, Box} from '@chakra-ui/react'
import {ElemBg, textColor} from '/src/style'
import {useCountry} from '/src/CountryProvider'
import {useState, useEffect} from 'react'

export default function Filter(){
    const {filterByRegion, setShowHome, clearSearch} = useCountry()
  const [filterValue, setFilterValue, ] = useState()
  
    const handleChange =  (e) => setFilterValue(e.target.value)
      
    useEffect(()=>{
      if (filterValue) {
      filterByRegion(filterValue)
        setShowHome(false)
      } else {
          setShowHome(true)
        clearSearch()       
        
      }
      
      
    },[filterValue])
   
  return(
    <Box bg={ElemBg}  m={5} maxW="sm">
      <Select 
        boxShadow="md" color={textColor} 
        focusBorderColor={ElemBg} 
        placeholder='Filter by Region'
        value={console.log(filterValue)}
        onChange={handleChange}
        onBlur = {handleChange}
        >
       
  <option value='Africa'>Africa</option>
  <option value='Europe'>Europe</option>
        <option value='Asia'>Asia</option>
        <option value='Oceania'>Oceania</option>
        <option value='Americas'>Americas</option>
        <option value='Polar'>Polar</option>
        <option value='Antarctic Ocean'>Antarctic Ocean</option>
</Select>
    
    </Box>
  )
}